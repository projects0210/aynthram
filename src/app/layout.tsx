import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Aynthram Leadership Academy — Art-Led Leadership & Experiential Retreats',
  description: 'Art-led leadership immersions rooted in Odisha’s heritage. Workshops, retreats & experiential programs for leaders, founders, and teams.',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aynthram Leadership Academy",
  "url": "https://www.aynthram.com", // Placeholder URL
  "logo": "https://www.aynthram.com/logo.png", // Placeholder Logo URL
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9703831819",
      "contactType": "customer service"
    },
    {
      "@type": "ContactPoint",
      "email": "vasudev.aynthram@gmail.com",
      "contactType": "customer service"
    }
  ],
  "sameAs": [
    // Add social media links here when available
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@400;500;700&display=swap" rel="stylesheet" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
