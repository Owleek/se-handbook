import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Home() {
  return (
    <main className='HomePageMain'>
      <TileGrid>
        <TileLink href='/common'>Common</TileLink>
        <TileLink href='/network'>Network</TileLink>
        <TileLink href='/ui-basics'>UI Basics</TileLink>
        <TileLink href='/tech'>Tech</TileLink>
        <TileLink href='/en' type='ghost'>
          En
        </TileLink>
      </TileGrid>
    </main>
  );
}
