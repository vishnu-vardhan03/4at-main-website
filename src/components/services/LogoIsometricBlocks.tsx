import { useEffect, useRef } from "react";

export function LogoIsometricBlocks({ activeIndex = 0, onClick }: { activeIndex?: number; onClick?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let animationFrameId: number;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    let startTime = Date.now();

    // Pulse class for shockwave rings on merge
    class PulseRing {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      opacity: number;
      color: string;

      constructor(x: number, y: number, maxRadius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = 5;
        this.maxRadius = maxRadius;
        this.opacity = 1.0;
        this.color = color;
      }

      update() {
        this.radius += (this.maxRadius - this.radius) * 0.08;
        this.opacity = 1 - (this.radius / this.maxRadius);
      }

      draw(c: CanvasRenderingContext2D) {
        if (this.opacity <= 0) return;
        c.save();
        c.strokeStyle = this.color;
        c.lineWidth = 1.5;
        c.globalAlpha = this.opacity;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.stroke();
        c.restore();
      }
    }

    // Particle class for background contraction effect
    class Particle {
      x: number;
      y: number;
      ox: number; // original relative offset
      oy: number;
      size: number;
      color: string;

      constructor(cx: number, cy: number) {
        const angle = Math.random() * Math.PI * 2;
        const dist = 120 + Math.random() * 220;
        this.ox = Math.cos(angle) * dist;
        this.oy = Math.sin(angle) * dist;
        this.x = cx + this.ox;
        this.y = cy + this.oy;
        this.size = 1 + Math.random() * 1.5;
        this.color = Math.random() > 0.5 ? "rgba(34, 211, 238, 0.2)" : "rgba(6, 182, 212, 0.15)";
      }

      update(cx: number, cy: number, contractFactor: number, time: number) {
        // Organic float
        const floatX = Math.sin(time + this.ox) * 3;
        const floatY = Math.cos(time + this.oy) * 3;
        
        // Contract factor pulls them closer
        const pull = 1 - contractFactor * 0.7;
        this.x = cx + this.ox * pull + floatX;
        this.y = cy + this.oy * pull + floatY;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
      }
    }

    const particles: Particle[] = [];
    const centerX = width > 768 ? width * 0.78 : width / 2;
    const centerY = height / 2;
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle(centerX, centerY));
    }

    const pulseRings: PulseRing[] = [];

    // Draw modern geometric bold digit "1"
    const drawGeometricOne = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      h: number,
      opacity: number,
      glow: number,
      primaryColor: string,
      glowColor: string
    ) => {
      c.save();
      c.globalAlpha = opacity;
      c.lineJoin = "miter";
      c.lineCap = "butt";
      c.miterLimit = 10;

      const w = h * 0.16; // Stem width matching logo '4'
      const tickW = h * 0.15;
      const tickH = h * 0.22;

      const drawPath = () => {
        c.beginPath();
        // Bottom-left of tick junction on the stem
        c.moveTo(cx - w/2, cy - h/2 + tickH);
        // Bottom-left corner of tick arm
        c.lineTo(cx - w/2 - tickW, cy - h/2 + tickH);
        // Top-left corner of tick arm (creates a flat vertical cut of thickness w*0.7)
        c.lineTo(cx - w/2 - tickW, cy - h/2 + tickH - w * 0.7);
        // Inner slope connecting to stem top-left
        c.lineTo(cx - w/2, cy - h/2);
        // Top-right corner of stem
        c.lineTo(cx + w/2, cy - h/2);
        // Bottom-right corner of stem
        c.lineTo(cx + w/2, cy + h/2);
        // Bottom-left corner of stem
        c.lineTo(cx - w/2, cy + h/2);
        c.closePath();
      };

      // 1. Soft Background Glow shadow
      if (glow > 0.05) {
        c.shadowColor = glowColor;
        c.shadowBlur = 35 * glow;
        c.fillStyle = "rgba(0, 0, 0, 0.2)";
        drawPath();
        c.fill();
        c.shadowBlur = 0; // Reset
      }

      // 2. Opaque Fill Gradient
      const fillGrad = c.createLinearGradient(cx, cy - h/2, cx, cy + h/2);
      fillGrad.addColorStop(0, primaryColor);
      const darkColor = primaryColor === "#22d3ee" ? "#0891b2" : "#6b21a8";
      fillGrad.addColorStop(1, darkColor);
      c.fillStyle = fillGrad;
      c.globalAlpha = opacity;
      drawPath();
      c.fill();

      // 3. Crisp solid white border
      c.strokeStyle = "#ffffff";
      c.lineWidth = 2.5;
      c.globalAlpha = opacity;
      drawPath();
      c.stroke();

      c.restore();
    };

    let triggerRing = false;

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const duration = 6.0; // Total loop duration
      const progress = elapsed % duration;

      ctx.clearRect(0, 0, width, height);

      // Responsive center & size
      const cx = width > 768 ? width * 0.78 : width / 2;
      const cy = height / 2;
      const baseHeight = Math.min(width, height) * 0.25;

      const time = elapsed * 1.5;
      const floatX = Math.sin(time) * 5;
      const floatY = Math.cos(time) * 5;

      // Animation States calculation (improved motion curves)
      let gap = 60; // horizontal spacing between 1 and 1
      let scale = 1.0;
      let leftOpacity = 1.0;
      let glow = 0.0;
      let contractFactor = 0.0; // for background particle contraction

      if (progress < 1.6) {
        // State 0: static 11
        gap = 60;
        scale = 1.0;
        leftOpacity = 1.0;
        glow = 0.1;
        contractFactor = 0.0;
        triggerRing = false;
      } else if (progress < 2.8) {
        // State 1: Left 1 slides into Right 1 with motion blur trail
        const t = (progress - 1.6) / 1.2; // 0 to 1
        // Smooth cubic ease-in-out
        const eased = t * t * (3 - 2 * t);
        gap = 60 * (1 - eased);
        scale = 1.0;
        leftOpacity = 1.0 - eased * 0.25;
        glow = 0.1 + eased * 0.3;
        contractFactor = eased * 0.4;
      } else if (progress < 4.0) {
        // State 2: Merge complete. Pulse scale up & fade left 1
        const t = (progress - 2.8) / 1.2; // 0 to 1
        const eased = t * t * (3 - 2 * t);
        gap = 0;
        scale = 1.0 + eased * 0.55; // grows to 1.55
        leftOpacity = 0.75 * (1 - eased);
        glow = 0.4 + eased * 0.6;
        contractFactor = 0.4 + eased * 0.6;

        // Trigger a neat shockwave ring once right at the merge point
        if (!triggerRing) {
          pulseRings.push(new PulseRing(cx + floatX, cy + floatY, baseHeight * 1.8, "rgba(34, 211, 238, 0.6)"));
          pulseRings.push(new PulseRing(cx + floatX, cy + floatY, baseHeight * 2.4, "rgba(6, 182, 212, 0.4)"));
          triggerRing = true;
        }
      } else if (progress < 5.0) {
        // State 3: Hold static 1
        gap = 0;
        scale = 1.55;
        leftOpacity = 0.0;
        glow = 1.0;
        contractFactor = 1.0;
      } else {
        // State 4: Quick reset / transition back to 11
        const t = (progress - 5.0) / 1.0; // 0 to 1
        const eased = t * t * (3 - 2 * t);
        gap = 60 * eased;
        scale = 1.55 - eased * 0.55;
        leftOpacity = eased;
        glow = 1.0 - eased * 0.9;
        contractFactor = 1.0 - eased * 1.0;
        triggerRing = false;
      }

      // Update and Draw Background Particles
      particles.forEach((p) => {
        p.update(cx + floatX, cy + floatY, contractFactor, time);
        p.draw(ctx);
      });

      // Update and Draw Shockwave pulse rings
      for (let i = pulseRings.length - 1; i >= 0; i--) {
        const ring = pulseRings[i];
        ring.update();
        ring.draw(ctx);
        if (ring.opacity <= 0.01) {
          pulseRings.splice(i, 1);
        }
      }

      // Draw sliding motion trails for the left digit A
      if (progress > 1.6 && progress < 2.8 && leftOpacity > 0.05) {
        const t = (progress - 1.6) / 1.2;
        // Draw 2 trail shadows back in time
        for (let j = 1; j <= 2; j++) {
          const trailT = Math.max(0, t - j * 0.07);
          const trailEased = trailT * trailT * (3 - 2 * trailT);
          const trailGap = 60 * (1 - trailEased);
          const trailX = cx - trailGap + floatX;
          const trailOpacity = leftOpacity * 0.25 * (1 / j);
          drawGeometricOne(
            ctx,
            trailX,
            cy + floatY,
            baseHeight * scale,
            trailOpacity,
            0,
            "#22d3ee",
            "rgba(6, 182, 212, 0.4)"
          );
        }
      }

      // Draw Left "1" (Digit A) - Deep Purple theme
      if (leftOpacity > 0.01) {
        const ax = cx - gap + floatX;
        const ay = cy + floatY;
        const ah = baseHeight * scale;
        drawGeometricOne(
          ctx, 
          ax, 
          ay, 
          ah, 
          leftOpacity, 
          glow * leftOpacity, 
          "#38bdf8", 
          "rgba(14, 165, 233, 0.85)"
        );
      }

      // Draw Right "1" (Digit B) - Cyan / Blue theme
      const bx = cx + gap + floatX;
      const by = cy + floatY;
      const bh = baseHeight * scale;
      drawGeometricOne(
        ctx, 
        bx, 
        by, 
        bh, 
        1.0, 
        glow, 
        "#38bdf8", 
        "rgba(14, 165, 233, 0.9)"
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-90"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
