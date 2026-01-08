import React, { useEffect, useRef, useState } from 'react';
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
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -36 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] }
    }
  }; 

  const fadeInRight = {
    hidden: { opacity: 0, x: 36 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] }
    }
  }; 


  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        when: 'beforeChildren'
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] } }
  };


  const ctaVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const imageVariant = {
    hidden: { y: 36, opacity: 0, scale: 0.94, rotate: -4 },
    visible: { y: 0, opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 220, damping: 20, mass: 0.9 } }
  };

  // Progress bar & node tracking for roadmap
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const [fillPercent, setFillPercent] = useState(0);
  const [active, setActive] = useState(0);
  // Persist completion once the user reaches the final node (use ref for closure safety)
  const completedRef = useRef(false);

  useEffect(() => {
    const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) {
          ticking = false;
          return;
        }
        const containerRect = container.getBoundingClientRect();
        const containerTop = containerRect.top + window.scrollY;
        const containerHeight = container.offsetHeight || containerRect.height || 1;
        const viewportCenter = window.scrollY + window.innerHeight / 2;
        const progress = clamp((viewportCenter - containerTop) / containerHeight, 0, 1);

        // compute node absolute positions on the fly and determine active index
        const refs = [...stepRefs.current, ctaRef.current];
        const nodeAbsPositions = refs.map(el => {
          if (!el) return Infinity;
          const r = el.getBoundingClientRect();
          return r.top + window.scrollY;
        });

        let idx = 0;
        for (let i = 0; i < nodeAbsPositions.length; i++) {
          if (viewportCenter >= nodeAbsPositions[i] - 10) idx = i + 1;
        }

        // If already completed (reached 4), lock the progress and active step.
        if (completedRef.current) {
          setFillPercent(100);
          // keep active locked to final
          setActive(prev => Math.max(prev, 4));
        } else {
          if (idx >= 4) {
            // Mark completed and lock the bar to 100%
            completedRef.current = true;
            setActive(4);
            setFillPercent(100);
          } else {
            setActive(idx);
            setFillPercent(progress * 100);
          }
        }

        ticking = false;
      });
    }

    // run once to initialize the progress/active state
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

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
              <motion.button
                type="button"
                onClick={() => import('../lib/onboarding').then(m => m.openOnboarding())}
                className="inline-flex items-center gap-2 px-8 py-4 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition-colors"
                whileTap={{ scale: 0.98 }}
                aria-label="Open onboarding"
              >
                GET STARTED
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps Section with Center Roadmap Line */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-background-light overflow-hidden">
        <div ref={containerRef} className="max-w-7xl mx-auto relative">
          {/* Progress track + fill + nodes */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] transform -translate-x-1/2 block pointer-events-none z-0" aria-hidden>
            <div className="relative h-full w-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div initial={{ height: '0%' }} animate={{ height: `${fillPercent}%` }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="absolute left-0 top-0 w-full bg-pink-500 origin-top rounded-full will-change-[height]" />
            </div>

            {/* Node markers intentionally removed — plain roadmap only */} 
          </div>

          {/* Step 1: Custom Roadmap */}
          <div ref={el => stepRefs.current[0] = el} className="relative mb-32">
            <motion.div
              initial="hidden"
              variants={stepVariants}
              animate={active >= 1 ? 'visible' : 'hidden'}
              className="relative"
            >
            {/* Desktop layout (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div variants={fadeInLeft} className="text-center md:text-left space-y-6 md:pr-16 pt-8 md:pt-10 relative">
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
                  <motion.img 
                    src={roadmapImg1} 
                    alt="Custom Roadmap Form" 
                    className="relative z-10 w-full max-w-md mx-auto md:mx-0 drop-shadow-2xl"
                    initial={{ scale: 0.92, opacity: 0, y: 18, rotate: -3 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: 'spring', stiffness: 140, damping: 18, delay: 0.12 }}
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Mobile card */}
            <div className="md:hidden bg-white rounded-2xl shadow-soft-lg p-6 mb-6 mx-4 relative overflow-hidden">
              {/* badge (styled like desktop) */}
              <div className="flex justify-center mb-4">
                <motion.div initial={{ scale: 0.92, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 220, damping: 18 }} className="relative">
                  <div className="absolute inset-0 bg-pink-300 rounded-full blur-xl opacity-30 scale-125" />
                  <span className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-semibold md:font-bold text-sm md:text-base shadow-lg border-4 border-white">1</span>
                </motion.div>
              </div>

              <h2 className="text-2xl font-bold mb-2 text-center">Custom Roadmap</h2>
              <p className="text-base text-gray-700 leading-relaxed text-center">
                Embracing your vision is our forte at Sakura Management. We align with your content boundaries and craft a personalized roadmap.
              </p>

              {/* subtle background accent for image */}
              <motion.div className="absolute -z-10 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-pink-300 opacity-20 blur-2xl" initial={{ scale: 0.88, opacity: 0 }} whileInView={{ scale: 1.06, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.6 }} />

              <motion.img src={roadmapImg1} alt="Custom Roadmap" className="w-3/4 mx-auto mt-6" variants={imageVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} />
            </div>
            
            {/* Header Badge (above content) */}

            </motion.div>
          </div>

          {/* Step 2: Masterwork Management */}
          <div ref={el => stepRefs.current[1] = el} className="relative mb-32">
            <motion.div
              initial="hidden"
              variants={stepVariants}
              animate={active >= 2 ? 'visible' : 'hidden'}
              className="relative"
            >
            {/* Desktop layout (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
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
                  <motion.img 
                    src={roadmapImg2} 
                    alt="Masterwork Management Dashboard" 
                    className="relative z-10 w-full max-w-md mx-auto md:ml-auto md:mr-0 drop-shadow-2xl"
                    initial={{ scale: 0.92, opacity: 0, y: 18, rotate: -3 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: 'spring', stiffness: 140, damping: 18, delay: 0.12 }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Right Content */}
              <motion.div variants={fadeInRight} className="text-center md:text-left space-y-6 md:pl-16 md:order-2 order-1 pt-8 md:pt-10 relative">
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

            {/* Mobile card */}
            <div className="md:hidden bg-white rounded-2xl shadow-soft-lg p-6 mb-6 mx-4 relative overflow-hidden">
              {/* badge (styled like desktop) */}
              <div className="flex justify-center mb-4">
                <motion.div initial={{ scale: 0.92, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 220, damping: 18 }} className="relative">
                  <div className="absolute inset-0 bg-pink-300 rounded-full blur-xl opacity-30 scale-125" />
                  <span className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-semibold md:font-bold text-sm md:text-base shadow-lg border-4 border-white">2</span>
                </motion.div>
              </div>

              <h2 className="text-2xl font-bold mb-2 text-center">Masterwork Management</h2>
              <p className="text-base text-gray-700 leading-relaxed text-center">
                Creators find in us a partner like no other. We focus on genuine fan rapport and long-term growth.
              </p>

              {/* subtle background accent for image */}
              <motion.div className="absolute -z-10 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-pink-300 opacity-20 blur-2xl" initial={{ scale: 0.88, opacity: 0 }} whileInView={{ scale: 1.06, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.6 }} />

              <motion.img src={roadmapImg2} alt="Masterwork" className="w-3/4 mx-auto mt-6" variants={imageVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} />
            </div>
            
            {/* Header Badge (above content - left) */}

            </motion.div>
          </div>

          {/* Step 3: Viral Marketing */}
          <div ref={el => stepRefs.current[2] = el} className="relative mb-20">
            <motion.div
              initial="hidden"
              variants={stepVariants}
              animate={active >= 3 ? 'visible' : 'hidden'}
              className="relative"
            >
            {/* Desktop layout (hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div variants={fadeInLeft} className="text-center md:text-left space-y-6 md:pr-16 pt-8 md:pt-10 relative">
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
                  <motion.img 
                    src={roadmapImg3} 
                    alt="Viral Marketing Analytics" 
                    className="relative z-10 w-full max-w-md mx-auto md:mx-0 drop-shadow-2xl"
                    initial={{ scale: 0.92, opacity: 0, y: 18, rotate: -3 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: 'spring', stiffness: 140, damping: 18, delay: 0.12 }}
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Mobile card */}
            <div className="md:hidden bg-white rounded-2xl shadow-soft-lg p-6 mb-6 mx-4 relative overflow-hidden">
              {/* badge (styled like desktop) */}
              <div className="flex justify-center mb-4">
                <motion.div initial={{ scale: 0.92, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 220, damping: 18 }} className="relative">
                  <div className="absolute inset-0 bg-pink-300 rounded-full blur-xl opacity-30 scale-125" />
                  <span className="relative z-10 w-10 h-10 md:w-12 md:h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-semibold md:font-bold text-sm md:text-base shadow-lg border-4 border-white">3</span>
                </motion.div>
              </div>

              <h2 className="text-2xl font-bold mb-2 text-center">Viral Marketing</h2>
              <p className="text-base text-gray-700 leading-relaxed text-center">
                We tailor data-driven marketing to your personality and goals across platforms to attract high-quality subscribers.
              </p>

              {/* subtle background accent for image */}
              <motion.div className="absolute -z-10 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-pink-300 opacity-20 blur-2xl" initial={{ scale: 0.88, opacity: 0 }} whileInView={{ scale: 1.06, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.6 }} />

              <motion.img src={roadmapImg3} alt="Viral Marketing" className="w-3/4 mx-auto mt-6" variants={imageVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} />
            </div>
            
            {/* Header Badge (above content) */}

          </motion.div>
          </div>

          {/* CTA Section - What Are You Waiting For? */}
          <div ref={ctaRef} className="relative mt-12">
            <motion.div
              initial="hidden"
              variants={ctaVariant}
              animate={active >= 4 ? 'visible' : 'hidden'}
              className="relative"
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
                  <motion.button type="button" onClick={() => import('../lib/onboarding').then(m => m.openOnboarding())} className="btn-cta relative mt-8 inline-block md:hidden" whileTap={{ scale: 0.98 }} aria-label="Open onboarding">
                    <span className="absolute inset-0 rounded-full border-2 border-white pointer-events-none" />
                    GET STARTED
                  </motion.button>
                </div>

                {/* md+ positioned button (bottom-left of card) */}
                <div className="hidden md:block absolute left-6 md:left-12 bottom-12 md:bottom-12 z-30">
                  <motion.button type="button" onClick={() => import('../lib/onboarding').then(m => m.openOnboarding())} className="btn-cta relative" whileTap={{ scale: 0.98 }} aria-label="Open onboarding">
                    <span className="absolute inset-0 rounded-full border-2 border-white pointer-events-none" />
                    GET STARTED
                  </motion.button>
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
        </div>
      </section>


    </Layout>
  );
};

export default HowWeWork;
