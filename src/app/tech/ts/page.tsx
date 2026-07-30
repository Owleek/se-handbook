import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Template() {
  return (
    <TileGrid>
      <TileLink href='/tech/ts/basics'>basics</TileLink>
      <TileLink href='/tech/ts/fn'>Functions, Classes, Objects</TileLink>
      <TileLink href='/tech/ts/generic'>
        Generics (Objects / Functions / Classes / Conditions)
      </TileLink>
      <TileLink href='/tech/ts/mapped'>Mapped types</TileLink>
      <TileLink href='/tech/ts/narrow'>Narrowing & Type guards</TileLink>
      <TileLink href='/tech/ts/promise'>Promise & Fetch</TileLink>
      <TileLink href='/tech/ts/type'>Type, Interface, Declarations</TileLink>
      <TileLink href='/tech/ts/utility'>Utility Types</TileLink>
    </TileGrid>
  );
}
