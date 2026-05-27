import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/common/browser'>Browser</TileLink>
      <TileLink href='/common/website-enter'>Website enter</TileLink>
      <TileLink href='/common/lossnp'>Loss of number precision</TileLink>
      <TileLink href='/common/caching'>Caching</TileLink>
      <TileLink href='/common/safety'>Safety</TileLink>
      <TileLink href='/common/auth'>Auth</TileLink>
    </TileGrid>
  );
}
