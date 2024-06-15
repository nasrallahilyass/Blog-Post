"use client";
import { FaUserAlt } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { useRouter } from "next/navigation";

import Link from 'next/link';
import { signOut, useSession } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const User = () => {
  const { data, status } = useSession();
  const router = useRouter();

  const handleGoogleLogout = (e) => {
    e.preventDefault();
    signOut("google");
    router.push("/blogs");

  };

  const firstName = status === 'authenticated' ? data.user.name.split(' ')[0] : '';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-x-2 cursor-pointer p-2 rounded-full hover:bg-gray-200 transition-colors">
          <FaUserAlt size={20} />
          {status === 'authenticated' && <span>Hi 👋 {firstName}</span>}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white shadow-lg rounded-lg p-2">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-semibold text-gray-700">Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="my-2" />
          <DropdownMenuItem asChild>
            <Link href="/profile" className="flex items-center gap-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <FaUserAlt size={20}/>
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/new-post" className="flex items-center gap-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <IoIosCreate size={23}/>
              <span>Create post</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="my-2" />
          <DropdownMenuItem onClick={handleGoogleLogout} className="flex items-center gap-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
