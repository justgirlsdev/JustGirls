import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTelegram, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="section-container bg-gradient-to-b from-white to-background-light relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-text mb-6">
            Get in <span className="underline decoration-primary underline-offset-8 decoration-4">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-text/70 max-w-2xl mx-auto">
            Have a quick question? Looking to partner or work together? Reach out through the form and we'll get back to you in under 24 hours.
          </p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href="https://t.me/justgirls"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary/10 hover:bg-primary text-text hover:text-white px-6 py-3 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTelegram className="text-2xl" />
            <span className="font-semibold">Telegram</span>
          </motion.a>

          <motion.a
            href="https://twitter.com/justgirls"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-text/10 hover:bg-text text-text hover:text-white px-6 py-3 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaXTwitter className="text-2xl" />
            <span className="font-semibold">Twitter</span>
          </motion.a>

          <motion.a
            href="https://instagram.com/justgirls"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-secondary/10 hover:bg-secondary text-text hover:text-white px-6 py-3 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInstagram className="text-2xl" />
            <span className="font-semibold">Instagram</span>
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-primary/15 rounded-[3rem] p-8 md:p-12 shadow-soft"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-text font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-primary outline-none transition-all duration-300 text-text placeholder-text/40"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-text font-semibold mb-2">
                Your E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your E-mail"
                required
                className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-primary outline-none transition-all duration-300 text-text placeholder-text/40"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-text font-semibold mb-2">
                Your Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-primary outline-none transition-all duration-300 text-text placeholder-text/40"
              />
            </div>

            {/* Inquiry Field */}
            <div>
              <label htmlFor="inquiry" className="block text-text font-semibold mb-2">
                Enter your inquiry
              </label>
              <textarea
                id="inquiry"
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                placeholder="Enter your Inquiry"
                required
                rows={5}
                className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent focus:border-primary outline-none transition-all duration-300 text-text placeholder-text/40 resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-soft hover:shadow-glow flex items-center gap-2"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Inquiry
              <span className="text-xl">→</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
