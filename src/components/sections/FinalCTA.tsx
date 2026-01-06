import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('cta-section')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const section = document.getElementById('cta-section');
    section?.addEventListener('mousemove', handleMouseMove);
    return () => section?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="cta-section" className="section-container bg-background-light relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="bg-text rounded-[3rem] p-12 md:p-16 text-center shadow-soft-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Layered circles that follow mouse - largest at back */}
          <motion.div
            className="absolute w-[700px] h-[700px] rounded-full bg-white/5 pointer-events-none"
            animate={{
              x: mousePosition.x * 0.03 - 350,
              y: mousePosition.y * 0.03 - 350,
            }}
            transition={{ type: 'spring', stiffness: 40, damping: 30 }}
            style={{ top: '45%', left: '50%', zIndex: 0 }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-white/8 pointer-events-none"
            animate={{
              x: mousePosition.x * 0.05 - 250,
              y: mousePosition.y * 0.05 - 250,
            }}
            transition={{ type: 'spring', stiffness: 40, damping: 30 }}
            style={{ top: '45%', left: '50%', zIndex: 1 }}
          />
          <motion.div
            className="absolute w-[350px] h-[350px] rounded-full bg-white/12 pointer-events-none"
            animate={{
              x: mousePosition.x * 0.07 - 175,
              y: mousePosition.y * 0.07 - 175,
            }}
            transition={{ type: 'spring', stiffness: 40, damping: 30 }}
            style={{ top: '45%', left: '50%', zIndex: 2 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-12">
              You <span className="relative inline-block">
                <span className="relative z-10 text-primary">Create</span>
                <motion.svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 }}>
                  <motion.path d="M0 6 Q75 0, 150 6 T300 6" stroke="#EC4899" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} strokeLinecap="round" />
                </motion.svg>
              </span>
              <br />
              We <span className="relative inline-block">
                <span className="relative z-10 text-primary">Scale</span>
                <motion.svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5 }}>
                  <motion.path d="M0 6 Q75 0, 150 6 T300 6" stroke="#EC4899" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }} strokeLinecap="round" />
                </motion.svg>
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Launch your full backend system in 72 hours – chat, content, marketing done for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative z-10"
          >
            <Link to="/apply">
              <motion.button
                className="bg-primary text-white border-2 border-white hover:bg-primary/90 font-bold text-lg px-12 py-4 rounded-full transition-all duration-300 shadow-soft hover:shadow-glow relative"
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 rounded-full border-2 border-white"
                  initial={{ opacity: 0, scale: 1 }}
                  whileHover={{
                    opacity: [0.5, 0],
                    scale: [1, 1.1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeOut"
                  }}
                />
                GET STARTED
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
