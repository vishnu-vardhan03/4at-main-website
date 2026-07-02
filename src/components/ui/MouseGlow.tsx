"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(
          400px at ${position.x}px ${position.y}px,
<<<<<<< HEAD
          rgba(167,139,250,0.06),
=======
          rgba(99,102,241,0.08),
>>>>>>> eba822a4ba5f89e709ef2d53a3641fd0d3b52552
          transparent 400%
        )`,
      }}
    />
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> eba822a4ba5f89e709ef2d53a3641fd0d3b52552
