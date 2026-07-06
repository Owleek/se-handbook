import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Javascript() {
  return (
    <TileGrid>
      <TileLink href='/tech/react/hooks/usestate'>
        useState <br /> useReducer
      </TileLink>
      <TileLink href='/tech/react/hooks/useeffect'>
        useEffect <br /> useLayoutEffect
      </TileLink>
      <TileLink href='/tech/react/hooks/memohooks'>
        useRef <br /> useCallback <br /> useMemo <br /> React.memo
      </TileLink>
      <TileLink href='/tech/react/hooks/ref'>
        forwardRef <br /> useImperativeHandle
      </TileLink>
      <TileLink href='/tech/react/hooks/usetransition'>
        React 18 <br /> useTransition <br /> useDefferedValue
      </TileLink>
    </TileGrid>
  );
}
