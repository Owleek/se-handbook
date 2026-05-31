import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/fundamental/code_principles/oop'>OOP</TileLink>
      <TileLink href='/fundamental/code_principles/solid'>SOLID</TileLink>
    </TileGrid>
  );
}
