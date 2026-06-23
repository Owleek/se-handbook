import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Template() {
  return (
    <TileGrid>
      <TileLink href='/tech/next/summary'>Summary</TileLink>
      <TileLink href='/tech/next/structure'>Structure</TileLink>
      <TileLink href='/tech/next/hydration'>Hydration</TileLink>
      <TileLink href='/tech/next/deployment'>Deployment</TileLink>
    </TileGrid>
  );
}
