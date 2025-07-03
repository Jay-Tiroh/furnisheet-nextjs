import Furniture from "@/components/Furniture";
import NavigationTab from "@/components/NavigationTab";
import React from "react";

type Props = {
  params: {
    productName: string;
  };
};

const ProductName = ({ params }: Props) => {
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
};

export default ProductName;
