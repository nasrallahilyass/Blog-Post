'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Rss } from 'lucide-react';
import { RiArrowDownSLine } from 'react-icons/ri';
import Socials from './Socials';

const Hero = () => {
  // Download CV
  const handleDownloadCv = () => {
    const link = document.createElement('a');
    link.href = '/assets/my-cv.pdf';
    link.download = 'my-cv.pdf';
    link.click();
  };

  return (
    <section className='py-12 h-[84vh] bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto flex justify-center items-center h-full'>
        <div className='flex flex-col max-w-[600px] justify-center text-center'>
          <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
            Fullstack Web Developer
          </div>
          <h1 className='h1 mb-4'>Hello, my name is Nasrallah Ilyass</h1>
          <p className='subtitle max-w-[490px] mx-auto'>
            My current role is a full stack Web Developer. I design, code, and implement websites for a variety of clients.
          </p>
          {/* buttons */}
          <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto mb-12'>
            <Link href='/blogs'>
              <Button className='gap-x-2'>
                Check my Blog <Rss size={18} />
              </Button>
            </Link>
            <Button variant='secondary' className='gap-x-2' onClick={handleDownloadCv}>
              Download CV
              <Download size={18} />
            </Button>
          </div>
          {/* socials */}
          <Socials
            containerStyles='flex justify-center gap-x-9 mx-auto'
            iconsStyles='text-foreground text-[24px] hover:text-primary transition-all'
          />
        </div>
      </div>
      {/* icon */}
      <div className='hidden md:flex justify-center mt-8 animate-bounce'>
        <RiArrowDownSLine className='text-3xl text-primary' />
      </div>
    </section>
  );
};

export default Hero;
