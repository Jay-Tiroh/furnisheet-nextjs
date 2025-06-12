"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Menu from "./Menu";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  MapPin,
  MenuIcon,
  Search,
  SearchIcon,
  ShoppingCart,
  UserCircle2,
} from "lucide-react";

function useToggle(defaultValue?: boolean) {
  const [toggle, setToggle] = useState(() =>
    typeof defaultValue === "boolean" ? defaultValue : false
  );

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleToggleValue = (val: boolean) => {
    setToggle(val);
  };

  return {
    toggle,
    handleToggle,
    handleToggleValue,
  };
}

const NavBar = () => {
  const logo: string = "/assets/images/furnisheet-logo.png?url";
  const [lagos, setLagos] = useState(true);
  const toggleMenu = useToggle();
  const [hasShadow, setHasShadow] = useState<boolean>(false);
  const closeMenu = (): void => {
    toggleMenu.handleToggleValue(false);
  };

  // Toggle navigation menu (mobile view)

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loggedIn: boolean = true; // Replace with actual authentication logic
  return (
    <div className=" sticky top-0 z-50 bg-white w-full ">
      <div
        className={`content flex  items-center  justify-between md:px-10 text-nowrap p-5   relative ${
          hasShadow ? "shadow-md" : "border-b-mid-grey border-b"
        }`}
      >
        {/* menu-btn */}

        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <span className="menu-btn lg:hidden cursor-pointer justify-self-start">
              <MenuIcon className=" size-8 stroke-fake-black hover:stroke-secondary" />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="!w-screen">
            <Menu closeMenu={closeMenu} />
          </DropdownMenuContent>
        </DropdownMenu>

        {/* navlinks */}
        <div className="nav-links  space-x-5 items-center text-sm  hidden lg:flex w-1/3 justify-between font-semibold">
          <Link href="/all" className="nav-link">
            <span>Furniture</span>
            <span className="line bg-secondary h-4"></span>
          </Link>
          <Link href="#how-it-works" className="nav-link">
            How it works
          </Link>
          <Link href="/about" className="nav-link">
            About Furnisheet
          </Link>
        </div>
        {/* logo */}
        <Link
          href="/"
          className="logo w-1/3 md:max-w-56 flex justify-center items-center "
        >
          <Image src={logo} width={150} height={50} alt="" />
        </Link>
        {/*  */}

        {/* others */}
        <div className="others hidden md:flex justify-evenly space-x-5 items-center  md:w-1/3 md:min-w-72">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none hover:text-secondary">
              <div className=" stroke-black fill-black hover:fill-secondary hover:stroke-secondary cursor-pointer flex">
                <MapPin className="size-5 mr-2 stroke-inherit" />

                <span className="md:inline hidden">Pick Store Location</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72">
              <DropdownMenuLabel className="font-semibold text-xl">
                Choose Your Delivery Location
              </DropdownMenuLabel>

              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                className="bg-light-grey"
                value={lagos ? "lagos" : "abuja"}
                onValueChange={(value) => {
                  setLagos(value === "lagos");
                }}
              >
                <DropdownMenuRadioItem
                  value="lagos"
                  className="text-lg cursor-pointer"
                >
                  Lagos
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="abuja"
                  className="text-lg cursor-pointer"
                >
                  Abuja
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* profile menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <span className="profile">
                <UserCircle2 className="size-5 stroke-black hover:stroke-secondary" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {loggedIn && (
                  <DropdownMenuItem className="cursor-pointer">
                    <Link href={""}>Account Details</Link>
                  </DropdownMenuItem>
                )}
                {loggedIn ? (
                  <DropdownMenuItem className="cursor-pointer">
                    Log Out
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem className="cursor-pointer">
                    Log In
                  </DropdownMenuItem>
                )}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <SearchIcon className="size-5 stroke-black hover:stroke-secondary cursor-pointer" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-72">
              <DropdownMenuLabel className="font-semibold text-fake-black">
                Search Furnisheet
              </DropdownMenuLabel>
              <div className="flex border rounded-full  items-center ">
                <Input
                  type="search"
                  placeholder="What are you looking for?.."
                  className="w-full border-none outline-none focus-visible:outline-none focus-visible:ring-0  "
                />
                <Button
                  type="submit"
                  variant={"outline"}
                  className="border-none bg-transparent hover:bg-transparent focus:bg-transparent focus:ring-0 active:bg-transparent active:focus:bg-transparent cursor-pointer group "
                >
                  <Search className="size-4 group-hover:stroke-secondary  " />
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <span className="cart">
            <ShoppingCart className="size-5 stroke-black hover:stroke-secondary cursor-pointer" />
          </span>
        </div>
      </div>

      {/* collapsibles */}

      {/* Menu */}
      {/* {toggleMenu.toggle && <Menu closeMenu={closeMenu} />} */}
    </div>
  );
};

export default NavBar;
