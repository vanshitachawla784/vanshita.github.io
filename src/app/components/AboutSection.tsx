import React from "react";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  Linkedin,
  MessageCircle,
  Mail,
  Instagram,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const roles = [
  "A Video Editor",
  "A Visual Storyteller",
  "A Creative Professional",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about"
      ref={ref}
      className="relative min-h-screen flex items-center py-20"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-start"
          initial={{ opacity: 0, y: 100 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 100 }
          }
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Left Column - Portrait and Name */}
          <div className="space-y-8">
            <motion.div
              className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={
                isInView
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.9, opacity: 0 }
              }
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img
                src="/images/my_img.jpg"
                alt="Vanshita Chawla"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-sm tracking-widest opacity-50 uppercase">
                Hello I am
              </p>
              <h2 className="text-6xl tracking-tight">
                Vanshita Chawla
              </h2>

              <div className="h-20 flex items-center">
                <motion.p
                  key={roleIndex}
                  className="text-2xl opacity-70"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[roleIndex]}
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Information */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 50 }
            }
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* About Me */}
            <div className="space-y-4">
              <h3 className="text-3xl tracking-wide opacity-90">
                About Me
              </h3>
              <div
                className="p-6 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <p className="text-lg leading-relaxed opacity-70">
                  Passionate video editor with a keen eye for visual storytelling. I transform raw footage into compelling narratives that captivate audiences and bring creative visions to life.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-3xl tracking-wide opacity-90">
                Education
              </h3>
              <div
                className="p-6 rounded-2xl space-y-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <div>
                  <p className="text-lg opacity-90">
                    Bachelor's of Computer Applications (BCA)
                  </p>
                  <p className="text-base opacity-50 mt-1">
                    Eternal University of Baru Sahib | Himachal Pradesh
                  </p>
                  <p className="text-sm opacity-40 mt-1">
                    2022 - Present (Expected 2025) | 8.5 CGPA
                  </p>
                </div>
                
                <div>
                  <p className="text-lg opacity-90">
                    XII | Seth Hukam Chand S.D. Public School
                  </p>
                  <p className="text-sm opacity-40 mt-1">
                    2021 | 88.4%
                  </p>
                </div>
                
                <div>
                  <p className="text-lg opacity-90">
                    X | Seth Hukam Chand S.D. Public School
                  </p>
                  <p className="text-sm opacity-40 mt-1">
                    2019 | 78%
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-3xl tracking-wide opacity-90">
                Skills
              </h3>
              <div
                className="p-6 rounded-2xl space-y-3"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <p className="text-base opacity-70 leading-relaxed">
                  • Video Cutting, Trimming & Sequencing
                </p>
                <p className="text-base opacity-70 leading-relaxed">
                  • Cinematic Transitions & Effects
                </p>
                <p className="text-base opacity-70 leading-relaxed">
                  • Color Correction & Basic Color Grading
                </p>
                <p className="text-base opacity-70 leading-relaxed">
                  • Audio Syncing & Sound Design
                </p>
                <p className="text-base opacity-70 leading-relaxed">
                  • Reels & Short-Form Video Editing
                </p>
                
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {["CapCut", "DaVinci Resolve", "Canva"].map(
                    (skill, index) => (
                      <motion.div
                        key={skill}
                        className="p-4 rounded-xl text-center"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                          backdropFilter: "blur(10px)",
                          border:
                            "1px solid rgba(255, 255, 255, 0.08)",
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.9 }
                        }
                        transition={{
                          delay: 0.8 + index * 0.1,
                          duration: 0.5,
                        }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow:
                            "0 0 30px rgba(168, 85, 247, 0.3)",
                        }}
                      >
                        <p className="text-sm opacity-80">
                          {skill}
                        </p>
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  color: "rgba(10, 102, 194, 0.5)",
                  
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  color: "rgba(37, 211, 102, 0.5)",
                },
                {
                  icon: Mail,
                  label: "Gmail",
                  color: "rgba(234, 67, 53, 0.5)",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  color: "rgba(193, 53, 132, 0.5)",
                },
              ].map((social, index) => (
                <motion.button
                  key={social.label}
                  className="p-4 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                    backdropFilter: "blur(10px)",
                    border:
                      "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{
                    delay: 1.1 + index * 0.1,
                    duration: 0.5,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 0 30px ${social.color}`,
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};