import React from "react";
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useState } from "react";

// const videoRef = useRef<HTMLVideoElement | null>(null);

// const handleVideoClick = () => {
//   if (videoRef.current) {
//     videoRef.current.muted = false;
//     videoRef.current.play();
//   }
// };

const featuredProjects = [
  {
    id: 1,
    title: 'Project 1',
    videoUrl: '/videos/starbucks.mp4', // Leave empty for user to add later
    thumbnail: '/images/starbucks_thumbnail.png', // Placeholder
  },
  {
    id: 2,
    title: 'Project 2',
    videoUrl: '', // Leave empty for user to add later
    thumbnail: '', // Placeholder
  },
  {
    id: 3,
    title: 'Project 3',
    videoUrl: '/videos/hardwork.mp4', // Leave empty for user to add later
    thumbnail: '/images/hardwork_thumbnail.png', // Placeholder
  },
];

const tools = [
  { 
    name: 'CapCut', 
    logo: '/images/capcut_logo.png' 
  },
  { 
    name: 'DaVinci Resolve', 
    logo: '/images/davinci_logo.png' 
  },
  { 
    name: 'Canva / Pinterest', 
    logo: '/images/Canva-Logo-Design.png' 
  },
  { 
    name: 'Audacity', 
    logo: '/images/audity_logo.png' 
  },
];

export const TableOfContentSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="projects" ref={ref} className="relative min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-16"
        >
          {/* Section Title */}
          <div className="text-center space-y-4">
            <motion.h2
              className="text-7xl tracking-wide"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.6) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              What I Do
            </motion.h2>
            <motion.p
              className="text-sm opacity-40 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.4 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Selected Work
            </motion.p>
            <motion.p
              className="text-lg opacity-60 tracking-wide"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Featured Projects
            </motion.p>
          </div>

          {/* Featured Projects Grid - 3 vertical videos (9:16) */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                }}
              >
                {/* 9:16 Aspect Ratio Container */}
                <div 
                  className="relative rounded-3xl overflow-hidden"
                  style={{
                    aspectRatio: '9/16',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Placeholder for video thumbnail */}
        {project.videoUrl ? (
  <video
    src={project.videoUrl}
    poster={project.thumbnail}
    autoPlay
    muted
    loop
    playsInline
    onClick={() => setActiveVideo(project.videoUrl)}
    className="absolute inset-0 w-full h-full object-cover cursor-pointer"
  />
) : (
  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-pink-900/20">
    <div className="text-center space-y-4 p-6">
      <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center">
        <svg 
          className="w-10 h-10 opacity-60" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
      <p className="text-lg opacity-70">{project.title}</p>
      <p className="text-xs opacity-40">Add your video here</p>
    </div>
  </div>
)}
                  {/* Hover overlay */}
                  <motion.div 
  className="absolute inset-0 pointer-events-none bg-gradient-to-t from-purple-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
/>
                  
                  {/* Bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-sm opacity-90">{project.title}</p>
                  </div>
                </div>
                
                {/* Decorative corner accent */}
                <motion.div
                  className="absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/60 to-pink-600/60 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ zIndex: -1 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* 🔥 FULL SCREEN VIDEO MODAL */}
          {activeVideo && (
            <div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
              onClick={() => setActiveVideo(null)}
            >
              <button
  onClick={() => setActiveVideo(null)}
  className="absolute top-6 right-6 text-white text-3xl"
>
  ✕
</button>
              <video
                src={activeVideo}
                controls
                autoPlay
                className="max-w-[90%] max-h-[90%] rounded-xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          {/* Tools & Software with Logos */}
          <motion.div
            className="space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <h3 className="text-3xl tracking-wide text-center opacity-90">Software & Tools</h3>
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="p-6 rounded-2xl text-center group cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(168, 85, 247, 0.3)',
                  }}
                >
                  {/* Logo image */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img 
                      src={tool.logo} 
                      alt={tool.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                    {tool.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
