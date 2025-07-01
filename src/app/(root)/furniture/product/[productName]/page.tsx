import Furniture from "@/components/Furniture";
import NavigationTab from "@/components/NavigationTab";
import React from "react";

const ProductName = async ({ params }: { params: { productName: string } }) => {
  const { productName } = await params;
  console.log(productName);
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
};

export default ProductName;
