import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Home() {
  return (
    <main className='HomePageMain'>
      <TileGrid>
        <TileLink href='/english'>English</TileLink>
        <TileLink href='/javascript'>Javascript</TileLink>
        <TileLink href='/typescript'>Typescript</TileLink>
        <TileLink href='/git'>Git</TileLink>
        <TileLink href='/nextJS'>NextJS</TileLink>
        <TileLink href='/algorithm'>Algorithm</TileLink>
        <TileLink href='/сss'>Css</TileLink>
      </TileGrid>
    </main>
  );
}
