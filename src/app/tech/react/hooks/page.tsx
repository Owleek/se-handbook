import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/tech/react/hooks/usestate'>useState</TileLink>
      <TileLink href='/tech/react/hooks/useeffect'>
        useEffect & useLayoutEffect
      </TileLink>
    </TileGrid>
  );
}
