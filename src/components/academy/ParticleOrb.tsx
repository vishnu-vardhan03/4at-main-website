"use client";

import { useEffect, useRef } from "react";

export function ParticleOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize raw WebGL context with alpha enabled for seamless DOM background blending
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) {
      console.error("WebGL context could not be initialized");
      return;
    }

    // Vertex Shader: Fills the screen viewport
    const vsSource = `
      attribute vec2 position;
      varying vec2 v_uv;
      void main() {
        v_uv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment Shader: Computes an organic, fluid 2D blob with concentric topographic rings,
    // brand colors (teal/sky blue/violet), soft bloom, and chromatic aberration.
    // Includes radial vignette mask and scaled UV coordinates to guarantee zero boundary clipping.
    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      varying vec2 v_uv;

      // 2D Hash function for static dither noise
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      // Siri-like wobbly field generator with dynamic organic waves
      float getField(vec2 uv, float t, float angleOffset, float baseRadius) {
        // Warp coordinates for a jelly fluid look
        vec2 wUv = uv + vec2(
          sin(uv.y * 6.0 + t * 0.5) * 0.02,
          cos(uv.x * 6.0 + t * 0.5) * 0.02
        );
        
        float angle = atan(wUv.y, wUv.x) + angleOffset;
        float d = length(wUv);
        
        float w1 = sin(angle * 3.0 + t * 1.5) * 0.06;
        float w2 = cos(angle * 7.0 - t * 0.8) * 0.03;
        float w3 = sin(angle * 12.0 + t * 2.2) * 0.015;
        
        float r = baseRadius + w1 + w2 + w3;
        float distToRing = d - r;
        
        // Inner soft fill vs outer crisp edge
        float width = (distToRing < 0.0) ? 0.04 : 0.005;
        return exp(-pow(distToRing, 2.0) / width);
      }

      void main() {
        // Center-aligned aspect-corrected screen UVs
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
        float t = u_time * 0.8;

        // Scale coordinates to fit nicely
        vec2 localUv = uv * 1.45;

        // Chromatic aberration UV offsets
        vec2 uvViolet = localUv * (1.0 + 0.02 * sin(t * 0.5));
        vec2 uvSkyBlue = localUv;
        vec2 uvTeal = localUv * (1.0 - 0.02 * sin(t * 0.5));

        // Get wobbly fields for each color layer
        float f1 = getField(uvViolet, t * 1.2, 0.0, 0.28);
        float f2 = getField(uvSkyBlue, t * 0.9, 2.09, 0.25);
        float f3 = getField(uvTeal, t * 1.5, 4.18, 0.22);

        // Central white-hot core
        float centerGlow = exp(-pow(length(localUv), 2.0) / 0.015);

        // Premium vibrant neon brand colors
        vec3 violet = vec3(0.68, 0.40, 1.0);    // Neon Violet
        vec3 skyBlue = vec3(0.20, 0.70, 1.0);   // Neon Sky Blue
        vec3 teal = vec3(0.05, 0.98, 0.85);     // Neon Teal
        vec3 whiteCore = vec3(0.98, 1.0, 1.0);  // Siri-like core

        // Additive blend of layers
        vec3 col = violet * f1 + skyBlue * f2 + teal * f3 + whiteCore * centerGlow * 0.6;

        // Alpha transparency so the orb blends cleanly
        float alpha = max(max(f1, f2), f3) * 0.95 + centerGlow * 0.6;

        // Boundary vignette fade to prevent rectangular clipping
        float boundaryFade = smoothstep(0.48, 0.36, length(uv));
        col *= boundaryFade;
        alpha *= boundaryFade;
        alpha = clamp(alpha, 0.0, 1.0);

        // Subtly inject very fine static noise to prevent banding
        float grain = hash(gl_FragCoord.xy) * 0.012;
        col += col * grain;

        gl_FragColor = vec4(col, alpha);
      }
    `;

    // Shader compiler helper
    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compilation log:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking log:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Quad geometry (2 triangles covering screen)
    const vertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, "u_time");
    const resolutionLoc = gl.getUniformLocation(program, "u_resolution");

    let startTime = Date.now();
    let animationFrameId: number;

    const resize = () => {
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };

    const render = () => {
      resize();

      // Clear with fully transparent background
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      
      const elapsed = (Date.now() - startTime) / 1000.0;
      gl.uniform1f(timeLoc, elapsed);
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-visible pointer-events-none select-none">
      {/* High-Performance WebGL Fluid Orb Canvas */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block will-change-transform"
        style={{ filter: "blur(35px)" }}
      />
    </div>
  );
}
