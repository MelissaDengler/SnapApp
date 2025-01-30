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
      "https://linkedin.com/company/appsnap"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
} 