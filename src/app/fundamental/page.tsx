import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Template() {
  return (
    <TileGrid>
      <TileLink href='/fundamental/code_approaches'>Code Approaches</TileLink>
      <TileLink href='/fundamental/code_principles'>Code Principles</TileLink>
      <TileLink href='/fundamental/front_arch'>Front Architecture</TileLink>
      <TileLink href='/fundamental/algorythm'>Algorythm</TileLink>
    </TileGrid>
  );
}
