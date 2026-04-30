import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/network/alp/http'>HTTP</TileLink>
      <TileLink href='/network/alp/websocket'>Websocket</TileLink>
      <TileLink href='/network/alp/grpc'>gRPC</TileLink>
      <TileLink href='/network/alp/webrtc'>webRTC</TileLink>
      <TileLink href='/network/alp/ssh'>SSH</TileLink>
    </TileGrid>
  );
}
