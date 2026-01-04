import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';

const Home: React.FC = () => {
  return (
    <Layout
      title="JustGirls - Premier OnlyFans Creator Management Agency"
      description="Launch your full backend system in 72 hours. We scale your income, handle DMs, and build your brand – so you never burn out again."
    >
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </Layout>
  );
};

export default Home;
