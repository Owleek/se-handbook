import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/common/browser'>Browser</TileLink>
      <TileLink href='/common/url'>Uniform resource locator</TileLink>
      <TileLink href='/common/crp'>Critical render path</TileLink>
      <TileLink href='/common/eventLoop'>EventLoop</TileLink>
      <TileLink href='/common/lossnp'>Loss of number precision</TileLink>
    </TileGrid>
  );
}
