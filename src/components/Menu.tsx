"use client";

import React from "react";
import SmallScreenMenu from "./SmallScreenMenu";
import LargeScreenMenu from "./LargeScreenMenu";
import useMediaQuery from "@/hooks/useMediaQuery";
// import the hook

const Menu = ({ closeMenu }: { closeMenu: () => void }) => {
  // Check if screen width is less than 768px (mobile)
  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  // Render SmallScreenMenu if mobile, else LargeScreenMenu
  return isSmallScreen ? (
    <SmallScreenMenu closeMenu={closeMenu} />
  ) : (
    <LargeScreenMenu closeMenu={closeMenu} />
  );
};

export default Menu;
