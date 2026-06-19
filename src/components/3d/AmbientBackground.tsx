"use client";

import { useEffect, useRef } from "react";

interface Props {
  variant?: "violet" | "teal" | "mixed";
  intensity?: number;
}

export default function AmbientBackground({ variant = "violet", intensity = 1 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef  = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    let W = 0, H = 0;

    const colors =
      variant === "teal"   ? ["45,212,191", "125,211,252"] :
      variant === "mixed"  ? ["167,139,250", "45,212,191"]  :
                             ["167,139,250", "192,132,252"];

    interface Particle {
      x: number; y: number; z: number;
      vx: number; vy: number;
      r: number; alpha: number;
    }
    const particles: Particle[] = [];
    const COUNT = Math.floor(30 * intensity);

    function resize() {
      W = canvas.offsetWidth || 800;
      H = canvas.offsetHeight || 400;
      canvas.width  = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function init() {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * W, y: Math.random() * H,
          z: Math.random(),
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.18,
          r: 0.6 + Math.random() * 1.8,
          alpha: 0.15 + Math.random() * 0.35,
        });
      }
    }

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      t += 0.005;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        if (p.y > H + 20) p.y = -20;

        const col = colors[Math.floor(p.z * colors.length)];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},${p.alpha})`;
        ctx.fill();
      }

      // Soft connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          const maxD = 110;
          if (d < maxD) {
            const al = (1 - d / maxD) * 0.1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${colors[0]},${al})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      frameRef.current = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    const onResize = () => { resize(); init(); };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [variant, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
