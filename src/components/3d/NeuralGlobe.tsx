"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number; y: number; z: number;
  vx: number; vy: number; vz: number;
  connections: number[];
  pulseStrength: number;
  pulseDecay: number;
}

export default function NeuralGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0;

    const POINT_COUNT = 120;
    const RADIUS = 0.38; // fraction of min(W,H)
    const CONNECTION_DIST = 0.14;
    const PULSE_RADIUS = 0.22;

    const points: Point[] = [];

    function resize() {
      const rect = canvas.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas.width  = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function init() {
      points.length = 0;
      for (let i = 0; i < POINT_COUNT; i++) {
        // Fibonacci sphere distribution
        const phi = Math.acos(1 - 2 * (i + 0.5) / POINT_COUNT);
        const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
        const r = RADIUS * Math.min(W, H);
        points.push({
          x: W / 2 + r * Math.sin(phi) * Math.cos(theta),
          y: H / 2 + r * Math.sin(phi) * Math.sin(theta),
          z: r * Math.cos(phi),
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          vz: (Math.random() - 0.5) * 0.15,
          connections: [],
          pulseStrength: 0,
          pulseDecay: 0.96,
        });
      }
      buildConnections();
    }

    function buildConnections() {
      const R = RADIUS * Math.min(W, H);
      const maxD = CONNECTION_DIST * Math.min(W, H) * 2;
      for (let i = 0; i < points.length; i++) {
        points[i].connections = [];
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dz = points[i].z - points[j].z;
          if (Math.sqrt(dx*dx + dy*dy + dz*dz) < maxD) {
            points[i].connections.push(j);
          }
        }
      }
    }

    let rotX = 0, rotY = 0;

    function rotatePoint(p: Point, cx: number, cy: number, ax: number, ay: number) {
      // Rotate around center
      let x = p.x - cx, y = p.y - cy, z = p.z;
      // Rotate Y
      const cosY = Math.cos(ay), sinY = Math.sin(ay);
      const nx = x * cosY + z * sinY;
      const nz = -x * sinY + z * cosY;
      x = nx; z = nz;
      // Rotate X
      const cosX = Math.cos(ax), sinX = Math.sin(ax);
      const ny = y * cosX - z * sinX;
      const nz2 = y * sinX + z * cosX;
      return { x: x + cx, y: ny + cy, z: nz2 };
    }

    function triggerPulse(mx: number, my: number) {
      const R = PULSE_RADIUS * Math.min(W, H);
      for (const p of points) {
        const dx = p.x - mx, dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < R) {
          p.pulseStrength = Math.max(p.pulseStrength, 1 - d / R);
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Ambient pulse — random neuron fires
      if (Math.random() < 0.06) {
        const idx = Math.floor(Math.random() * points.length);
        points[idx].pulseStrength = Math.max(points[idx].pulseStrength, 0.7);
      }

      // Update rotations
      rotY += 0.0025;
      rotX += 0.0008;

      // Update mouse-driven pulse
      if (mouseRef.current.active) {
        triggerPulse(mouseRef.current.x, mouseRef.current.y);
      }

      // Rotate & project all points
      const cx = W / 2, cy = H / 2;
      const projected = points.map((p) => {
        const r = rotatePoint(p, cx, cy, rotX, rotY);
        // Simple perspective
        const fov = 600;
        const scale = fov / (fov + r.z * 0.5);
        return {
          x: cx + (r.x - cx) * scale,
          y: cy + (r.y - cy) * scale,
          z: r.z,
          scale,
          pulse: p.pulseStrength,
        };
      });

      // Draw connections
      for (let i = 0; i < points.length; i++) {
        const p = projected[i];
        const depth = (p.z + RADIUS * Math.min(W, H)) / (2 * RADIUS * Math.min(W, H));
        const pulse = points[i].pulseStrength;

        for (const j of points[i].connections) {
          const q = projected[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          const maxD = CONNECTION_DIST * Math.min(W, H) * 2;
          const alpha = (1 - d / maxD) * depth * 0.5;

          if (pulse > 0.15 || points[j].pulseStrength > 0.15) {
            const pMax = Math.max(pulse, points[j].pulseStrength);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            const grad = ctx.createLinearGradient(p.x, p.y, q.x, q.y);
            grad.addColorStop(0, `rgba(167,139,250,${alpha + pMax * 0.7})`);
            grad.addColorStop(0.5, `rgba(45,212,191,${alpha + pMax * 0.5})`);
            grad.addColorStop(1, `rgba(125,211,252,${alpha + pMax * 0.4})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8 + pMax * 2.2;
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(167,139,250,${alpha * 0.45})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const pt = points[i];
        const depth = (p.z + RADIUS * Math.min(W, H)) / (2 * RADIUS * Math.min(W, H));
        const r = (1.4 + pt.pulseStrength * 4) * depth * p.scale;

        // Glow halo when pulsing
        if (pt.pulseStrength > 0.1) {
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 8);
          grd.addColorStop(0, `rgba(167,139,250,${pt.pulseStrength * 0.6})`);
          grd.addColorStop(1, "rgba(167,139,250,0)");
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 8, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, r), 0, Math.PI * 2);
        const col = pt.pulseStrength > 0.15 ? "#2dd4bf" : "#c4b5fd";
        ctx.fillStyle = col;
        ctx.globalAlpha = 0.5 + depth * 0.5;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Decay pulse
        pt.pulseStrength *= pt.pulseDecay;
        if (pt.pulseStrength < 0.01) pt.pulseStrength = 0;
      }

      frameRef.current = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    const handleResize = () => { resize(); init(); };
    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Trigger a big ripple burst on click
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      for (const p of points) {
        const dx = p.x - mx, dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        const R = 0.5 * Math.min(W, H);
        if (d < R) p.pulseStrength = Math.max(p.pulseStrength, 0.95 * (1 - d / R));
      }
    };
    const handleLeave = () => { mouseRef.current.active = false; };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("click", handleClick);
    canvas.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("click", handleClick);
      canvas.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-crosshair"
      style={{ display: "block" }}
      aria-label="Interactive neural network visualization"
    />
  );
}
