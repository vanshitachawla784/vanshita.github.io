import React from "react";
import { motion } from 'motion/react';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated gradient fog - magenta/violet tones */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(219, 39, 119, 0.3) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: ['-20%', '20%', '-20%'],
          y: ['-10%', '10%', '-10%'],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '-20%', y: '-10%' }}
      />
      
      {/* Second gradient fog for depth */}
      <motion.div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)',
          filter: 'blur(120px)',
        }}
        animate={{
          x: ['10%', '-10%', '10%'],
          y: ['5%', '-5%', '5%'],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ x: '10%', y: '5%' }}
      />
      
      {/* Third subtle fog layer */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[700px] h-[700px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)',
          filter: 'blur(140px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};
