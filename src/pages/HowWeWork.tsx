import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

// Import images
import roadmapImg1 from '../assets/how-we-work-page/roadmap-img1.png';
import roadmapImg2 from '../assets/how-we-work-page/roadmap-img2.png';
import roadmapImg3 from '../assets/how-we-work-page/roadmap-img3.png';
import phonesImg from '../assets/how-we-work-page/phones.png';

const HowWeWork: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };


  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold"
            >
              OnlyFans <span className="text-pink-600">Wizards</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
            >
              Learn more about how we work within a few steps.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition-colors"
              >
                GET STARTED
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps Section with Center Roadmap Line */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-background-light overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* Center Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-200 via-pink-400 to-pink-200 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Step 1: Custom Roadmap */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative mb-32"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div variants={fadeInLeft} className="md:text-left space-y-6 md:pr-16 pt-8 md:pt-10 relative">
                <motion.div
                  initial={{ y: -6, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="inline-flex items-center mb-4"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-pink-400 rounded-full blur-xl opacity-60 scale-125" />
                    <span className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-semibold md:font-bold text-sm md:text-base shadow-lg border-4 border-white">1</span>
                  </div>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold">Custom Roadmap</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Embracing your vision is our forte at Sakura Management. 
                  We align with your content boundaries, recognizing that 
                  the right fit of individuality is what propels an account to 
                  greatness and helps build up a brand for long-term 
                  growth and success.
                </p>
              </motion.div>
              
              {/* Right Image */}
              <motion.div variants={fadeInRight} className="relative md:pl-16">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-pink-300 rounded-full blur-3xl opacity-30 scale-150"></div>
                  <img 
                    src={roadmapImg1} 
                    alt="Custom Roadmap Form" 
                    className="relative z-10 w-full max-w-md mx-auto md:mx-0 drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>
            
            {/* Header Badge (above content) */}

          </motion.div>

          {/* Step 2: Masterwork Management */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative mb-32"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <motion.div variants={fadeInLeft} className="relative md:pr-16 md:order-1 order-2">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-pink-300 rounded-full blur-3xl opacity-30 scale-150"></div>
                  <img 
                    src={roadmapImg2} 
                    alt="Masterwork Management Dashboard" 
                    className="relative z-10 w-full max-w-md mx-auto md:ml-auto md:mr-0 drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
              
              {/* Right Content */}
              <motion.div variants={fadeInRight} className="space-y-6 md:pl-16 md:order-2 order-1 pt-8 md:pt-10 relative">
                <motion.div
                  initial={{ y: -6, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="inline-flex items-center mb-4"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-pink-400 rounded-full blur-xl opacity-60 scale-125" />
                    <span className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-semibold md:font-bold text-sm md:text-base shadow-lg border-4 border-white">2</span>
                  </div>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold">Masterwork Management</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Creators find in us a partner like no other, driven by 
                  relentless focus. Revenue surges under our US team's 
                  touch, emphasizing genuine fan rapport. Building 
                  personal connections with each fan allows, in-time, to 
                  build a loyal fan-base around your brand.
                </p>
              </motion.div>
            </div>
            
            {/* Header Badge (above content - left) */}

          </motion.div>

          {/* Step 3: Viral Marketing */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div variants={fadeInLeft} className="md:text-left space-y-6 md:pr-16 pt-8 md:pt-10 relative">
                <motion.div
                  initial={{ y: -6, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="inline-flex items-center mb-4"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-pink-400 rounded-full blur-xl opacity-60 scale-125" />
                    <span className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-semibold md:font-bold text-sm md:text-base shadow-lg border-4 border-white">3</span>
                  </div>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold">Viral Marketing</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our agency specializes in data-driven marketing tailored 
                  to each creator's personality and goals. We harness the 
                  power of Instagram, Twitter, YouTube, and other social 
                  platforms to attract high-quality subscribers and drive 
                  substantial traffic to your OnlyFans page. With our deep 
                  knowledge of platform algorithms and content strategies, 
                  we're dedicated to elevating your brand and achieving the 
                  monthly milestones you've always envisioned. Reach out 
                  today to discover how we can help you surpass your 
                  OnlyFans revenue goals!
                </p>
              </motion.div>
              
              {/* Right Image */}
              <motion.div variants={fadeInRight} className="relative md:pl-16">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-pink-300 rounded-full blur-3xl opacity-30 scale-150"></div>
                  <img 
                    src={roadmapImg3} 
                    alt="Viral Marketing Analytics" 
                    className="relative z-10 w-full max-w-md mx-auto md:mx-0 drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>
            
            {/* Header Badge (above content) */}

          </motion.div>

          {/* CTA Section - What Are You Waiting For? */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative mt-12"
          >
            <div className="max-w-6xl mx-auto">
              <div className="relative bg-gradient-to-br from-pink-300 to-pink-200 rounded-2xl py-6 md:py-8 px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 overflow-hidden max-h-[420px] md:max-h-[560px]">
                {/* decorative background (SVG waves + soft blur) */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                  {/* blurred radial accent */}
                  <div className="absolute right-[-20%] top-[-20%] w-[60%] h-[60%] bg-pink-400 rounded-full opacity-20 filter blur-3xl" />
                  {/* subtle white wave lines */}
                  <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <g stroke="#ffffff" strokeWidth="2" strokeOpacity="0.12" fill="none">
                      <path d="M0 180 C150 120 300 200 450 160 C600 120 750 200 900 160 C1050 120 1200 200 1350 160" transform="translate(-75,-20)" />
                      <path d="M0 210 C150 150 300 230 450 190 C600 150 750 230 900 190 C1050 150 1200 230 1350 190" transform="translate(-75,-20)" />
                      <path d="M0 240 C150 180 300 260 450 220 C600 180 750 260 900 220 C1050 180 1200 260 1350 220" transform="translate(-75,-20)" />
                    </g>
                    <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  </svg>
                  {/* soft overlay to add depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/6 to-transparent mix-blend-overlay" />
                </div>

                {/* connector circle removed to match design */}
                <div className="w-full md:w-[60%] text-center md:text-left md:h-full md:flex md:flex-col md:justify-center md:py-0 items-center md:items-start relative z-20">
                  <h3 className="text-3xl md:text-6xl font-normal text-black leading-tight tracking-tight w-full break-words">
                    <span className="block">What Are You</span>
                    <span className="block">Waiting For?</span>
                  </h3>
                  <p className="mt-4 md:mt-4 text-sm md:text-xl text-gray-700 w-full leading-relaxed break-words">
                    Join our elite creator network! Boost your followers, multiply revenue, and craft a priceless brand.
                  </p>
                  {/* small screens: inline button */}
                  <a href="/contact" className="mt-6 inline-block md:hidden">
                    <motion.button className="btn-cta relative" whileTap={{ scale: 0.98 }} aria-label="Get started">
                      <span className="absolute inset-0 rounded-full border-2 border-white pointer-events-none" />
                      GET STARTED
                    </motion.button>
                  </a>
                </div>

                {/* md+ positioned button (bottom-left of card) */}
                <div className="hidden md:block absolute left-6 md:left-12 bottom-12 md:bottom-12 z-30">
                  <a href="/contact">
                    <motion.button className="btn-cta relative" whileTap={{ scale: 0.98 }} aria-label="Get started">
                      <span className="absolute inset-0 rounded-full border-2 border-white pointer-events-none" />
                      GET STARTED
                    </motion.button>
                  </a>
                </div>

                <div className="absolute inset-0 flex items-center justify-center md:relative md:w-[40%] md:flex md:items-center md:justify-center pointer-events-none">
                  <motion.img
                    src={phonesImg}
                    alt="App on phones"
                    className="max-w-[70%] md:w-[130%] drop-shadow-2xl relative z-10 transform md:translate-x-6 translate-y-4 md:translate-y-0 blur-sm md:blur-0 opacity-80"
                    animate={{ y: [ -18, 0, -18 ] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


    </Layout>
  );
};

export default HowWeWork;
