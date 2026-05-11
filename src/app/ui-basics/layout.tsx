import { SectionNavigation } from '@/shared/ui/SectionNavigation';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SectionNavigation sectionLabel='UI-Basics' sectionHref='/ui-basics' />
      {children}
    </div>
  );
}
