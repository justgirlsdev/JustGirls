import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import SEO from '../components/SEO';
import Mastery from '../components/sections/Mastery';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';

const Home: React.FC = () => {
  return (
    <Layout
      title="JustGirls - Premier OnlyFans Creator Management Agency"
      description="Launch your full backend system in 72 hours. We scale your income, handle DMs, and build your brand – so you never burn out again."
    >
      <SEO title="JustGirls - Premier OnlyFans Creator Management Agency" description="Launch your full backend system in 72 hours. We scale your income, handle DMs, and build your brand – so you never burn out again." ogImage="/og-image.svg" jsonLd={{"@context":"https://schema.org","@type":"WebPage","name":"JustGirls","description":"Premier OnlyFans Creator Management Agency"}} />
      <Hero />
      <Services />
      <Mastery />
      <Process />
      <FAQ />
      <FinalCTA />
    </Layout>
  );
};

export default Home;
