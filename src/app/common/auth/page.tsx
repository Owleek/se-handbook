import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Template() {
  return (
    <TileGrid>
      <TileLink href='/common/auth/sso'>SSO versions</TileLink>
      <TileLink href='/common/auth/login'>Login (OAuth2.0)</TileLink>
    </TileGrid>
  );
}
