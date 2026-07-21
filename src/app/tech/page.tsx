import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/tech/js'>JS</TileLink>
      <TileLink href='/tech/next'>NextJS</TileLink>
      <TileLink href='/tech/react'>React</TileLink>
      <TileLink href='/tech/ts'>TS</TileLink>
    </TileGrid>
  );
}
