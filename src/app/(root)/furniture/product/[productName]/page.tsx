// src/app/(root)/furniture/product/[productName]/page.tsx

import Furniture from "@/components/Furniture";
import NavigationTab from "@/components/NavigationTab";
import React from "react";

interface PageProps {
  params: {
    productName: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ProductName({ params }: PageProps) {
  const { productName } = params;

  return (
    <>
      <NavigationTab
        breadcrumb={[
          { title: "Home", href: "/" },
          { title: "Furniture", href: "/furniture" },
          { title: "Chairs", href: "/furniture" },
          { title: productName },
        ]}
      />
      <Furniture product={productName} />
    </>
  );
}
