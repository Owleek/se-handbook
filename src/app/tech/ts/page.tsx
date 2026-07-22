import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Template() {
  return (
    <TileGrid>
      {/* <TileLink href='/tech/ts/draft'>Draft</TileLink> */}
      <pre>
        {`
1 Система типов (any, unknown, never, void, null, undefined, literal types) 
2 Union и Intersection Types
3 Interfaces vs Type Alias
4 Generics
5 Type Narrowing + Type Guards
6 Функции (типизация, перегрузки, optional/rest параметры, this)
7 Utility Types (Pick, Omit, Partial, Record, ReturnType и др.)
8 keyof, typeof, Indexed Access Types
9 Mapped Types
10 Conditional Types + infer

1 - 1, 2, 3
2 - 6
3 - 5, 8
4 - 9, 10
5 - 4
6 - 7
7 - [1 - 10]
8 - [1 - 10]
9 - [1 - 10]

        `}
      </pre>
    </TileGrid>
  );
}
