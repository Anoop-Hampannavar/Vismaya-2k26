import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HSIT SAMBHRAMA VISMAYA 2K26',
  description: 'Annual Fun Week Festival at Hirasugar Institute of Technology, Nidasoshi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white antialiased">{children}</body>
    </html>
  );
}