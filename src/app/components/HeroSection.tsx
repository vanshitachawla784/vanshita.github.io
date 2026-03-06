import { motion } from "motion/react";
import { LiquidGlassTextWarp } from "./LiquidGlassTextWarp";
import React, { useState, useEffect } from "react";

const headlines = [
  "Hello, I'm Vanshita",
  "I Turn Raw Footage",
  "Into Engaging Content",
  "Into Viral Reels",
  "Into Cinematic Stories"
];

export const HeroSection = () => {
  const [text, setText] = useState("");
const [index, setIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const current = headlines[index];

  const timer = setTimeout(() => {
    setText((prev) =>
      isDeleting
        ? current.substring(0, prev.length - 1)
        : current.substring(0, prev.length + 1)
    );

    if (!isDeleting && text === current) {
      setTimeout(() => setIsDeleting(true), 2000);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % headlines.length);
    }
  }, isDeleting ? 40 : 80);

  return () => clearTimeout(timer);
}, [text, isDeleting, index]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">

      {/* Navbar */}
     <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-12 py-8 z-50">

  {/* Logo */}
  <h1
  className="font-display"
  style={{
    fontSize: "1.6rem",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    background: `linear-gradient(
      135deg,
      #ffffff 0%,
      rgba(255,255,255,0.8) 50%,
      rgba(168,85,247,0.9) 100%
    )`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  }}
>
  PORTFOLIO
</h1>

  {/* Links */}
 <ul className="flex gap-10 text-sm font-medium">

  <li className="relative group">
    <a href="#home" className="text-white/60 group-hover:text-white transition duration-300">
      Home
    </a>

    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
  </li>

  <li className="relative group">
    <a href="#about" className="text-white/60 group-hover:text-white transition duration-300">
      About
    </a>

    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
  </li>

  <li className="relative group">
    <a href="#projects" className="text-white/60 group-hover:text-white transition duration-300">
      Projects
    </a>

    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
  </li>

  <li className="relative group">
    <a href="#contact" className="text-white/60 group-hover:text-white transition duration-300">
      Contact
    </a>

    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
  </li>

</ul>

</nav>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Hero Text */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4 font-display">
                Video Editor & Visual Storyteller
              </p>

{/* <div className="absolute inset-0 -z-10">
  <iframe
    src="https://my.spline.design/100followersfocus-R47vHaMbjQtIv76jW7VL9C7W/"
    frameBorder="0"
    width="100%"
    height="100%"
  />
</div> */}


             <motion.h1
  className="hero-title font-display"
  style={{
    fontSize: "clamp(3rem, 12vw, 8rem)",
    fontWeight: 800,
    letterSpacing: "-0.04em",
    lineHeight: 0.9,
    background: `linear-gradient(
      135deg,
      #ffffff 0%,
      rgba(255,255,255,0.7) 50%,
      rgba(168,85,247,0.8) 100%
    )`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  }}
>
  {text}
  <span className="animate-pulse">|</span>
</motion.h1>

              <p className="mt-8 text-base text-white/60 max-w-md mx-auto">
                Crafting engaging videos that capture attention and keep audiences watching.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1.5 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};