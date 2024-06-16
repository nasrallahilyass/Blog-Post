// components
import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Reviews from '@/components/Reviews';
import Cta from '@/components/Cta';

//metadata:
export const metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      {/* <Reviews /> */}
      <Cta />
    </main>
  );
}
