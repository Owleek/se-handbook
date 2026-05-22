import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import './TileLink.css';

interface IProps {
  children: React.ReactNode;
  href: string;
  type?: 'ghost';
}

export function TileLink({ children, href, type }: IProps) {
  return (
    <Link href={href} className={cn('TileLink', type)}>
      {children}
    </Link>
  );
}
