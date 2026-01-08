import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object | null;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical = 'https://justgirls.com', ogImage = '/og-image.svg', jsonLd = null }) => {
  const pageTitle = title || 'JustGirls - Premier OnlyFans Creator Management Agency';
  const pageDesc = description || 'Launch your full backend system in 72 hours. We scale your income, handle DMs, and build your brand.';

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="JustGirls" />

      {/* Twitter */}
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;