export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "4AT AI",
    url: "https://4at.ai",
    logo: "https://4at.ai/logo.png",
    description: "Finance-native AI automation platform",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-609-255-3118",
      contactType: "Sales",
      email: "info@consult-4at.com"
    },
    sameAs: [
      "https://linkedin.com/company/4at-ai",
      "https://twitter.com/4at_ai"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}