import React from "react";
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageCircle, Linkedin } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="contact" ref={ref} className="relative min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-12"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Top Label */}
          <motion.p
            className="text-sm tracking-widest opacity-50 uppercase"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Ready to Collaborate?
          </motion.p>

          {/* Main Headline */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl tracking-tight leading-tight">
              <span
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Let's Create
                <br />
                Something
              </span>
              <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.95) 0%, rgba(219, 39, 119, 0.95) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Amazing Together
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg opacity-60 tracking-wide max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Have a project in mind? Let's bring your vision to life through the power of video editing.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            
 
            <motion.button
             onClick={() => window.open("https://wa.me/917986934303", "_blank")}
              className="group relative px-10 py-5 rounded-2xl overflow-hidden min-w-[200px]"
              style={{
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.25) 0%, rgba(219, 39, 119, 0.25) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 60px rgba(168, 85, 247, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              
              <span className="relative flex items-center justify-center gap-3 text-lg tracking-wide">
                <MessageCircle className="w-5 h-5" />
                Get in Touch
              </span>
            </motion.button>

            <motion.button
              onClick={() => window.open("https://linkedin.com/in/vanshita-chawla-12182b3b2", "_blank")}
              className="group px-10 py-5 rounded-2xl min-w-[200px]"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 102, 194, 0.2) 0%, rgba(10, 102, 194, 0.1) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(10, 102, 194, 0.3)',
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 60px rgba(10, 102, 194, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-3 text-lg tracking-wide opacity-90 group-hover:opacity-100">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </span>
            </motion.button>
          </motion.div>

          {/* Footer Text */}
          <motion.p
            className="text-sm opacity-40 tracking-widest uppercase pt-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.4 } : { opacity: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            © 2026 Vanshita Chawla • All Rights Reserved
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
