import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/tech/react/render'>Render & Reconciliation</TileLink>
      <TileLink href='/tech/react/usecases'>Use cases</TileLink>
    </TileGrid>
  );
}
