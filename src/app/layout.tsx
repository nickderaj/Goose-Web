import './globals.css';

import { ReactNode } from 'react';

export const metadata = {
    metadataBase: new URL(
        process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000',
    ),
    title: 'Goose',
    description: 'Let your friends know where you love to dine. Eat, Share, Honk!',
};

type Props = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body className="bg-background text-foreground">
                <main className="min-h-screen flex flex-col items-center">{children}</main>
            </body>
        </html>
    );
}
