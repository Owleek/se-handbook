import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Template() {
  return (
    <TileGrid>
      <TileLink href='/fundamental/algorythm/basics'>Basics</TileLink>
      <TileLink href='/fundamental/algorythm/sort'>Sort</TileLink>
    </TileGrid>
  );
}
