import Link from 'next/link';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className='PageLinks'>
        <Link href='/'>Home</Link>
        <Link href='/javascript'>Topics</Link>
      </div>
      {children}
    </div>
  );
}
