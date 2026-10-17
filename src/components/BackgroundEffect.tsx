import React, { useEffect, useRef } from 'react';

/**
 * BackgroundEffect — Full-page interactive liquid particle background.
 * Inspired by the GPGPU liquid sculpture particle physics.
 * Replaces the static background with an interactive fluid particle field
 * that swirls in the wake of the cursor and settles back into an ambient wave.
 */
export const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle grid settings
    const isMobile = width < 768;
    const spacing = isMobile ? 32 : 24;
    const cols = Math.floor(width / spacing);
    const rows = Math.floor(height / spacing);

    interface Particle {
      originX: number;
      originY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      color: string;
      phase: number;
    }

    const particles: Particle[] = [];
    const colors = [
      'rgba(37, 99, 235, ',   // Royal Blue
      'rgba(79, 70, 229, ',   // Corporate Indigo
      'rgba(148, 163, 184, ', // Slate 400
      'rgba(59, 130, 246, ',  // Sky Blue
    ];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const ox = (c + 0.5) * spacing + (Math.random() - 0.5) * 6;
        const oy = (r + 0.5) * spacing + (Math.random() - 0.5) * 6;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          originX: ox,
          originY: oy,
          x: ox,
          y: oy,
          vx: 0,
          vy: 0,
          size: 1.2 + Math.random() * 1.4,
          baseAlpha: 0.12 + Math.random() * 0.18,
          color,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    // Pointer state & velocity tracking
    const mouse = {
      x: -9999,
      y: -9999,
      prevX: -9999,
      prevY: -9999,
      vx: 0,
      vy: 0,
      radius: isMobile ? 120 : 180,
      isDown: false,
      lastMove: 0,
    };

    const handlePointerMove = (e: PointerEvent) => {
      const now = performance.now();
      const dt = Math.max(1, now - (mouse.lastMove || now));
      mouse.lastMove = now;

      if (mouse.prevX < -9000) {
        mouse.prevX = e.clientX;
        mouse.prevY = e.clientY;
      }

      mouse.vx = ((e.clientX - mouse.prevX) / dt) * 16;
      mouse.vy = ((e.clientY - mouse.prevY) / dt) * 16;
      mouse.prevX = e.clientX;
      mouse.prevY = e.clientY;

      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handlePointerDown = (e: PointerEvent) => {
      mouse.isDown = true;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handlePointerUp = () => {
      mouse.isDown = false;
    };

    const handlePointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.vx = 0;
      mouse.vy = 0;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Visibility handling (pause when tab is hidden)
    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let time = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Dampen mouse velocity
      mouse.vx *= 0.92;
      mouse.vy *= 0.92;

      const mouseSpeed = Math.hypot(mouse.vx, mouse.vy);
      const wakeStrength = Math.min(mouseSpeed * 0.15, 2.5);
      const effectiveRadius = mouse.radius * (mouse.isDown ? 1.4 : 1.0);
      const r2 = effectiveRadius * effectiveRadius;

      const pCount = particles.length;
      for (let i = 0; i < pCount; i++) {
        const p = particles[i];

        // 1. Fluid Curl / Ambient Wave
        const ambientX = Math.sin(time + p.originY * 0.008 + p.phase) * 3;
        const ambientY = Math.cos(time + p.originX * 0.008 + p.phase) * 3;

        // 2. Interactive Liquid Disturbance (Wake & Swirl)
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < r2 && mouse.x > -9000) {
          const dist = Math.sqrt(distSq) || 1;
          const factor = (1 - dist / effectiveRadius);
          const force = factor * factor * (mouse.isDown ? 7 : 4);

          // Radial repulsion
          const nx = dx / dist;
          const ny = dy / dist;
          p.vx += nx * force;
          p.vy += ny * force;

          // Liquid wake swirl
          p.vx += (mouse.vx * 0.25 - ny * wakeStrength * 3) * factor;
          p.vy += (mouse.vy * 0.25 + nx * wakeStrength * 3) * factor;
        }

        // 3. Elastic Return to Home
        const targetX = p.originX + ambientX;
        const targetY = p.originY + ambientY;
        const springX = (targetX - p.x) * 0.045;
        const springY = (targetY - p.y) * 0.045;

        p.vx += springX;
        p.vy += springY;

        // Viscous fluid damping
        p.vx *= 0.88;
        p.vy *= 0.88;

        p.x += p.vx;
        p.y += p.vy;

        // Velocity-based glint
        const speed = Math.hypot(p.vx, p.vy);
        const glint = Math.min(speed * 0.18, 0.6);
        const alpha = Math.min(1, p.baseAlpha + glint);

        // Render droplet / particle
        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size + glint * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.75,
      }}
      aria-hidden="true"
    />
  );
};
