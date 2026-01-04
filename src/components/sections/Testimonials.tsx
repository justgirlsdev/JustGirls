import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Testimonials: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: 'Emma S.',
      role: 'Top 0.1% Creator',
      image: '💕',
      quote: 'JustGirls helped me 10x my income in 6 months. Their chat team is incredible – fans think it\'s me, and I finally have time to actually create content.',
      earnings: '$85K/month',
    },
    {
      name: 'Sophie M.',
      role: 'Top 1% Creator',
      image: '✨',
      quote: 'I was burnt out managing everything alone. Now I just focus on content while they handle growth, DMs, and strategy. Best decision I ever made.',
      earnings: '$42K/month',
    },
    {
      name: 'Lily K.',
      role: 'Rising Star',
      image: '🌸',
      quote: 'From struggling to make $5K to consistently hitting $30K+. The marketing strategies actually work, and the team genuinely cares about my success.',
      earnings: '$31K/month',
    },
    {
      name: 'Maya R.',
      role: 'Top 0.5% Creator',
      image: '🌟',
      quote: 'The professionalism and results speak for themselves. My revenue doubled in 3 months, and I actually have a work-life balance now.',
      earnings: '$58K/month',
    },
    {
      name: 'Aria V.',
      role: 'Top 2% Creator',
      image: '💎',
      quote: 'Best investment I ever made. The team handles everything so professionally, and my subscribers love the engagement. Highly recommend!',
      earnings: '$28K/month',
    },
    {
      name: 'Luna D.',
      role: 'Top 0.3% Creator',
      image: '🦋',
      quote: 'From $8K to $65K monthly. The growth strategies are insane, and their chat team is so good at building genuine connections with my fans.',
      earnings: '$65K/month',
    },
  ];

  return (
    <section ref={ref} className="section-container bg-white">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text mb-4">
          <span className="gradient-text">Testimonials</span>
        </h2>
        <p className="text-lg text-text-light">
          Top 0.02% Creators Trust JustGirls – Over $20M Earned With Our Team
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="relative bg-white rounded-3xl p-8 border-4 border-transparent bg-gradient-to-br from-primary/5 to-secondary/5 hover:border-primary/30 transition-all duration-300 shadow-soft hover:shadow-soft-lg"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #FF1493 0%, #FF6B9D 50%, #FFB6C1 100%) border-box',
              border: '3px solid transparent',
            }}
          >
            {/* Avatar and Name */}
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl shadow-soft">
                {testimonial.image}
              </div>
              <div className="ml-4">
                <h4 className="font-heading font-semibold text-text text-lg">{testimonial.name}</h4>
                <p className="text-sm text-text-light">{testimonial.role}</p>
              </div>
              {/* Earnings Badge */}
              <div className="ml-auto inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-4 py-1">
                <span className="text-xs font-heading font-bold text-primary">{testimonial.earnings}</span>
              </div>
            </div>

            {/* Quote */}
            <p className="text-text-light leading-relaxed">
              "{testimonial.quote}"
            </p>

            {/* Video play button indicator */}
            <motion.div
              className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center cursor-pointer transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5 text-primary ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
