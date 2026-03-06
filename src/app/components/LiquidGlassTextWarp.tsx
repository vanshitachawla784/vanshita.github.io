import React from "react";
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface LiquidGlassTextWarpProps {
  text: string;
  fontSize?: string;
  speed?: number;
  intensity?: number;
}

export const LiquidGlassTextWarp = ({ 
  text,
  fontSize = 'clamp(4rem, 12vw, 12rem)',
  speed = 2.5,
  intensity = 1 
}: LiquidGlassTextWarpProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [liquidPos, setLiquidPos] = useState(-200);

  useEffect(() => {
    const canvas = canvasRef.current;
    const textCanvas = textCanvasRef.current;
    const container = containerRef.current;
    
    if (!canvas || !textCanvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const textCtx = textCanvas.getContext('2d');
    if (!ctx || !textCtx) return;

    // Setup function
    const setup = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return false;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = rect.width;
      const height = rect.height;
      
      if (width <= 0 || height <= 0) return false;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      textCanvas.width = width * dpr;
      textCanvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      textCtx.scale(dpr, dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      textCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Draw text
      textCtx.clearRect(0, 0, width, height);
      textCtx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      textCtx.font = `300 ${fontSize} -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
      textCtx.textAlign = 'center';
      textCtx.textBaseline = 'middle';
      textCtx.letterSpacing = '0.1em';
      textCtx.shadowColor = 'rgba(168, 85, 247, 0.5)';
      textCtx.shadowBlur = 40;
      
      // Apply gradient
      const gradient = textCtx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.6)');
      textCtx.fillStyle = gradient;
      textCtx.fillText(text, width / 2, height / 2);

      return { width, height, dpr };
    };

    const dims = setup();
    if (!dims) return;

    let currentLiquidPos = -200;

    const animate = () => {
      if (!dims || canvas.width === 0 || canvas.height === 0) return;

      const { width, height, dpr } = dims;
      ctx.clearRect(0, 0, width, height);
      
      let textImageData;
      try {
        textImageData = textCtx.getImageData(0, 0, canvas.width, canvas.height);
      } catch (e) {
        return;
      }
      
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      
      // Update liquid position
      currentLiquidPos += speed * 0.4;
      if (currentLiquidPos > width + 200) {
        currentLiquidPos = -200;
      }
      setLiquidPos(currentLiquidPos);

      const liquidX = currentLiquidPos;
      const liquidWidth = 180;
      
      // Process pixels
      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const scaledX = x / dpr;
          const scaledY = y / dpr;
          
          const distFromLiquid = Math.abs(scaledX - liquidX);
          const isInLiquid = distFromLiquid < liquidWidth / 2;
          
          let sourceX = x;
          let sourceY = y;
          
          if (isInLiquid) {
            const normalizedDist = distFromLiquid / (liquidWidth / 2);
            const waveIntensity = (1 - normalizedDist * normalizedDist) * intensity;
            
            const time = Date.now() * 0.002;
            const ripple = Math.sin(scaledY * 0.04 + time * 2) * 12 * waveIntensity;
            const verticalWave = Math.sin(scaledX * 0.08 + time * 1.5) * 8 * waveIntensity;
            
            const centerX = liquidX;
            const centerY = height / 2;
            const dx = scaledX - centerX;
            const dy = scaledY - centerY;
            const magnification = 1 + (waveIntensity * 0.25);
            
            sourceX = Math.floor((centerX + dx / magnification + ripple) * dpr);
            sourceY = Math.floor((centerY + dy / magnification + verticalWave) * dpr);
            
            // Mouse interaction
            if (mousePos.x > 0) {
              const distFromMouse = Math.hypot(scaledX - mousePos.x, scaledY - mousePos.y);
              if (distFromMouse < 100) {
                const mouseEffect = (1 - distFromMouse / 100) * 20;
                const angle = Math.atan2(scaledY - mousePos.y, scaledX - mousePos.x);
                sourceX += Math.cos(angle) * mouseEffect * dpr;
                sourceY += Math.sin(angle) * mouseEffect * dpr;
              }
            }
          }
          
          sourceX = Math.max(0, Math.min(canvas.width - 1, Math.floor(sourceX)));
          sourceY = Math.max(0, Math.min(canvas.height - 1, Math.floor(sourceY)));
          
          const targetIdx = (y * canvas.width + x) * 4;
          const sourceIdx = (sourceY * canvas.width + sourceX) * 4;
          
          imageData.data[targetIdx] = textImageData.data[sourceIdx];
          imageData.data[targetIdx + 1] = textImageData.data[sourceIdx + 1];
          imageData.data[targetIdx + 2] = textImageData.data[sourceIdx + 2];
          imageData.data[targetIdx + 3] = textImageData.data[sourceIdx + 3];
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      animationRef.current = requestAnimationFrame(animate);
    };

    const timeoutId = setTimeout(() => animate(), 100);

    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [text, fontSize, speed, intensity, mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full flex justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
  height: `calc(${fontSize} + 120px)`
}}

    >
      <canvas
        ref={textCanvasRef}
        className="absolute opacity-0 pointer-events-none"
      />
      
      <canvas
        ref={canvasRef}
        className="relative z-10"
      />
      
      <LiquidGlassBlob position={liquidPos} />
    </div>
  );
};

const LiquidGlassBlob = ({ position }: { position: number }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute top-0 bottom-0"
        style={{
          left: position - 90,
          width: 180,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 65%)',
            backdropFilter: 'blur(12px) saturate(180%)',
            WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            borderRadius: '50%',
            transform: 'scaleY(2)',
            boxShadow: '0 0 60px rgba(168, 85, 247, 0.4), inset 0 0 40px rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Shine highlight */}
          <motion.div
            className="absolute rounded-full"
            style={{
              top: '15%',
              left: '25%',
              width: '40%',
              height: '30%',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, transparent 60%)',
              filter: 'blur(20px)',
            }}
            animate={{
              x: [0, 8, 0],
              y: [0, -4, 0],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Edge glow */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.2)',
            }}
          />
          
          {/* Liquid particles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 20 + Math.random() * 15,
                height: 20 + Math.random() * 15,
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
                filter: 'blur(6px)',
              }}
              animate={{
                y: [0, -8 + Math.random() * 16, 0],
                x: [0, -6 + Math.random() * 12, 0],
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 1.8 + Math.random() * 1,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 1.5,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
