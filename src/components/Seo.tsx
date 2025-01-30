import { Helmet } from 'react-helmet-async';
import { Organization, WithContext } from 'schema-dts';

export function Seo() {
  const schema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AppSnap",
    "description": "Rapid App Development Solutions",
    "url": "https://appsnap.dev",
    "logo": "https://appsnap.dev/logo.png",
    "sameAs": [
      "https://twitter.com/appsnap",
      "https://linkedin.com/company/appsnap",
      "https://github.com/appsnap"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+1-234-567-8900",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    }],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>AppSnap - Rapid App Development | Build Your App in a Snap™</title>
      <meta name="title" content="AppSnap - Rapid App Development | Build Your App in a Snap™" />
      <meta name="description" content="Transform your ideas into reality with AppSnap's rapid app development services. Get your custom application built and deployed in record time. Specializing in MVP, Professional, and Enterprise solutions." />
      <meta name="keywords" content="rapid app development, quick app prototyping, custom software development, MVP development, fast app deployment, mobile app development, web application, enterprise solutions" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://appsnap.dev/" />
      <meta property="og:title" content="AppSnap - Rapid App Development | Build Your App in a Snap™" />
      <meta property="og:description" content="Transform your ideas into reality with AppSnap's rapid app development services. Get your custom application built and deployed in record time." />
      <meta property="og:image" content="https://appsnap.dev/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://appsnap.dev/" />
      <meta property="twitter:title" content="AppSnap - Rapid App Development | Build Your App in a Snap™" />
      <meta property="twitter:description" content="Transform your ideas into reality with AppSnap's rapid app development services. Get your custom application built and deployed in record time." />
      <meta property="twitter:image" content="https://appsnap.dev/twitter-image.jpg" />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#10b981" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://appsnap.dev" />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
} 