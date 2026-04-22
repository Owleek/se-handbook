import Link from 'next/link';
import './SectionNavigation.css';

type SectionNavigationProps = {
  sectionLabel: string;
  sectionHref: string;
};

export function SectionNavigation({
  sectionLabel,
  sectionHref,
}: Readonly<SectionNavigationProps>) {
  return (
    <nav aria-label='Section navigation' className='SectionNavigation'>
      <Link href='/'>Home</Link>
      <span>/</span>
      <Link href={sectionHref}>{sectionLabel}</Link>
    </nav>
  );
}
