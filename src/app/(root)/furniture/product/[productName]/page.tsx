// src/app/(root)/furniture/product/[productName]/page.tsx

import Furniture from "@/components/Furniture";
import NavigationTab from "@/components/NavigationTab";
import React from "react";

// interface PageProps {
//   params: {
//     productName: string;
//   };
//   searchParams?: { [key: string]: string | string[] | undefined };
// }

export default async function ProductName({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <NavigationTab
        breadcrumb={[
          { title: "Home", href: "/" },
          { title: "Furniture", href: "/furniture" },
          { title: "Chairs", href: "/furniture" },
          { title: slug, href: `/furniture/${slug}` },
        ]}
      />
      <Furniture product={slug} />
    </>
  );
}
