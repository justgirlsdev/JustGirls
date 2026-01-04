import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = ['Free Time', 'Fans', 'Money'];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Content Container */}
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block overflow-hidden h-[1.2em]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTextIndex}
                      className="text-primary inline-block"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      More {rotatingTexts[currentTextIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                With The Best
                <br />
                OnlyFans <span className="relative inline-block">
                  Agency
                  <svg className="absolute -bottom-1 -left-3 w-[115%] h-4 overflow-visible" viewBox="0 0 350 18" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <motion.path
                      d="M5 10 C 70 6, 140 8, 205 9 C 250 9.5, 295 11, 345 10"
                      stroke="#FF1493"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M5 14 C 70 12, 140 13, 205 14 C 250 14.5, 295 15, 345 14"
                      stroke="#FF1493"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-text-light leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Are you posting, chatting, and planning all by yourself? We scale your income, the spend in DMs, and build your brand — so you never burn out again.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/apply">
                  <motion.button
                    className="btn-primary text-lg px-12 py-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GET STARTED
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Floating Cards */}
            <motion.div
              className="relative h-[600px] hidden lg:block"
              style={{ y }}
            >
              {/* Card 1 - Top Left */}
              <motion.div
                className="absolute top-10 left-0 w-64 bg-white rounded-2xl p-6 shadow-soft-lg"
                animate={{
                  x: mousePosition.x * 0.5,
                  y: mousePosition.y * 0.5,
                  rotate: [0, 2, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-text-light">Tweet Impressions</p>
                    <p className="text-2xl font-heading font-bold text-primary">58.5M</p>
                  </div>
                </div>
                <div className="text-xs text-text-light">+183% growth</div>
              </motion.div>

              {/* Card 2 - Middle Right */}
              <motion.div
                className="absolute top-32 right-0 w-72 bg-white rounded-2xl p-6 shadow-soft-lg"
                animate={{
                  x: -mousePosition.x * 0.3,
                  y: -mousePosition.y * 0.3,
                  rotate: [0, -2, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-text-light">Messages</p>
                    <p className="text-3xl font-heading font-bold gradient-text">$87,637.20</p>
                  </div>
                  <div className="text-green-500 text-sm font-semibold">+243.5%</div>
                </div>
                <div className="h-20">
                  <svg viewBox="0 0 100 40" className="w-full h-full">
                    <path
                      d="M 0 30 Q 25 20, 50 25 T 100 15"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF1493" />
                        <stop offset="100%" stopColor="#FFB6C1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </motion.div>

              {/* Card 3 - Bottom Left */}
              <motion.div
                className="absolute bottom-20 left-8 w-64 bg-white rounded-2xl p-6 shadow-soft-lg"
                animate={{
                  x: mousePosition.x * 0.4,
                  y: -mousePosition.y * 0.4,
                  rotate: [0, 1, 0],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: -3 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-text-light mb-1">🏆 YOU ARE IN THE TOP</p>
                    <p className="text-2xl font-heading font-bold text-text">0.03%</p>
                    <p className="text-xs text-text-light">OF ALL CREATORS!</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-text-light mb-1">Current Balance</p>
                  <p className="text-xl font-heading font-bold gradient-text">$13,400.53</p>
                </div>
              </motion.div>

              {/* Card 4 - Bottom Right */}
              <motion.div
                className="absolute bottom-32 right-12 w-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 shadow-soft-lg"
                animate={{
                  x: -mousePosition.x * 0.6,
                  y: mousePosition.y * 0.6,
                  rotate: [0, -1, 0],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div className="text-white">
                    <p className="text-xs opacity-80">Successful</p>
                    <p className="text-sm font-semibold">payout</p>
                  </div>
                </div>
                <p className="text-white text-xs opacity-60 mt-2">The money is on route to your bank!</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Strip - Below Hero Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-12">
            {/* Left side - Text */}
            <div className="flex-shrink-0">
              <p className="text-sm text-text-light font-medium">Expert's Pick:</p>
              <p className="text-text font-semibold">Top Rated OnlyFans Agency</p>
            </div>
            
            {/* Right side - Scrolling logos */}
            <div className="relative flex-1 overflow-hidden">
              {/* Fade overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
              
              {/* Scrolling container */}
              <motion.div
                className="flex items-center space-x-12"
                animate={{
                  x: [0, -800],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate the brands for seamless loop */}
                {[...Array(3)].map((_, setIndex) => (
                  <React.Fragment key={setIndex}>
                    {[
                      { name: 'Medium', icon: '●●❙' },
                      { name: 'Vocal', icon: '((●))' },
                      { name: 'LinkedIn', icon: 'in' },
                      { name: 'Forbes', icon: 'F' },
                      { name: 'VICE', icon: 'V' },
                    ].map((brand, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className="flex items-center gap-2 whitespace-nowrap flex-shrink-0"
                      >
                        <span className="text-xl text-gray-400 font-bold">{brand.icon}</span>
                        <span className="text-lg font-semibold text-gray-400">{brand.name}</span>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
