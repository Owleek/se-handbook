import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/tech/js'>JS</TileLink>
      <TileLink href='/tech/next'>NextJS</TileLink>
    </TileGrid>
  );
}
