
import { Nav, Slogan, SectionInformation, SectionModel } from '@/features/shared/index';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Nav />
      <Slogan />
      <SectionInformation />
      <SectionModel/>
    </main>
  );
}
