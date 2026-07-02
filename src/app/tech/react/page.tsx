import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/tech/react/render'>Render & Reconciliation</TileLink>
      <TileLink href='/tech/react/usecases'>Use cases</TileLink>
      <TileLink href='/tech/react/terms'>Terms</TileLink>
      <TileLink href='/tech/react/cleancode'>Clean Code</TileLink>
      <TileLink href='/tech/react/hooks'>Hooks</TileLink>
      <TileLink href='/tech/react/context'>Context</TileLink>
    </TileGrid>
  );
}
