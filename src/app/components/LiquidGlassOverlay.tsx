import React from "react";
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

export const LiquidGlassOverlay = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform scroll position to vertical movement
  const y = useTransform(scrollY, [0, 2000, 4000, 6000], [0, 400, 1200, 2200]);
  
  useEffect(() => {
    // Trigger the initial horizontal sweep animation
    setHasLoaded(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Liquid Glass Layer */}
      <motion.div
        className="absolute left-0 right-0"
        style={{
          top: 0,
          height: '500px',
          y: y,
        }}
        initial={{ x: '-100%' }}
        animate={hasLoaded ? { x: '0%' } : { x: '-100%' }}
        transition={{
          x: {
            duration: 2,
            ease: [0.43, 0.13, 0.23, 0.96], // Custom ease for liquid feel
          },
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            borderRadius: '0 0 50% 50% / 0 0 20% 20%',
            boxShadow: '0 8px 32px 0 rgba(168, 85, 247, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Liquid shimmer effect */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          {/* Liquid droplets effect */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 60 + 40,
                  height: Math.random() * 60 + 40,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                  filter: 'blur(10px)',
                }}
                animate={{
                  y: [0, Math.random() * 50 - 25, 0],
                  x: [0, Math.random() * 30 - 15, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
