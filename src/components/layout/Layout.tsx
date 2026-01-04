import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'JustGirls - Premier OnlyFans Creator Management Agency',
  description = 'Launch your full backend system in 72 hours. We scale your income, handle DMs, and build your brand – so you never burn out again.'
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://justgirls.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://justgirls.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="JustGirls - Premier OnlyFans Creator Management Agency" />
        <meta property="og:site_name" content="JustGirls" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://justgirls.com" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://justgirls.com/og-image.png" />
        <meta name="twitter:image:alt" content="JustGirls - Premier OnlyFans Creator Management Agency" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="JustGirls" />
        <meta name="publisher" content="JustGirls" />
        <link rel="canonical" href="https://justgirls.com" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Layout;
