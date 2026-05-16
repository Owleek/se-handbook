import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/network/apii/rest'>REST</TileLink>
      <TileLink href='/network/apii/cookies'>Cookies</TileLink>
      <TileLink href='/network/apii/graphql'>GraphQL</TileLink>
      <TileLink href='/network/apii/soap'>SOAP</TileLink>
    </TileGrid>
  );
}
