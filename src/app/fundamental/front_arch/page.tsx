import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Template() {
  return (
    <TileGrid>
      <TileLink href='/fundamental/front_arch/design'>Arch Design</TileLink>
      <TileLink href='/fundamental/front_arch/deployment'>Deployment</TileLink>
      <TileLink href='/fundamental/front_arch/builders'>App builders</TileLink>
    </TileGrid>
  );
}
