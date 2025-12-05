import React from 'react';
import Link from 'next/link';
import './TileLink.css';

export function TileLink({
  children,
  href,
}: Readonly<{ children: React.ReactNode; href: string }>) {
  return (
    <Link href={href} className='TileLink'>
      {children}
    </Link>
  );
}
