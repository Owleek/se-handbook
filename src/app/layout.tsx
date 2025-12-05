import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JS Notes',
  description: 'Коротко о тонкостях',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={`antialiased`}>
        <div className='max-w-3xl mx-auto'>{children}</div>
      </body>
    </html>
  );
}
