import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/network/osi'>Open system interconnection</TileLink>
      <TileLink href='/network/alp'>Application layer protocols</TileLink>
      <TileLink href='/network/tlp'>Transport layer protocols</TileLink>
      <TileLink href='/network/apii'>API interaction</TileLink>
    </TileGrid>
  );
}
