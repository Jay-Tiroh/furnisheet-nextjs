"use client";
import { useSidebar } from "@/contexts/sidebar";
import React from "react";

const MiscNav = () => {
  const { open } = useSidebar();
  return (
    <div className="flex justify-between p-5 items-center">
      <span onClick={open} className="text-sm font-semibold cursor-pointer">
        Back to Cart
      </span>
      <img src="/assets/images/furnisheet-logo.png" alt="" className="w-28" />
      <div className="empty-space"></div>
    </div>
  );
};

export default MiscNav;
