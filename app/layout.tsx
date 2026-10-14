import type { Metadata, Viewport } from 'next';
import './globals.css';
import { profile } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Jatin Thakur | Senior Software Engineer',
  description: 'Portfolio of Jatin Thakur, Senior Software Engineer focused on Java, Spring Boot, backend systems, database modernization, and AWS.',
  applicationName: 'Jatin Thakur Portfolio',
  authors: [{ name: 'Jatin Thakur' }],
  openGraph: {
    title: 'Jatin Thakur | Senior Software Engineer',
    description: 'Backend engineering, distributed systems, and enterprise modernization.',
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
