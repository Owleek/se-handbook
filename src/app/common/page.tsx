import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/common/url'>URL</TileLink>
      <TileLink href='/common/browser'>Browser</TileLink>
      <TileLink href='/common/eventLoop'>EventLoop</TileLink>
      <TileLink href='/common/lossnp'>Loss of number precision</TileLink>
    </TileGrid>
  );
}
