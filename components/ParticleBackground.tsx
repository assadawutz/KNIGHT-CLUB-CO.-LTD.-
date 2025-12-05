import React, { useEffect, useRef } from 'react';
import { useContent } from '../contexts/ContentContext';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { content } = useContent();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Helper to get RGB values for alpha manipulation
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 255, g: 255, b: 255 };
    };

    const getThemeColors = () => {
      const style = getComputedStyle(document.documentElement);
      return {
        accent: style.getPropertyValue('--knight-accent').trim() || '#f97316',
        primary: style.getPropertyValue('--knight-primary').trim() || '#ef4444'
      };
    };

    let themeColors = getThemeColors();
    let accentRgb = hexToRgb(themeColors.accent);

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    
    // Adjusted density for a cleaner "Tech Mesh" look
    // Not too crowded, but enough to form connections
    const particleCount = Math.min(width * 0.08, 100); 

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3, // Slower, smoother movement
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 1, // Slightly larger base points
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and Draw
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Soft bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle (Node)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = themeColors.accent;
        ctx.globalAlpha = 0.5; // Base visibility for nodes
        ctx.fill();

        // Draw Connections (Edges)
        // Connect to other particles if they are close enough
        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 180; // Connection range

            if (distance < maxDist) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                
                // Opacity based on distance (closer = more opaque)
                const alpha = (1 - distance / maxDist) * 0.25; 
                
                ctx.strokeStyle = `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, ${alpha})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
      });

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const updateColors = () => {
       setTimeout(() => {
          themeColors = getThemeColors();
          accentRgb = hexToRgb(themeColors.accent);
       }, 100);
    };

    window.addEventListener('resize', handleResize);
    
    // Listen for theme changes to update color instantly
    updateColors();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [content.theme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;