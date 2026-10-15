import type { Metadata, Viewport } from 'next';
import './globals.css';
import { profile } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Jatin Thakur | Senior Backend Engineer · Java, Spring Boot, AWS',
  description: 'Jatin Thakur is a Senior Software Engineer with 7+ years building regulated banking systems in Java, Spring Boot, Kafka, microservices, and AWS. AWS Certified Solutions Architect – Associate.',
  applicationName: 'Jatin Thakur Portfolio',
  authors: [{ name: 'Jatin Thakur' }],
  openGraph: {
    title: 'Jatin Thakur | Senior Backend Engineer',
    description: 'Java, Spring Boot, Kafka, microservices, and AWS in regulated banking. 7+ years.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0b0d10',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: profile.name,
          jobTitle: profile.title,
          email: `mailto:${profile.email}`,
          address: { '@type': 'PostalAddress', addressLocality: 'Delhi', addressCountry: 'IN' },
          sameAs: [profile.linkedin, ...(profile.github ? [profile.github] : [])],
        }).replace(/</g, '\\u003c') }} />
      </body>
    </html>
  );
}
