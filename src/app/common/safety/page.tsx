import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <div>XST атаки</div>
      <div>XSS</div>
      <div>CORS</div>
      <div>Referrer-Policy - заголовок</div>
      <TileLink href='/common/safety/csrf'>CSRF</TileLink>
    </TileGrid>
  );
}
