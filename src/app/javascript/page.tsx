import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/javascript/modules'>Модули</TileLink>
      <TileLink href='/javascript/promise'>Promise</TileLink>
    </TileGrid>
  );
}
