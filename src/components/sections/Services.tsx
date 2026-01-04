import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: '📱',
      title: 'Tailored Marketing',
      description: 'Using tailored strategies across TikTok, Instagram, Threads, YouTube, Twitch, Reddit, and Twitter. We help market and grow not just your OnlyFans subscribers but also a loyal following to you & your brand!',
    },
    {
      icon: '💬',
      title: 'In-House Chatters',
      description: 'Operations at its best. Our U.S. - based chat team is trained to speak in your requested tone & persona. Every message is crafted to feel personal, build trust, and guide fans toward deeper engagement.',
    },
    {
      icon: '📊',
      title: 'Strategic Growth',
      description: 'We don\'t just post – we engineer a tailor-made funnel with high spending traffic. Our team builds a custom growth funnel across X, TikTok, IG, Threads and more, driving high-quality subs into your page.',
    },
    {
      icon: '🎯',
      title: 'Content Strategy',
      description: 'We identify what\'s driving your growth, where you\'re leaving money on the table, and how to fix it. From verticals to content usage plans, we build a roadmap that\'s tailored to you.',
    },
    {
      icon: '💰',
      title: 'Revenue Optimization',
      description: 'Maximize earnings with data-driven pricing, PPV campaigns, and fan retention strategies. We analyze your metrics to find untapped revenue opportunities.',
    },
    {
      icon: '🛡️',
      title: 'DMCA Shielding',
      description: 'Protect your content with 24/7 monitoring and takedown services. We handle leaks and unauthorized distribution so you can focus on creating.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text mb-6">
              Done-for-You <span className="gradient-text">Growth</span>
            </h2>
            <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto">
              We turn your OF page into a scaled, optimized business. With a full team behind you – content strategy, fan engagement, growth engine. You just create.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="card group cursor-pointer"
          >
            <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-heading font-semibold text-text mb-3 group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-text-light leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-2xl font-heading font-semibold text-text mb-4">
          Unleash Creative Mastery
        </h3>
        <p className="text-text-light mb-8 max-w-2xl mx-auto">
          Focus on what you do best - creating. We handle everything else.
        </p>
      </motion.div>
      </div>
    </section>
  );
};

export default Services;
