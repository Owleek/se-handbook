import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Template() {
  return (
    <TileGrid>
      <TileLink href='/common/browser/architecture'>Architecture</TileLink>
      <TileLink href='/common/browser/event-loop'>Event loop</TileLink>
      <TileLink href='/common/browser/crp'>Critical render path</TileLink>
    </TileGrid>
  );
}
