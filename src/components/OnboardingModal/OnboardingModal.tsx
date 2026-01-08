import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';


const steps = [
  {
    id: 1,
    title: "What's your #1 priority with OnlyFans right now?",
    subtitle: "We'll tailor our insights around the goal that matters most to you.",
    type: 'select',
    options: [
      'Grow subscribers with marketing',
      'Earn more from my current subs',
      'Build a long-term brand',
      'Increase monthly income',
      'All of the above'
    ]
  },
  { id: 2, title: "What's the best email to contact you?", subtitle: "We won't spam you!", type: 'email' },
  { id: 3, title: "What should we call you?", type: 'text' },
  { id: 4, title: "How much revenue did you make in the last 30 days on OnlyFans?", subtitle: "This is confidential and only used to see which strategies fit your current stage.", type: 'number' },
  { id: 5, title: "Can you please link your OnlyFans page?", type: 'url' },
  { id: 6, title: "If you'd like us to give updates, drop your number.", type: 'tel' },
  { id: 7, title: "Almost done! What's your Instagram handle?", type: 'text' },
  { id: 8, title: "How did you hear about us?", type: 'select', options: ['Internet Search', 'Instagram', 'Twitter', 'Friend Referral', 'Other'] },
  { id: 9, title: "Anything else you'd like to share?", type: 'text' },
  { id: 10, title: "Talk Soon", type: 'final' }
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, when: 'beforeChildren' } },
  exit: { opacity: 0, y: -12 }
};



const OnboardingModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);
  const optionsRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onOpen = () => { 
      setOpen(true); 
      setStepIndex(0);
      // only attach the current path when opened from mobile
      try {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
          setAnswers((prev: any) => ({ ...prev, referrer: window.location.pathname }));
        }
      } catch (e) { /* ignore */ }
    };
    const onClose = () => setOpen(false);
    window.addEventListener('openOnboarding', onOpen as EventListener);
    window.addEventListener('closeOnboarding', onClose as EventListener);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey as any);
    return () => {
      window.removeEventListener('openOnboarding', onOpen as EventListener);
      window.removeEventListener('closeOnboarding', onClose as EventListener);
      window.removeEventListener('keydown', onKey as any);
    };
  }, []);

  // prevent background scrolling while modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = prev || '';
    return () => { document.body.style.overflow = prev || ''; };
  }, [open]);

  const next = () => {
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1);
    else {
      // final step behavior: close and log answers (replace with real submit later)
      console.log('Onboarding answers:', answers);
      setOpen(false);
    }
  };

  const prev = () => { if (stepIndex > 0) setStepIndex(stepIndex - 1); };

  const onChange = (val: any) => setAnswers({ ...answers, [steps[stepIndex].id]: val });

  const progress = ((stepIndex + 1) / steps.length) * 100;

  // animate progress smoothly using motion values + spring
  const progressMV = useMotionValue(progress);
  const smoothProgress = useSpring(progressMV, { stiffness: 120, damping: 18 });
  useEffect(() => { progressMV.set(progress); }, [progress]);
  const animatedWidth = useTransform(smoothProgress, v => `${v}%`);

  const step = steps[stepIndex];
  if (!step) return null;

  // close dropdown when clicking outside
  React.useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[99999] isolate flex items-center justify-center bg-black/60" style={{ zIndex: 99999 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="relative w-full h-full max-w-[calc(100vw-2rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden max-h-[95vh] md:max-h-[85vh]" style={{ zIndex: 100000 }} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ type: 'spring', stiffness: 90 }}>

            {/* Custom progress bar (slimmer) */}
            <div className="w-full pt-6 pb-2 px-4 sm:pt-8 sm:pb-3 sm:px-6 md:pt-10 md:px-12 lg:pt-12 lg:px-16">
              <div className="relative w-full h-1.5 md:h-2 bg-pink-50 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-pink-200 to-pink-300"
                  style={{ width: animatedWidth, borderTopRightRadius: 9999, borderBottomRightRadius: 9999 }}
                  transition={{ duration: 0.35 }}
                />
              </div>
            </div>

<div className="pt-4 pb-6 md:pt-6 md:pb-12 lg:pt-8 lg:pb-16 px-4 sm:px-6 md:px-12 lg:px-16 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8 md:mb-10">
                <div className="flex items-center gap-4">
                  <img src="/favicon.png" alt="Logo" className="w-12 h-12" />
                  <h3 className="text-xl md:text-2xl font-bold">Quick Questions</h3>
                </div>
                <button className="text-text/60" onClick={() => setOpen(false)}>✕</button>
              </div>

              <div className="flex-1 flex items-stretch overflow-auto">
                <motion.div className="w-full flex-1 overflow-auto" variants={containerVariants} initial="hidden" animate="visible" exit="exit">

                <AnimatePresence mode="wait">
                  <motion.div key={steps[stepIndex].id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="max-w-3xl mx-auto">
                    <h4 className="text-2xl md:text-3xl font-semibold text-text mb-4">{step.title}</h4>
                    {step.subtitle && <p className="text-sm text-text-light mb-6">{step.subtitle}</p>}

                    <div>
                      {step.type === 'select' && (
                        <div className="relative" ref={dropdownRef}>
                          {/* hide scrollbars but allow native scrolling */}
                          <style>{`.no-scrollbar{ -ms-overflow-style: none; scrollbar-width: none; } .no-scrollbar::-webkit-scrollbar{ display: none; }`}</style>

                          <div className="mb-4">
                            <input
                              readOnly
                              value={answers[step.id] || ''}
                              onClick={() => setDropdownOpen(prev => !prev)}
                              placeholder="Type or select an option"
                              className="w-full border-b border-pink-200 py-3 focus:outline-none placeholder-pink-300 cursor-pointer"
                            />
                          </div>

                          {dropdownOpen && (
                            <div
                              ref={optionsRef}
                              className="no-scrollbar md:absolute left-0 right-0 mt-2 bg-white border border-pink-50 rounded-lg shadow-lg max-h-[38vh] md:max-h-60 overflow-auto overscroll-contain z-50"
                              style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
                            >
                              {steps[stepIndex].options?.map((opt: string) => (
                                <button
                                  key={opt}
                                  onClick={() => { onChange(opt); setDropdownOpen(false); next(); }}
                                  className="w-full text-left px-4 py-3 hover:bg-pink-50"
                                >{opt}</button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {steps[stepIndex].type === 'text' && (
                        <div>
                          <input autoFocus value={answers[step.id] || ''} onChange={(e) => onChange(e.target.value)} className="w-full border-b border-pink-200 py-3 focus:outline-none" placeholder="Type your answer here..." />
                        </div>
                      )}

                      {steps[stepIndex].type === 'email' && (
                        <div>
                          <input autoFocus type="email" value={answers[step.id] || ''} onChange={(e) => onChange(e.target.value)} className="w-full border-b border-pink-200 py-3 focus:outline-none" placeholder="name@example.com" />
                        </div>
                      )}

                      {steps[stepIndex].type === 'number' && (
                        <div>
                          <input autoFocus type="number" value={answers[step.id] || ''} onChange={(e) => onChange(e.target.value)} className="w-full border-b border-pink-200 py-3 focus:outline-none" placeholder="Type your answer here..." />
                        </div>
                      )}

                      {steps[stepIndex].type === 'url' && (
                        <div>
                          <input autoFocus type="url" value={answers[step.id] || ''} onChange={(e) => onChange(e.target.value)} className="w-full border-b border-pink-200 py-3 focus:outline-none" placeholder="https://" />
                        </div>
                      )}

                      {steps[stepIndex].type === 'tel' && (
                        <div>
                          <input autoFocus type="tel" value={answers[step.id] || ''} onChange={(e) => onChange(e.target.value)} className="w-full border-b border-pink-200 py-3 focus:outline-none" placeholder="(201) 555-0123" />
                        </div>
                      )}

                      {steps[stepIndex].type === 'final' && (
                        <div className="text-center py-20">
                          <img src="/assets/thank-you-chick.webp" alt="Thanks" className="mx-auto w-48 h-48 mb-6" />
                          <h4 className="text-2xl font-bold mb-2">Talk Soon 👋</h4>
                          <p className="text-text-light">Thanks for sharing — please wait up to 24h for a response from our team!</p>
                        </div>
                      )}

                      <div className="mt-8">
                        <div className="flex items-center gap-3">
                          {stepIndex > 0 && <button onClick={prev} className="px-4 py-2 rounded-lg border">Back</button>}
                          {steps[stepIndex].type !== 'final' ? (
                            <button onClick={next} className="btn-primary px-6 py-2">{stepIndex < steps.length - 1 ? 'Next' : 'Finish'}</button>
                          ) : (
                            <button onClick={() => { console.log('finished', answers); setStepIndex(0); setTimeout(()=>setOpen(false),300); }} className="btn-primary px-6 py-2">Done</button>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                </motion.div>
              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OnboardingModal;
