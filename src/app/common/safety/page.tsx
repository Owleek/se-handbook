import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <div>CORS</div>
      <div>Referrer-Policy</div>
      <div>OAuth 2.0</div>
      <TileLink href='/common/safety/csrf'>CSRF</TileLink>
      <TileLink href='/common/safety/xss'>XSS / CSP</TileLink>
    </TileGrid>
  );
}
