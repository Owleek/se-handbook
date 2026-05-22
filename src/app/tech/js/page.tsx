import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/tech/js/modules'>Modules</TileLink>
      <TileLink href='/tech/js/lexenv'>Lexical Environment</TileLink>
      <TileLink href='/tech/js/increment'>++x--</TileLink>
      <TileLink href='/tech/js/promise' type='ghost'>
        Promise
      </TileLink>
    </TileGrid>
  );
}
