import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

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
    <>
      {activeSubMenu === "categories"
        ? categories({ setSubMenuIsOpen, closeMenu })
        : packages({ setSubMenuIsOpen, closeMenu })}
    </>
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
    <div className="categories  p-5 m-auto max-w-[95%]">
      <div className="sub-menu-heading">
        <ArrowLeft
          onClick={() => setSubMenuIsOpen(false)}
          className=" hover:text-secondary cursor-pointer"
        />
        <h2 className="font-medium text-lg ">Categories</h2>
        <Link
          href={""}
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
    <div className="packages p-5 m-auto max-w-[95%]">
      <div className="sub-menu-heading">
        <ArrowLeft
          onClick={() => setSubMenuIsOpen(false)}
          className=" hover:text-secondary cursor-pointer"
        />
        <h2 className="font-medium text-lg">Packages</h2>
        <Link
          href={""}
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
