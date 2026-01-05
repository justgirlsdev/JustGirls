import React from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/sections/ContactForm';

const Contact: React.FC = () => {
  return (
    <Layout
      title="Contact Us - JustGirls Agency"
      description="Have a question or want to work with us? Get in touch and we'll respond within 24 hours."
    >
      <ContactForm />
    </Layout>
  );
};

export default Contact;
