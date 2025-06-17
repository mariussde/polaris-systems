import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Crimson_Text } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/theme-provider';
import SharedLayout from '@/components/layout/SharedLayout';

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const crimsonText = Crimson_Text({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-crimson-text',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Polaris Systems',
  description: 'Building the future of technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${crimsonText.variable}`} suppressHydrationWarning>
      <body className="antialiased overflow-y-scroll">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SharedLayout>
            {children}
          </SharedLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
