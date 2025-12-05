import React from 'react';
import './TileGrid.css';

export function TileGrid({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className='TileGrid'>{children}</div>;
}
