import NavigationTab from "@/components/NavigationTab";
import Package from "@/components/Package";
import React from "react";

const ProductName = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return (
    <>
      <NavigationTab
        breadcrumb={[
          { title: "Home", href: "/" },
          { title: "Packages", href: "/packages" },
          { title: "Chairs", href: "/packages" },
          { title: slug, href: `/packages/${slug}` },
        ]}
      />
      <Package product={slug} />
    </>
  );
};

export default ProductName;
