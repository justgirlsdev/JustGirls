import React from 'react';
import { motion } from 'framer-motion';
import firstCardImg from '../../assets/process-section/1st Card Img.webp';
import secondCardImg from '../../assets/process-section/2nd Card Img.png';
import thirdCardImg from '../../assets/process-section/3rd Card Img.png';

const Process: React.FC = () => {
  return (
    <section className="relative bg-background-light py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cards */}
        <div className="relative max-w-5xl mx-auto space-y-40">
          
          {/* Card 1 - Creator consulting */}
          <div className="sticky top-[6rem]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="bg-pink-100 rounded-[36px] px-6 pt-8 pb-0 md:px-8 md:pt-12 lg:pb-12 shadow-soft-xl border border-white/40 overflow-visible transition-all duration-300"
            >
              {/* Title inside card */}
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="relative inline-block">
                  <span className="relative z-10">Zoom fast</span>
                  <motion.svg className="absolute bottom-0 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.3, delay: 0.3 }}>
                    <motion.path d="M0 6 Q75 0, 150 6 T300 6" stroke="#EC4899" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.4 }} strokeLinecap="round" />
                  </motion.svg>
                </span>
                {' '}on a direct path to excellence
              </motion.h2>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Left side - Content */}
                <div className="flex-1 max-w-full lg:max-w-[52%]">
                  <motion.h3 
                    className="text-2xl md:text-3xl lg:text-4xl font-normal text-text mb-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    Creator consulting
                  </motion.h3>
                  <motion.p 
                    className="text-text leading-relaxed text-sm md:text-base"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    We identify what's driving your growth, where you're leaving money on the table, and how to fix it. From verticals to content usage plans, we build a roadmap that's tailored to you – not copied from another creator. Then our team runs the execution.
                  </motion.p>
                </div>

                {/* Right side - Image */}
                <motion.img
                  src={firstCardImg}
                  alt="Creator consulting"
                  className="w-full lg:w-[44%] h-auto self-center lg:self-end lg:-mb-12 lg:mr-12 max-w-full mx-auto sm:max-w-[360px] object-contain"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Card 2 - Strategic Growth */}
          <div className="sticky top-[8rem]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-pink-200 rounded-[36px] px-6 pt-8 pb-0 md:px-8 md:pt-12 lg:pb-12 shadow-soft-xl border border-white/40 overflow-visible transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pt-10 items-start">
                {/* Right - Content */}
                <div className="flex-1 max-w-full lg:max-w-[48%] lg:order-2">
                  <motion.h3 
                    className="text-4xl md:text-5xl lg:text-5xl font-normal text-text mb-6 leading-tight"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <span className="block">Strategic</span>
                    <span className="relative inline-block block mt-1">
                      <span className="relative z-10 block">Growth</span>
                      <motion.svg className="absolute -bottom-6 left-0 w-full h-10" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.25, delay: 0.4 }}>
                        <motion.path d="M0 6 Q75 0, 150 6 T300 6" stroke="#EC4899" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.5 }} strokeLinecap="round" />
                        <motion.path d="M0 13 Q75 7, 150 13 T300 13" stroke="#EC4899" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.55 }} strokeLinecap="round" opacity={0.9} />
                      </motion.svg>
                    </span>
                  </motion.h3>
                  <motion.p 
                    className="text-text leading-relaxed text-sm md:text-base"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    We don't just post – we engineer a tailor-made funnel with high spending traffic. Our team builds a custom growth funnel across X, TikTok, IG, Threads and more, driving high-quality subs into your page. Every post, story, caption, comments, and campaign is designed to convert and matched to your online persona.
                  </motion.p>
                </div>

                {/* Left - Image (wider) */}
                <motion.img
                  src={secondCardImg}
                  alt="Strategic Growth"
                  className="w-full lg:w-[50%] h-auto self-center lg:self-end lg:-mb-12 lg:ml-6 lg:order-1 max-w-full mx-auto sm:max-w-[420px] object-contain"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Card 3 - In-House Chatters */}
          <div className="sticky top-[10rem]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-pink-300 rounded-[36px] px-6 pt-8 pb-0 md:px-8 md:pt-12 lg:pb-12 shadow-soft-xl border border-white/40 overflow-visible transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Left side - Content */}
                <div className="flex-1 max-w-full lg:max-w-[48%]">
                  <motion.h3 
                    className="text-3xl md:text-5xl lg:text-7xl font-normal text-text mb-4 leading-tight"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <span className="relative inline-block block">
                      <span className="relative z-10 block">In-House</span>
                      <motion.svg className="absolute -bottom-6 left-0 w-full h-10" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.25, delay: 0.4 }}>
                        <motion.path d="M0 6 Q75 0, 150 6 T300 6" stroke="#EC4899" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.5 }} strokeLinecap="round" />
                        <motion.path d="M0 13 Q75 7, 150 13 T300 13" stroke="#EC4899" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.55 }} strokeLinecap="round" opacity={0.9} />
                      </motion.svg>
                    </span>
                    <span className="block mt-1">Chatters</span>
                  </motion.h3>
                  <motion.p 
                    className="text-base md:text-xl font-bold text-text italic mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Operations at its best
                  </motion.p>
                  <motion.p 
                    className="text-text leading-relaxed text-sm md:text-base"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Our U.S. – based chat team is trained to speak in your requested tone & persona. Every message is crafted to feel personal, build trust, and guide fans toward deeper engagement – all without you needing to touch the inbox.
                  </motion.p>
                </div>

                {/* Right side - Image */}
                <motion.img
                  src={thirdCardImg}
                  alt="In-House Chatters"
                  className="w-full lg:w-[50%] h-auto self-center lg:self-end lg:-mb-12 lg:mr-6 max-w-full mx-auto sm:max-w-[420px] object-contain"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;
