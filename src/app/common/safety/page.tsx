import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <div>OAuth 2.0</div>
      <TileLink href='/common/safety/cors'>SOP / CORS</TileLink>
      <TileLink href='/common/safety/csrf'>CSRF</TileLink>
      <TileLink href='/common/safety/xss'>XSS / CSP</TileLink>
      <TileLink href='/common/safety/refpolicy'>Referrer policy</TileLink>
    </TileGrid>
  );
}
