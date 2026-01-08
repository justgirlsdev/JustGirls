import React from 'react';
import Layout from '../components/layout/Layout';
import FAQ from '../components/sections/FAQ';
import SEO from '../components/SEO';
import { FAQ_DATA } from '../components/sections/FAQ';

const FAQPage: React.FC = () => {
  const mainEntity = FAQ_DATA.map((f: { question: string; answer: string }) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.answer
    }
  }));

  return (
    <Layout
      title="Frequently Asked Questions - JustGirls"
      description="Answers about partnering with JustGirls: costs, contracts, ownership, timelines, and more."
    >
      <SEO title="FAQ - JustGirls" description="Answers about partnering with JustGirls: costs, contracts, ownership, timelines, and more." ogImage="/og-image.svg" jsonLd={{"@context":"https://schema.org","@type":"FAQPage","mainEntity":mainEntity}} />
      <FAQ />
    </Layout>
  );
};

export default FAQPage;
