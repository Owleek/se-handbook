import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/tech/js/modules'>Modules</TileLink>
      <TileLink href='/tech/js/promise'>Promise</TileLink>
      <TileLink href='/tech/js/lexenv'>Lexical Environment</TileLink>
    </TileGrid>
  );
}
