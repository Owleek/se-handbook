import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/tech/react/hooks/usestate'>
        useState & useReducer
      </TileLink>
      <TileLink href='/tech/react/hooks/useeffect'>
        useEffect & useLayoutEffect
      </TileLink>
      <TileLink href='/tech/react/hooks/memohooks'>
        useRef, useCallback, useMemo, HOC_React.memo
      </TileLink>
      <TileLink href='/tech/react/hooks/ref'>
        forwardRef & useImperativeHandle
      </TileLink>
      <TileLink href='/tech/react/hooks/usetransition'>
        R18 - useTransition & useDefferedValue
      </TileLink>
    </TileGrid>
  );
}
