import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Goose',
  description: 'Let your friends know where you love to dine. Eat, Share, Honk!',
};

type Props = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
