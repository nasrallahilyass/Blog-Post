import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import { signOut, useSession } from "next-auth/react";

import Nav from './Nav';
import Logo from './Logo';
import Socials from './Socials';

const MobileNav = () => {
  const {data, status} = useSession();

  const handleGoogleLogout = (e) => {
    e.preventDefault();
    signOut('google');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
      <div className='flex gap-x-6 cursor-pointer'>
        {
          status === 'authenticated' && (
          <div className="flex gap-x-2">
            <a onClick={handleGoogleLogout} className='font-bold'>Log out</a> 
            <a href="/new-post" className='font-medium'>Create Post</a>
          </div>
          
          )
        }
        <AlignJustify className='cursor-pointer' />
      </div>
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-12'>
            <Logo />
            <Nav
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-xl'
            />
          </div>
          <Socials containerStyles='flex gap-x-4' iconsStyles='text-2xl' />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
