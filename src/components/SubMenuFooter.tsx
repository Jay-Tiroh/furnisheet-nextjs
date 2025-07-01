"use client";
import {
  ChevronDown,
  Heart,
  MapPin,
  MessageCircleQuestion,
  Sofa,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import React, { useState } from "react";
import { useDialog } from "@/contexts/dialog-context";

const SubMenuFooter = ({ closeMenu }: { closeMenu: () => void }) => {
  const { openDialog } = useDialog();
  const [lagos, setLagos] = useState<boolean>(true);
  return (
    <div className="flex flex-col gap-5  border-t border-mid-grey mt-5 p-5">
      <h2 className="font-semibold text-alt-grey mb-3">QUICKLINKS</h2>
      <div className="flex justify-between w-full">
        <div className=" flex flex-col w-fit  ">
          <div className="p-3 border-b border-mid-grey   w-full">
            <Link
              onClick={closeMenu}
              href="#"
              className="text-sm fill-fake-black hover:fill-secondary text-alt-grey hover:text-secondary flex items-center "
            >
              <Heart className="fill-inherit inline size-4 mr-1 stroke-0 " />{" "}
              <span>Wishlist</span>
            </Link>
          </div>
          <div className="p-3 border-b border-mid-grey   w-full">
            <Link
              onClick={closeMenu}
              href="#"
              className="text-sm stroke-fake-black hover:stroke-secondary text-alt-grey hover:text-secondary flex items-center "
            >
              <MessageCircleQuestion className="stroke-inherit inline size-4 mr-1" />
              <span>Support</span>
            </Link>
          </div>
          <div className="p-3 border-b border-mid-grey   w-full">
            <Link
              onClick={closeMenu}
              href="#"
              className="text-sm stroke-fake-black hover:stroke-secondary text-alt-grey hover:text-secondary flex items-center "
            >
              <Sofa
                className="stroke-inherit inline size-4 mr-1"
                onClick={closeMenu}
              />
              <span onClick={openDialog}>Request Furniture</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center pl-8 justify-center w-1/2 ">
          <div className="flex flex-col">
            <div className=" stroke-black fill-black flex items-start md:items-center text-pretty">
              <MapPin className="md:mt-0 mt-1 size-5 mr-2 stroke-inherit" />
              <span className="text-lg">Pick Store Location</span>
            </div>
            <div className="dropdown mt-3">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none hover:text-secondary text-start">
                  <div className="flex bg-mid-grey rounded-sm min-w-36">
                    <span className="bg-mid-grey w-full p-1 pl-2 rounded-l-sm capitalize ">
                      {lagos ? "lagos" : "abuja"}
                    </span>
                    <span className=" bg-secondary hover:bg-secondary/90 p-1 w-10 rounded-sm flex cursor-pointer items-center justify-center">
                      <ChevronDown className="size-4 stroke-light-grey  " />
                    </span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-42">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMenuFooter;
