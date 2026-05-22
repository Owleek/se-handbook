import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/network/alp/http'>HTTP</TileLink>
      <TileLink href='/network/apii/realtimeupdates'>Websocket</TileLink>
      <TileLink href='/network/alp/grpc' type='ghost'>
        gRPC
      </TileLink>
      <TileLink href='/network/alp/webrtc' type='ghost'>
        webRTC
      </TileLink>
      <TileLink href='/network/alp/ssh' type='ghost'>
        SSH
      </TileLink>
    </TileGrid>
  );
}
