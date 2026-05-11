import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Home() {
  return (
    <main className='HomePageMain'>
      <TileGrid>
        <TileLink href='/common'>Common</TileLink>
        <TileLink href='/network'>Network</TileLink>
        <TileLink href='/english'>English</TileLink>
        <TileLink href='/ui-basics'>UI Basics</TileLink>
        <TileLink href='/tech'>Tech</TileLink>
      </TileGrid>
    </main>
  );
}
