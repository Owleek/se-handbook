import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Template() {
  return (
    <TileGrid>
      <TileLink href='/common/auth/basics'>Basics</TileLink>
      <TileLink href='/common/auth/sso'>Single Sign-On / OAuth 2.0</TileLink>
      <TileLink href='/common/auth/resume'>Resume</TileLink>
    </TileGrid>
  );
}
