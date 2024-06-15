import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { useSession } from "next-auth/react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";
import { User } from "./User";

const MobileNav = () => {
  const { data: session, status } = useSession();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex gap-x-6 cursor-pointer">
          {status === "authenticated" && <User />}
          <AlignJustify className="mt-2 cursor-pointer" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-12">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-xl"
            />
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
