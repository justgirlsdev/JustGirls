import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useReducedMotion, AnimatePresence } from 'framer-motion';
import arrowPath from '../../assets/hero-section/arrow-path.svg';
import modelImage from '../../assets/hero-section/Model Image - HS.png';
import tweetCard from '../../assets/hero-section/tweet-new.webp';
import tweetGraph from '../../assets/hero-section/tweet-graph.png';
import messageCard from '../../assets/hero-section/message-updated.png';
import messageGraph from '../../assets/hero-section/message-graph.png';
import topCreatorCard from '../../assets/hero-section/top-creater-updated.png';
import topCreatorGraph from '../../assets/hero-section/top-creator-blue-graph.png';
import payoutCard from '../../assets/hero-section/payout-cleard.webp';
import rightsideImage from '../../assets/hero-section/rightside-image.png';
import logoMedium from '../../assets/carousel-section/logo-medium.svg';
import logoVocal from '../../assets/carousel-section/logo-vocal.svg';
import logoLinkedIn from '../../assets/carousel-section/linkdln.svg';
import logoForbes from '../../assets/carousel-section/logo-forbes.svg';
import logoVice from '../../assets/carousel-section/logo-vice.svg';
import logoGQ from '../../assets/carousel-section/gq.svg';
import logoOutlook from '../../assets/carousel-section/outlook.svg';

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

  // Mobile/tablet parallax for composite image (subtle, smoothed)
  const reduceMotion = useReducedMotion();
  const mobileParallax = reduceMotion ? 0 : useTransform(scrollYProgress, [0, 1], [0, -40]);
  const mobileParallaxSmoothed = useSpring(mobileParallax, { stiffness: 100, damping: 30 });

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
      <section ref={ref} className="relative min-h-[28vh] flex items-center overflow-hidden bg-white pb-4 pt-8">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden">
          <motion.div
            className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 pb-0 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="max-w-[720px] mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text leading-tight text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-center overflow-hidden h-[1.2em]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTextIndex}
                      className="text-primary inline-block mx-auto"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      More {rotatingTexts[currentTextIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>

                <div className="flex flex-col items-center">
                  <span className="block text-center whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Women&nbsp;Founded</span>
                  <span className="block text-center whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Built&nbsp;for</span>

                  <span className="relative block mx-auto text-center whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Women&nbsp;Creators
                    <svg className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[90%] md:w-[95%] h-4 overflow-visible" viewBox="0 0 350 18" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
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
                </div>
              </motion.h1>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-text-light leading-relaxed max-w-xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Are you posting, chatting, and planning all by yourself? We scale your income, the spend in DMs, and build your brand — so you never burn out again.
              </motion.p>

              <motion.div
                className="flex justify-center"
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

            {/* Right Side - Floating Cards with Arrow Path Background (desktop only) */}
            <motion.div
              className="relative h-[600px] hidden lg:block"
              style={{ y }}
            >
              {/* Arrow Path Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={arrowPath} 
                  alt="" 
                  className="w-full h-full object-contain opacity-100"
                />
              </div>

              {/* Model Image - Left */}
              <motion.img
                src={modelImage}
                alt="Creator"
                className="absolute top-8 sm:top-12 md:top-32 left-4 sm:left-8 w-24 h-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: -mousePosition.x * 0.5,
                  y: -mousePosition.y * 0.5
                }}
                transition={{ duration: 0.3, delay: 0 }}
              />

              {/* Tweet Card - Top Center */}
              <motion.img
                src={tweetCard}
                alt="Tweet Impressions"
                className="absolute top-6 sm:top-8 md:top-20 left-4 md:left-44 w-36 h-auto"
                initial={{ opacity: 0, x: 0, y: -20 }}
                animate={{ 
                  opacity: 1,
                  x: -mousePosition.x * 0.6,
                  y: -mousePosition.y * 0.6
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Tweet Graph - Top Center */}
              <motion.img
                src={tweetGraph}
                alt="Tweet Impressions"
                className="absolute top-28 md:top-[165px] left-24 md:left-[195px] w-24 h-auto"
                initial={{ opacity: 0, x: 0, y: -20 }}
                animate={{ 
                  opacity: 1,
                  x: -mousePosition.x * 0.9,
                  y: -mousePosition.y * 0.9
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Message Card - Top Right */}
              <motion.img
                src={messageCard}
                alt="Messages"
                className="absolute top-10 md:top-40 right-4 md:right-12 w-44 h-auto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1,
                  x: -mousePosition.x * 0.8,
                  y: -mousePosition.y * 0.8
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Message Graph - Top Right */}
              <motion.img
                src={messageGraph}
                alt="Messages"
                className="absolute top-14 md:top-52 right-4 md:right-20 w-28 h-auto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1,
                  x: -mousePosition.x * 1.1,
                  y: -mousePosition.y * 1.1
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Top Creator Card - Bottom Left */}
              <motion.img
                src={topCreatorCard}
                alt="Top Creator"
                className="absolute bottom-6 md:bottom-24 left-6 md:left-[70px] w-44 h-auto"
                initial={{ opacity: 0, x: 0, y: 20 }}
                animate={{ 
                  opacity: 1,
                  x: -mousePosition.x * 0.55,
                  y: -mousePosition.y * 0.55
                }}
                transition={{ duration: 0.3 }}
              />

               {/* Top Creator Graph - Bottom Left */}
              <motion.img
                src={topCreatorGraph}
                alt="Top Creator"
                className="absolute bottom-8 md:bottom-28 left-12 md:left-44 w-18 h-auto"
                initial={{ opacity: 0, x: 0, y: 20 }}
                animate={{ 
                  opacity: 1,
                  x: -mousePosition.x * 0.85,
                  y: -mousePosition.y * 0.85
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Payout Card - Bottom Right */}
              <motion.img
                src={payoutCard}
                alt="Payout Cleared"
                className="absolute bottom-0 right-4 md:right-16 w-32 h-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1,
                  scale: 1,
                  x: -mousePosition.x * 0.75,
                  y: -mousePosition.y * 0.75
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
              {/* Composite image for tablet & mobile (subtle parallax on scroll) */}
              <motion.div className="mt-6 lg:hidden flex justify-center" style={{ y: mobileParallaxSmoothed }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                <img src={rightsideImage} alt="Hero preview" className="w-full max-w-[520px] h-auto object-contain" />
              </motion.div>          </div>
        </div>
      </section>

      {/* Logo Carousel Strip - Below Hero Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* Left side - Text */}
            <div className="flex-shrink-0 text-center md:text-left">
              <p className="text-sm text-text-light font-medium">Expert's Pick:</p>
              <p className="text-text font-semibold">Top Rated OnlyFans Agency</p>
            </div>
            
            {/* Right side - Scrolling logos */}
            <div className="relative flex-1 w-full overflow-hidden">
              {/* Fade overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
              
              {/* Scrolling container */}
              <motion.div
                className="flex items-center space-x-28"
                animate={{
                  x: [0, -1200],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate the brands for seamless loop */}
                {[...Array(3)].map((_, setIndex) => (
                  <React.Fragment key={setIndex}>
                    {[
                      { name: 'Medium', logo: logoMedium },
                      { name: 'Vocal', logo: logoVocal },
                      { name: 'LinkedIn', logo: logoLinkedIn },
                      { name: 'Forbes', logo: logoForbes },
                      { name: 'VICE', logo: logoVice },
                      { name: 'GQ', logo: logoGQ },
                      { name: 'Outlook', logo: logoOutlook },
                    ].map((brand, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className="flex items-center gap-2 whitespace-nowrap flex-shrink-0"
                      >
                        <img src={brand.logo} alt={brand.name} className="h-8 w-auto grayscale opacity-60" />
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
