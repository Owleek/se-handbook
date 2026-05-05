import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/common/caching/restHeaders'>REST headers</TileLink>
      <TileLink href='/common/caching/serverCaching'>Server caching</TileLink>
    </TileGrid>
  );
}
