import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object | null;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical = 'https://justgirls.com', ogImage = '/og-image.png', jsonLd = null }) => {
  const pageTitle = title || 'JustGirls - Premier OnlyFans Creator Management Agency';
  const pageDesc = description || 'Launch your full backend system in 72 hours. We scale your income, handle DMs, and build your brand.';

  const base = canonical.replace(/\/$/, '');
  const absoluteOg = ogImage.startsWith('http') ? ogImage : `${base}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;
  const ogType = ogImage.endsWith('.webp') ? 'image/webp' : ogImage.endsWith('.png') ? 'image/png' : 'image/svg+xml';
  const ogWidth = '1200';
  const ogHeight = '630';

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={canonical} />
      <link rel="image_src" href={absoluteOg} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={absoluteOg} />
      <meta property="og:image:secure_url" content={absoluteOg} />
      <meta property="og:image:type" content={ogType} />
      <meta property="og:image:width" content={ogWidth} />
      <meta property="og:image:height" content={ogHeight} />
      <meta property="og:image:alt" content="JustGirls" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={absoluteOg} />

      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;