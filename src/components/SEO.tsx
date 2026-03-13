import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = 'Valentina Berois | UX Director & Digital Transformation Leader',
  description = 'Driving strategic UX initiatives and transforming enterprise organizations through design, development, and innovation. 15+ years of experience in product strategy, service design, and digital transformation.',
  image = 'https://valentinaberois.com/og-image.png',
  url = 'https://valentinaberois.com',
  type = 'website'
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to set or update meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', 'UX Director, Digital Transformation, Product Strategy, Service Design, Enterprise UX, Design Leadership, Innovation Strategy');
    setMetaTag('author', 'Valentina Berois');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // OpenGraph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:site_name', 'Valentina Berois Portfolio', true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // JSON-LD Structured Data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Valentina Berois',
      jobTitle: 'UX Director',
      description: description,
      url: url,
      image: image,
      sameAs: [
        'https://www.linkedin.com/in/valentinaberois',
        'https://github.com/valentina'
      ],
      knowsAbout: [
        'User Experience Design',
        'Digital Transformation',
        'Product Strategy',
        'Service Design',
        'Design Systems',
        'Enterprise UX',
        'Innovation Strategy',
        'Agile Methodologies'
      ],
      alumniOf: {
        '@type': 'Organization',
        name: 'Various institutions'
      },
      worksFor: {
        '@type': 'Organization',
        name: 'KRONES AG',
        jobTitle: 'Head of UX'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, image, url, type]);

  return null;
}
