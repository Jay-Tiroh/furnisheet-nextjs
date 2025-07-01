// Description: This component renders a submenu with categories and packages.
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import SubMenuFooter from "./SubMenuFooter";

const SubMenu = ({
  activeSubMenu,
  setSubMenuIsOpen,
  closeMenu,
}: {
  activeSubMenu: string;
  setSubMenuIsOpen: (isOpen: boolean) => void;
  closeMenu: () => void;
}) => {
  return (
    <div className=" w-full bg-white ">
      {activeSubMenu === "categories"
        ? categories({ setSubMenuIsOpen, closeMenu })
        : packages({ setSubMenuIsOpen, closeMenu })}
      <SubMenuFooter closeMenu={closeMenu} />
    </div>
  );
};

export default SubMenu;

const categories = ({
  setSubMenuIsOpen,
  closeMenu,
}: {
  setSubMenuIsOpen: (isOpen: boolean) => void;
  closeMenu: () => void;
}) => {
  return (
    <div className="categories  p-10 m-auto ">
      <div className="sub-menu-heading">
        <ArrowLeft
          onClick={() => setSubMenuIsOpen(false)}
          className=" hover:text-secondary cursor-pointer"
        />
        <h2 className="font-medium text-lg ">Categories</h2>
        <Link
          href={"/furniture"}
          onClick={closeMenu}
          className="underline text-secondary"
        >
          {" "}
          See All
        </Link>
      </div>
      <div className="links text-sm flex flex-col space-y-2">
        <Link href={""} onClick={closeMenu} className="sub-link ">
          Couch
        </Link>
        <Link href={""} onClick={closeMenu} className="sub-link ">
          Sofa
        </Link>
        <Link href={""} onClick={closeMenu} className="sub-link ">
          Chair
        </Link>
        <Link href={""} onClick={closeMenu} className="sub-link ">
          Table
        </Link>
        <Link href={""} onClick={closeMenu} className="sub-link ">
          Bed
        </Link>
      </div>
    </div>
  );
};
const packages = ({
  setSubMenuIsOpen,
  closeMenu,
}: {
  setSubMenuIsOpen: (isOpen: boolean) => void;
  closeMenu: () => void;
}) => {
  return (
    <div className="packages p-10 m-auto">
      <div className="sub-menu-heading">
        <ArrowLeft
          onClick={() => setSubMenuIsOpen(false)}
          className=" hover:text-secondary cursor-pointer"
        />
        <h2 className="font-medium text-lg">Packages</h2>
        <Link
          href={"/packages"}
          onClick={closeMenu}
          className="underline text-secondary"
        >
          {" "}
          Shop All
        </Link>
      </div>
      <div className="links text-sm flex flex-col space-y-2 tracking-wider">
        <Link href={""} onClick={closeMenu} className="sub-link ">
          Self Contained Room
        </Link>
        <Link href={""} onClick={closeMenu} className="sub-link">
          Two - Bedroom Flat
        </Link>
        <Link href={""} onClick={closeMenu} className="sub-link">
          Three - Bedroom Flat
        </Link>
      </div>
    </div>
  );
};
