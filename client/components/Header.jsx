"use client";
import React, { useState, useEffect } from "react";

//components
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import Nav from "./Nav";
import MobilNav from "./MobilNav";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <Logo />
        {/* Navbar */}
        <div className="flex items-center gap-x-6">
          <Nav
            containerStyles="hidden xl:flex gap-x-8 items-center"
            linkStyles="relative hover: text-primary trasition-all"
            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
          />
          <ThemeToggle />
          {/* Mobile Nav */}
          <div className="lg:hidden">
            <MobilNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
