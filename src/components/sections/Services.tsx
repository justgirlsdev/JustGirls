import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import groupContactIcon from '../../assets/growth-section/group-contact.png';
import penShapeIcon from '../../assets/growth-section/pen-shape.png';
import alertIcon from '../../assets/growth-section/alert-icon.png';
import phone1Preview from '../../assets/growth-section/phone1-preview.png';
import phone2Preview from '../../assets/growth-section/phone2-preview.png';

const Services: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [cardScales, setCardScales] = useState<number[]>([1, 0.6, 0.6]);

  // Parallax effect for phones
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const phone1Y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const phone2Y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  useEffect(() => {
    const updateCardScales = () => {
      if (!scrollContainerRef.current) return;
      
      const container = scrollContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;
      
      const cards = container.querySelectorAll('.service-card');
      const scales: number[] = [];
      
      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        const maxDistance = containerRect.height / 2;
        // Scale from 0.6 (far) to 1.0 (center) - very dramatic difference
        const scale = Math.max(0.6, 1 - (distance / maxDistance) * 0.4);
        scales.push(scale);
      });
      
      setCardScales(scales);
    };

    const handleScroll = () => {
      if (scrollContainerRef.current && ref.current) {
        const section = ref.current as HTMLElement;
        const container = scrollContainerRef.current;
        const sectionRect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Only scroll when section is in view
        if (sectionRect.top < viewportHeight / 2 && sectionRect.bottom > viewportHeight / 2) {
          const sectionProgress = (viewportHeight / 2 - sectionRect.top) / (sectionRect.height);
          const targetScroll = Math.max(0, Math.min(1, sectionProgress)) * (container.scrollHeight - container.clientHeight);
          
          // Smooth scroll to target
          container.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
          });
        }
        
        // Always update card scales when scrolling
        updateCardScales();
      }
    };

    // Initial scale calculation
    setTimeout(() => updateCardScales(), 100);

    window.addEventListener('scroll', handleScroll);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', updateCardScales);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', updateCardScales);
      }
    };
  }, []);

  const services = [
    {
      icon: groupContactIcon,
      title: 'USA Chatters That Sound Like You',
      description: '24/7 coverage by high-skilled US-based chatters who adopt your persona, tone, and voice.',
    },
    {
      icon: alertIcon,
      title: 'Tailored Marketing',
      description: 'Using tailored strategies across TikTok, Instagram, Threads, YouTube, Twitch, Reddit, and Twitter. We help market and grow not just your OnlyFans subscribers but also a loyal following to you & your brand!',
    },
    {
      icon: penShapeIcon,
      title: 'DMCA Shielding & Revenue Leak Prevention',
      description: 'Specialized software + legal takedowns to protect your brand from pirates, leaks and exposure.',
    },
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 bg-gradient-to-b from-white to-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl shadow-2xl overflow-hidden">
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row items-start">
            {/* Left Column - Scrolling Cards */}
            <div 
              ref={scrollContainerRef} 
              className="hidden lg:relative lg:flex lg:h-[600px] lg:overflow-y-auto lg:overflow-x-hidden lg:flex-col lg:items-center lg:justify-start lg:py-48 lg:w-[45%] lg:pl-6" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="space-y-6 w-full flex flex-col items-center">
                {services.map((service, index) => {
                  const scale = cardScales[index] || 0.6;
                  const cardColorClass = index === 2 
                    ? "bg-gradient-to-br from-purple-200 to-purple-300" 
                    : "bg-gradient-to-br from-pink-200 to-pink-300";
                  return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`service-card ${cardColorClass} rounded-3xl p-8 shadow-lg hover:shadow-xl w-[90%]`}
                    style={{ 
                      transform: `scale(${scale})`,
                      transformOrigin: 'center',
                      transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                      opacity: 0.4 + (scale * 0.6)
                    }}
                  >
                    <div className="mb-4">
                      <img src={service.icon} alt="" className="w-16 h-16" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-text mb-3">
                      {service.title}
                    </h3>
                    <p className="text-text-light leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Cards - Simple Stacked Layout */}
            <div className="lg:hidden w-full p-8 space-y-6">
              {services.map((service, index) => {
                const cardColorClass = index === 2 
                  ? "bg-gradient-to-br from-purple-200 to-purple-300" 
                  : "bg-gradient-to-br from-pink-200 to-pink-300";
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${cardColorClass} rounded-3xl p-8 shadow-lg`}
                >
                  <div className="mb-4">
                    <img src={service.icon} alt="" className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-text mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
                );
              })}
            </div>

            {/* Right Column - Main Content */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:w-[55%]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
                  Done-for-You <span className="relative inline-block">
                    Growth
                    <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      <motion.path
                        d="M2 6 C 50 3, 100 4, 150 5 C 170 5.5, 190 6, 198 6"
                        stroke="#FF1493"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
                      />
                      <motion.path
                        d="M2 9 C 50 7, 100 8, 150 9 C 170 9.5, 190 10, 198 9"
                        stroke="#FF1493"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
                      />
                    </svg>
                  </span>
                </h2>
                <p className="text-base md:text-lg text-text-light mb-8 leading-relaxed">
                  We turn your OF page into a scaled, optimized business. With a full team behind you – content strategy, fan engagement, growth engine. You just create.
                </p>

                {/* Phone Screenshots with Parallax and Button */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative h-[200px] md:h-[320px] lg:h-[280px] overflow-visible w-full max-w-[300px] md:max-w-[400px] lg:max-w-none">
                    {/* Phone 1 - Left (on top) */}
                    <motion.div
                      className="absolute left-[15%] lg:left-0 top-0 w-[38%] z-20"
                      style={{ y: phone1Y }}
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <img 
                        src={phone1Preview} 
                        alt="Statistics Dashboard" 
                        className="w-full h-auto drop-shadow-2xl rounded-none md:rounded-3xl"
                      />
                    </motion.div>

                    {/* Phone 2 - Right (behind) */}
                    <motion.div
                      className="absolute left-[45%] lg:left-[30%] top-16 w-[38%] z-10"
                      style={{ y: phone2Y }}
                      initial={{ opacity: 0, x: 50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <img 
                        src={phone2Preview} 
                        alt="Revenue Dashboard" 
                        className="w-full h-auto drop-shadow-2xl rounded-none md:rounded-3xl"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Get Started Button - Centered and at bottom on mobile/tablet, right side on desktop */}
                <div className="flex justify-center lg:justify-end mt-4 lg:mt-0 relative z-30">
                  <motion.button
                    className="btn-primary text-base lg:text-sm px-8 py-3 lg:px-6 lg:py-2 relative z-30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => import('../../lib/onboarding').then(m => m.openOnboarding())}
                  >
                    GET STARTED
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
