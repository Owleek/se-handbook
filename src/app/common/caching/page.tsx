import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/common/caching/restHeaders'>REST headers</TileLink>
      <TileLink href='/common/caching/all'>All</TileLink>
      <TileLink href='/common/caching/serverCaching'>Server caching</TileLink>
      <TileLink href='/common/caching/dbCaching'>Data Base caching</TileLink>
    </TileGrid>
  );
}
