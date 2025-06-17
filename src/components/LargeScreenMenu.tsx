import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const LargeScreenMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <div className="border-b-2 shadow-md p-10">
      <div className="wrapper flex gap-10 items-start">
        {/* Categories */}
        <div className="categories">
          <h2 className="font-medium text-lg mb-3">Categories</h2>
          <div className="links text-sm flex flex-col space-y-2">
            <Link href={""} onClick={closeMenu}>
              Couch
            </Link>
            <Link href={""} onClick={closeMenu}>
              Sofa
            </Link>
            <Link href={""} onClick={closeMenu}>
              Chair
            </Link>
            <Link href={""} onClick={closeMenu}>
              Side Mirror
            </Link>
            <Link href={""} onClick={closeMenu}>
              Coffee Table
            </Link>
            <Link
              href={""}
              className="flex items-end font-medium hover:text-secondary group gap-1"
            >
              <Link href={"/furniture"} onClick={closeMenu}>
                Shop all furniture{" "}
              </Link>
              <ArrowRight className="inline bg-transparent size-4 group-hover:stroke-secondary " />
            </Link>
          </div>
        </div>

        {/* Packages */}
        <div className="packages">
          <h2 className="font-medium text-lg mb-3">Packages</h2>
          <div className="links text-sm flex flex-col space-y-2">
            <Link href={""} onClick={closeMenu}>
              Self Contained Room
            </Link>
            <Link href={""} onClick={closeMenu}>
              Two - Bedroom Flat
            </Link>
            <Link href={""} onClick={closeMenu}>
              Three - Bedroom Flat
            </Link>
            <Link
              href={""}
              className="flex items-end font-medium hover:text-secondary group gap-1"
            >
              <Link href={"/packages"} onClick={closeMenu}>
                Shop all packages{" "}
              </Link>
              <ArrowRight className="inline bg-transparent size-4 group-hover:stroke-secondary " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeScreenMenu;
