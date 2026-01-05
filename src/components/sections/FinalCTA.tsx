import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    <section className="section-container bg-background-light relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-text via-text to-text/90 rounded-[3rem] p-12 md:p-16 text-center shadow-soft-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              You <span className="text-secondary">Create</span>
              <br />
              We <span className="text-primary">Scale</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
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
          >
            <Link to="/apply">
              <motion.button
                className="bg-white text-text hover:bg-primary hover:text-white font-semibold text-lg px-12 py-4 rounded-full transition-all duration-300 shadow-soft hover:shadow-glow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                GET STARTED
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { value: '$20M+', label: 'Creator Earnings' },
              { value: '72hrs', label: 'System Launch' },
              { value: '24/7', label: 'Support Team' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
