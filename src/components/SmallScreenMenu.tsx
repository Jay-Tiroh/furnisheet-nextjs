import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SubMenu from "./SubMenu";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SmallScreenMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  const [activeSubMenu, setActiveSubMenu] = useState<string>("categories");
  const [subMenuIsOpen, setSubMenuIsOpen] = useState<boolean>(false);
  const handleSubMenuChange = (subMenu: string) => {
    setActiveSubMenu(subMenu);
    setSubMenuIsOpen(true);
  };
  return subMenuIsOpen ? (
    <SubMenu
      activeSubMenu={activeSubMenu}
      setSubMenuIsOpen={setSubMenuIsOpen}
      closeMenu={closeMenu}
    />
  ) : (
    <div className="border-b-2 shadow-md p-10 text-fake-black">
      <div className="wrapper flex flex-col gap-5">
        <Accordion
          type="single"
          collapsible
          className="bg-mid-grey px-5 py-1 rounded-md "
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer  ">
              <h2 className="font-semibold text-[1rem]">Furniture</h2>
            </AccordionTrigger>
            <AccordionContent>
              <div className="links text-xs flex flex-col space-y-2">
                <div
                  onClick={() => handleSubMenuChange("categories")}
                  className="flex items-end justify-between  font-medium hover:text-secondary group gap-1"
                >
                  <span>Categories </span>
                  <ArrowRight className="inline bg-transparent size-4 group-hover:stroke-secondary " />
                </div>
                <div
                  onClick={() => handleSubMenuChange("packages")}
                  className="flex items-end justify-between font-medium hover:text-secondary group gap-1"
                >
                  <span>Packages </span>
                  <ArrowRight className="inline bg-transparent size-4 group-hover:stroke-secondary " />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-mid-grey px-5 py-5 font-semibold rounded-md cursor-pointer">
          <Link href={"#how-it-works"} onClick={closeMenu}>
            How It Works
          </Link>
        </div>
        <div className="bg-mid-grey px-5 py-5 font-semibold rounded-md cursor-pointer">
          <Link href={""} onClick={closeMenu}>
            About Furnisheet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenMenu;
