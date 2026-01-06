import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import tiktokIcon from '../../assets/mastery-section/tiktok-icon.png';
import twitterIcon from '../../assets/mastery-section/twitter-icon.png';
import instagramIcon from '../../assets/mastery-section/instagram-icon.png';
import redditIcon from '../../assets/mastery-section/reddit-icon.png';
import youtubeIcon from '../../assets/mastery-section/youtube-icon.png';
import twitchIcon from '../../assets/mastery-section/twitch-icon.png';
import paidPromoIcon from '../../assets/mastery-section/paid-promo-icon.png';
import calendarIcon from '../../assets/mastery-section/calendar-icon.png';
import paymentGraph from '../../assets/mastery-section/payment-graph.webp';
import pathSvg from '../../assets/mastery-section/path-horizontal.svg';
import pathVerticalSvg from '../../assets/mastery-section/path-vertical.svg';
import faviconIcon from '/favicon.png';

const Mastery: React.FC = () => {
  const [isPayoutLoading, setIsPayoutLoading] = useState(true);

  useEffect(() => {
    // Simulate loading then show checkmark
    const timer = setTimeout(() => {
      setIsPayoutLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const platformCards = [
    { name: 'Twitch', icon: twitchIcon, delay: 0.1 },
    { name: 'TikTok', icon: tiktokIcon, delay: 0.2 },
    { name: 'Twitter', icon: twitterIcon, delay: 0.3 },
    { name: 'YouTube', icon: youtubeIcon, delay: 0.15 },
    { name: 'Paid Promo', icon: paidPromoIcon, delay: 0.25 },
    { name: 'Instagram', icon: instagramIcon, delay: 0.35 },
    { name: 'Reddit', icon: redditIcon, delay: 0.2 },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text mb-4">
            Unleash Creative <span className="text-primary">Mastery</span>
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Focus on what you do best - creating. We handle everything else.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Path SVG Background - horizontal for desktop */}
          <motion.img
            src={pathSvg}
            alt=""
            className="absolute pointer-events-none hidden lg:block"
            style={{ 
              zIndex: 0,
              width: '28%',
              height: 'auto',
              top: '50%',
              left: '53%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.4
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          {/* Path SVG Background - vertical for mobile */}
          <motion.img
            src={pathVerticalSvg}
            alt=""
            className="absolute pointer-events-none lg:hidden"
            style={{ 
              zIndex: 0,
              width: 'auto',
              height: '30%',
              top: '59%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.4
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12 relative" style={{ zIndex: 1 }}>
            {/* Top Side - Platform Cards (vertical on mobile, horizontal on desktop) */}
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 flex-wrap justify-center lg:justify-start items-center">
              {/* Column 1 - Twitch & YouTube */}
              <div className="flex lg:flex-col gap-3 lg:gap-5 justify-center">
                <PlatformCard name="Twitch" icon={twitchIcon} delay={0.3} direction="left" />
                <PlatformCard name="YouTube" icon={youtubeIcon} delay={0.4} direction="right" />
              </div>

              {/* Column 2 - TikTok, Paid Promo, Reddit */}
              <div className="flex lg:flex-col gap-3 lg:gap-5">
                <PlatformCard name="TikTok" icon={tiktokIcon} delay={0.5} direction="left" />
                <PlatformCard name="Paid Promo" icon={paidPromoIcon} delay={0.6} direction="up" />
                <PlatformCard name="Reddit" icon={redditIcon} delay={0.7} direction="right" />
              </div>

              {/* Column 3 - Twitter & Instagram */}
              <div className="flex lg:flex-col gap-3 lg:gap-5 justify-center">
                <PlatformCard name="Twitter" icon={twitterIcon} delay={0.8} direction="left" />
                <PlatformCard name="Instagram" icon={instagramIcon} delay={0.9} direction="right" />
              </div>
            </div>

            {/* Center Icon - Static on mobile, absolute on desktop */}
            <motion.div
              className="flex justify-center lg:absolute z-20 my-4 lg:my-0"
              style={{ left: 'calc(50% - 60px)', top: 'calc(50% - 60px)' }}
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative bg-gradient-to-br from-primary to-secondary p-2 md:p-4 rounded-lg md:rounded-xl shadow-xl">
                  <img src={faviconIcon} alt="JustGirls" className="w-10 h-10 md:w-20 md:h-20" />
                </div>
              </div>
            </motion.div>

            {/* Bottom/Right Side - Payout Cards */}
            <div className="flex justify-start md:justify-center lg:justify-end items-center relative mt-6 lg:mt-0 w-full lg:w-auto">
              <div className="relative lg:mr-[100px] ml-4 md:ml-0 lg:ml-0">
                {/* Main payment graph card */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <PayoutCard isLoading={isPayoutLoading} />
                </motion.div>
                
                {/* Successful payout card - smaller, layered on top right */}
                <motion.div 
                  className="absolute -top-6 md:-top-8 -right-20 md:-right-24 z-10"
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  <SuccessPayoutCard isLoading={isPayoutLoading} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Platform Card Component
const PlatformCard: React.FC<{ name: string; icon: string; delay: number; direction?: 'left' | 'right' | 'up' }> = ({ name, icon, delay, direction = 'up' }) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left': return { opacity: 0, x: -50, y: 0 };
      case 'right': return { opacity: 0, x: 50, y: 0 };
      case 'up': return { opacity: 0, x: 0, y: 40 };
      default: return { opacity: 0, y: 30 };
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl p-3 md:p-5 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-20 md:w-32 min-h-[90px] md:min-h-[140px] mx-auto"
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: "easeOut", type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="flex flex-col items-center justify-start gap-3 md:gap-4 h-full">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
          <img src={icon} alt={name} className="w-full h-full object-contain" />
        </div>
        <p className="text-xs md:text-sm font-semibold text-text text-center mt-auto">{name}</p>
      </div>
    </motion.div>
  );
};

// Payout Card with Loading Animation
const PayoutCard: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div className="relative bg-white rounded-lg md:rounded-xl p-2 md:p-4 shadow-xl border border-pink-100 max-w-[220px] md:max-w-xs w-full">
      {/* Payment Graph */}
      <div className="mb-1.5 md:mb-3 bg-gradient-to-br from-pink-50 to-purple-50 rounded-md md:rounded-lg p-1.5 md:p-3">
        <img src={paymentGraph} alt="Payment trend" className="w-full h-auto" />
      </div>

      {/* Date Range Badge */}
      <div className="inline-flex items-center gap-1 md:gap-1.5 bg-pink-50 px-1.5 md:px-2.5 py-0.5 md:py-1 rounded-full mb-1.5 md:mb-3">
        <img src={calendarIcon} alt="" className="w-1.5 md:w-2.5 h-1.5 md:h-2.5" />
        <span className="text-[8px] md:text-[10px] font-medium text-text">From Jan 2025 to Jan 2026</span>
      </div>

      {/* Payment Breakdown */}
      <div className="space-y-1 md:space-y-2">
        <PaymentRow label="Subscription" amount="$46,613.41" />
        <PaymentRow label="Messages" amount="$105,524.23" />
        <PaymentRow label="Tips" amount="$163,620.52" />
      </div>
    </div>
  );
};

// Payment Row Component
const PaymentRow: React.FC<{ label: string; amount: string }> = ({ label, amount }) => {
  return (
    <div className="flex items-center justify-between py-0.5 md:py-1 border-b border-pink-100 last:border-0">
      <div className="flex items-center gap-1 md:gap-1.5">
        <div className="w-0.5 md:w-1 h-0.5 md:h-1 rounded-full bg-primary" />
        <span className="text-[8px] md:text-xs text-text-light">{label}</span>
      </div>
      <span className="font-bold text-[8px] md:text-xs text-text">{amount}</span>
    </div>
  );
};

// Success Payout Card - Smaller overlay card
const SuccessPayoutCard: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div className="bg-white rounded-2xl p-3 md:p-4 shadow-2xl border border-pink-100 w-36 md:w-48">
      {/* Success Icon */}
      <div className="flex justify-center mb-2 md:mb-3">
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={!isLoading ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          style={{ width: '48px', height: '48px' }}
        >
          {/* Static light pink ring background */}
          <div 
            className="absolute"
            style={{
              width: '48px',
              height: '48px',
              border: '4px solid #FDE2F3',
              borderRadius: '50%',
            }}
          />
          
          {/* Rotating darker pink arc on top */}
          <motion.div
            className="absolute"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '4px solid transparent',
              borderTopColor: '#EC4899',
              borderRightColor: '#EC4899',
            }}
            animate={!isLoading ? { rotate: 360 } : { rotate: 0 }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: 1
            }}
          />
          
          <div className="relative w-10 h-10 rounded-full flex items-center justify-center bg-white z-10">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={!isLoading ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="text-center mb-2 md:mb-3">
        <h3 className="text-sm md:text-lg font-bold text-text mb-1">Successful payout</h3>
      </div>

      {/* Message with icon */}
      <div className="flex items-center gap-1.5 md:gap-2 bg-pink-50 rounded-lg p-2 md:p-2.5">
        <div className="flex-shrink-0">
          <svg
            className="w-4 md:w-5 h-4 md:h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
        <p className="text-[10px] md:text-xs text-text-light leading-relaxed">
          The money is on route to your bank!
        </p>
      </div>
    </div>
  );
};

export default Mastery;
