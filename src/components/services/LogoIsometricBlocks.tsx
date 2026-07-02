import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: "ai" | "human";
  size: number;
  baseAlpha: number;
  alpha: number;
  pulseTime: number;
  pulseSpeed: number;
}

interface PulseRing {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

export function LogoIsometricBlocks({ activeIndex = 0, onClick }: { activeIndex?: number; onClick?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth || window.innerWidth || 1920;
    let height = canvas.offsetHeight || window.innerHeight || 1080;
    canvas.width = width;
    canvas.height = height;
    let animationFrameId: number;

    const particles: Particle[] = [];

    const spawnParticles = (count: number) => {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        const type = Math.random() > 0.5 ? "ai" : "human";
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          type,
          size: type === "human" ? 2 + Math.random() * 2 : 1 + Math.random() * 1.5,
          baseAlpha: 0.15 + Math.random() * 0.4,
          alpha: 0,
          pulseTime: Math.random() * Math.PI,
          pulseSpeed: 0.02 + Math.random() * 0.03,
        });
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      const newWidth = canvas.offsetWidth || window.innerWidth || 1920;
      const newHeight = canvas.offsetHeight || window.innerHeight || 1080;
      width = canvas.width = newWidth;
      height = canvas.height = newHeight;
      if (particles.length === 0 && width > 0 && height > 0) {
        spawnParticles(Math.min(Math.floor((width * height) / 12000), 100));
      }
    };
    window.addEventListener("resize", handleResize);

    // Mouse tracking
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 200,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("mouseenter", () => {
      mouse.active = true;
    });

    // Generate particles
    spawnParticles(Math.min(Math.floor((width * height) / 12000), 100));

    // Dynamic pulse rings from clicks
    let pulseRings: PulseRing[] = [];

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      pulseRings.push({
        x: clickX,
        y: clickY,
        radius: 10,
        maxRadius: Math.max(width, height) * 0.4,
        opacity: 0.8,
      });

      if (onClick) onClick();
    };

    canvas.addEventListener("click", handleCanvasClick);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw and update click ripples
      pulseRings = pulseRings.filter((ring) => {
        ring.radius += 6;
        ring.opacity -= 0.015;

        if (ring.opacity <= 0) return false;

        ctx.save();
        ctx.strokeStyle = "rgba(34, 211, 238, " + ring.opacity + ")";
        ctx.lineWidth = 2;
        ctx.shadowColor = "rgba(34, 211, 238, 0.4)";
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
        return true;
      });

      // 2. Update and draw particles
      particles.forEach((p) => {
        // Drift
        p.x += p.vx;
        p.y += p.vy;

        // Bounce borders
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Pulse alpha gently over time
        p.pulseTime += p.pulseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.pulseTime) * 0.15;

        // Mouse attraction & click wave interaction
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Pull towards mouse
            p.x += (dx / dist) * force * 0.8;
            p.y += (dy / dist) * force * 0.8;
            // Boost brightness when close to mouse
            p.alpha = Math.min(p.alpha + force * 0.4, 0.9);
          }
        }

        // Push away from click waves
        pulseRings.forEach((ring) => {
          const dx = p.x - ring.x;
          const dy = p.y - ring.y;
          const dist = Math.hypot(dx, dy);
          if (Math.abs(dist - ring.radius) < 50) {
            const pushForce = (1 - Math.abs(dist - ring.radius) / 50) * ring.opacity * 3;
            p.x += (dx / dist) * pushForce;
            p.y += (dy / dist) * pushForce;
          }
        });

        // Draw node
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        if (p.type === "ai") {
          ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha})`; // Cyan
          ctx.shadowColor = "rgba(34, 211, 238, 0.6)";
          ctx.shadowBlur = p.size * 3;
        } else {
          ctx.fillStyle = `rgba(167, 139, 250, ${p.alpha})`; // Purple
          ctx.shadowColor = "rgba(167, 139, 250, 0.6)";
          ctx.shadowBlur = p.size * 3;
        }
        
        ctx.fill();
        ctx.restore();
      });

      // 3. Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);
          const maxDist = 120;

          if (dist < maxDist) {
            let opacity = (1 - dist / maxDist) * 0.15;

            // Boost opacity if near the cursor
            if (mouse.active) {
              const d1 = Math.hypot(mouse.x - p1.x, mouse.y - p1.y);
              const d2 = Math.hypot(mouse.x - p2.x, mouse.y - p2.y);
              if (d1 < mouse.radius || d2 < mouse.radius) {
                const force = Math.max(
                  (mouse.radius - d1) / mouse.radius,
                  (mouse.radius - d2) / mouse.radius
                );
                opacity += force * 0.25;
              }
            }

            ctx.save();
            ctx.lineWidth = dist < 60 ? 1.2 : 0.8;

            if (p1.type === "ai" && p2.type === "ai") {
              ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
            } else if (p1.type === "human" && p2.type === "human") {
              ctx.strokeStyle = `rgba(167, 139, 250, ${opacity})`;
            } else {
              // Integrated connection (Cyan to Purple Gradient)
              const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
              grad.addColorStop(0, p1.type === "ai" ? `rgba(34, 211, 238, ${opacity})` : `rgba(167, 139, 250, ${opacity})`);
              grad.addColorStop(1, p2.type === "ai" ? `rgba(34, 211, 238, ${opacity})` : `rgba(167, 139, 250, ${opacity})`);
              ctx.strokeStyle = grad;
            }

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
        canvas.removeEventListener("click", handleCanvasClick);
      }
    };
  }, [onClick]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 w-full h-full pointer-events-auto"
      style={{
        background: "radial-gradient(circle at 80% 50%, rgba(167, 139, 250, 0.06) 0%, transparent 60%), radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.04) 0%, transparent 60%)",
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full block cursor-pointer" />
    </div>
  );
}
