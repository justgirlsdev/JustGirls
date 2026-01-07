import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const faqs = [
    {
      question: 'What sets JustGirls Management apart from other OnlyFans agencies?',
      answer: 'We provide a full-service, done-for-you system with U.S.-based chat teams, custom marketing strategies, and dedicated account management. Unlike other agencies, we focus on sustainable growth and creator well-being, not just quick revenue spikes.',
    },
    {
      question: 'What costs are involved?',
      answer: 'We operate on a performance-based model, typically taking a percentage of your earnings. There are no upfront fees – we only succeed when you succeed. Exact terms are discussed during consultation based on your current earnings and goals.',
    },
    {
      question: 'Is a contract necessary?',
      answer: 'Yes, we work with standard service agreements to protect both parties. Contracts are flexible and can be tailored to your needs. We believe in transparency and will walk you through every detail before signing.',
    },
    {
      question: 'How can JustGirls benefit me?',
      answer: 'We handle the business side — marketing, fan engagement, content strategy, and revenue optimization — so you can focus purely on creating. Most creators see 2–5x income growth within the first month, while working fewer hours.',
    },
    {
      question: 'Who owns my content?',
      answer: 'You own 100% of your content, always. We never claim ownership or rights to anything you create. We simply help you distribute, market, and monetize it more effectively.',
    },
    {
      question: 'How can I get started?',
      answer: 'Click "Get Started" to fill out our application form. We\'ll review your profile and schedule a consultation call to discuss your goals, current performance, and how we can help you scale.',
    },
    {
      question: 'How many creators are you working with?',
      answer: 'We work with a select group of creators to ensure personalized attention and quality service. We limit onboarding to maintain our high standards and avoid spreading our team too thin.',
    },
    {
      question: 'When can I expect results?',
      answer: 'Most creators notice a huge difference in the first week. New creators often experience the biggest upside — in many cases up to 10x earnings growth as we build strong foundations from the start.\n\nIf you\u2019ve already been creating for several months or years, you can typically expect 2x-5x growth within 3-6 months as our strategies compound. Results vary based on your starting point, consistency, and content quality.',
    },
  ];

  



  // Animation variants for entrance and items
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.995 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.48, ease: "easeOut" } },
  };

  return (
    <section ref={ref} className="section-container bg-gradient-to-b from-white to-background-light">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text mb-4">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-lg text-text-light">
          Everything you need to know about working with JustGirls
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.997 }}
              className="bg-white rounded-2xl border-2 border-primary/10 overflow-hidden hover:border-primary/30 transition-colors duration-300 h-auto will-change-transform"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 group"
              >
                <span className="font-heading font-semibold text-text group-hover:text-primary transition-colors duration-200">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndices.includes(index) ? 45 : 0 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndices.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: -6 }}
                    animate={{ height: 'auto', opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -6 }}
                    transition={{ duration: 0.32, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.28 }} className="px-6 pb-6 text-text-light leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
