import Furniture from "@/components/Furniture";
import NavigationTab from "@/components/NavigationTab";
import Package from "@/components/Package";
import React from "react";

const ProductName = async ({ params }: { params: { productName: string } }) => {
  const { productName } = await params;
  console.log(productName);
  return (
    <>
      <NavigationTab
        breadcrumb={[
          { title: "Home", href: "/" },
          { title: "Packages", href: "/packages" },
          { title: "Chairs", href: "/packages" },
          { title: productName },
        ]}
      />
      <Package product={productName} />
    </>
  );
};

export default ProductName;
