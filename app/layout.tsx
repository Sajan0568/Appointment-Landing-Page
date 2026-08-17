import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Free AI Marketing Consultation | Sajan Clicks',
  description: 'Get a free, customized AI marketing plan for your business.',
  openGraph: { title: 'Free AI Marketing Consultation | Sajan Clicks', description: 'Find where your business is losing customers online.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
