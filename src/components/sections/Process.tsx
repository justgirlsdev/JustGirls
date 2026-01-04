import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Creator Consulting',
      description: 'We identify what\'s driving your growth, where you\'re leaving money on the table, and how to fix it. From verticals to content usage plans, we build a roadmap that\'s tailored to you – not copied from another creator. Then our team runs the execution.',
      bgColor: 'bg-pink-100',
      imagePosition: 'left',
    },
    {
      number: '02',
      title: 'Strategic Growth',
      description: 'We don\'t just post – we engineer a tailor-made funnel with high spending traffic. Our team builds a custom growth funnel across X, TikTok, IG, Threads and more, driving high-quality subs into your page. Every post, story, caption, comments, and campaign is designed to convert and matched to your online persona.',
      bgColor: 'bg-purple-100',
      imagePosition: 'right',
    },
    {
      number: '03',
      title: 'In-House Chatters',
      description: 'Our U.S. – based chat team is trained to speak in your requested tone & persona. Every message is crafted to feel personal, build trust, and guide fans toward deeper engagement – all without you needing to touch the inbox.',
      bgColor: 'bg-blue-100',
      imagePosition: 'left',
    },
  ];

  return (
    <section className="relative bg-background-light py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text mb-6">
            Zoom fast on a direct path to <span className="gradient-text">excellence</span>
          </h2>
        </motion.div>

        {/* Cards - stacked with sticky positioning */}
        <div className="relative max-w-5xl mx-auto space-y-40">
          {steps.map((step, index) => (
            <div
              key={index}
              className="sticky"
              style={{ 
                top: `${6 + index * 2}rem`, // Each card sticks slightly lower than the previous
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${step.bgColor} rounded-[36px] p-8 md:p-12 shadow-soft-xl border border-white/40 overflow-hidden transition-all duration-300`}
              >
                <div className={`flex flex-col lg:flex-row gap-10 items-center ${step.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image placeholder */}
                  <div className="flex-shrink-0 w-full lg:w-96 h-64 lg:h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* Number Badge on image */}
                    <div className="absolute top-4 left-4 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-soft flex items-center justify-center">
                      <span className="text-3xl md:text-4xl font-heading font-bold gradient-text">
                        {step.number}
                      </span>
                    </div>
                    {/* Placeholder text */}
                    <span className="text-text-light/30 font-medium text-lg">Image Placeholder</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-text mb-4">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-light/60 font-medium mb-3">
                      Operations at its best
                    </p>
                    <p className="text-text-light leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
