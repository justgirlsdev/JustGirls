import React from 'react';
import Layout from '../components/layout/Layout';
import FAQ from '../components/sections/FAQ';

const FAQPage: React.FC = () => {
  return (
    <Layout
      title="Frequently Asked Questions - JustGirls"
      description="Answers about partnering with JustGirls: costs, contracts, ownership, timelines, and more."
    >
      <FAQ />
    </Layout>
  );
};

export default FAQPage;
