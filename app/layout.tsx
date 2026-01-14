import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/globals.css';
import { ThemeTogglerButton } from '@/components/animate-ui/components/buttons/theme-toggler';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeTogglerButton className="fixed top-4 right-4 z-50" />
        {children}
      </body>
    </html>
  );
}