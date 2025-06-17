import NavigationTab from "@/components/NavigationTab";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
interface Package {
  name: string;
  installment: string;
  price: number;
  image: string;
}
const Packages = () => {
  const packages: Package[] = [
    {
      name: "2 - Bedroom Package",
      installment: "N1,500/mo",
      price: 15000,
      image: "2-bedroom",
    },
    {
      name: "3 - Bedroom Package",

      installment: "N1,500/mo",
      price: 13000,
      image: "3-bedroom",
    },
    {
      name: "Self - Contain Package",

      installment: "N1,500/mo",
      price: 11000,
      image: "self-con",
    },
  ];
  return (
    <>
      <div>
        <NavigationTab
          breadcrumb={[{ title: "Home", href: "/" }, { title: "Packages" }]}
        />
      </div>
      <div>
        <div className="flex flex-col p-10 gap-7 header w-full bg-light-grey">
          <h2 className=" font-semibold text-2xl">All Packages</h2>
        </div>
        <div className="content grid w-full grid-cols-1  xl:grid-cols-2 gap-y-10 p-5 place-items-center py-10 items-start ">
          {packages.map((item, i) => (
            <div className="item  w-full overflow-clip" key={i}>
              <AspectRatio
                ratio={2.25}
                className="w-full overflow-clip max-w-3xl m-auto flex justify-center "
              >
                <Image
                  src={`/assets/images/${item.image}.png`}
                  alt={item.name}
                  width={630}
                  height={280}
                  loading="lazy"
                  className=" rounded-md"
                />
              </AspectRatio>
              <div className="flex justify-between items-center w-[40rem] m-auto p-2">
                <div className="">
                  <div className="text-sm mt-1 font-medium">{item.name}</div>
                  <div className="price text-sm">
                    <span className="font-semibold subscription ">
                      {item.installment}
                    </span>
                    &nbsp; {`${item.price} to buy`}
                  </div>
                </div>
                <Button
                  className="btn flex items-center justify-center text-center tracking-wide  py-2 px-7 rounded-full  mt-3 lg:py-3 lg:px-10 cursor-pointer border-very-dark-blue border text-very-dark-blue font-semibold hover:text-white hover:bg-very-dark-blue transition-colors duration-150 ease-in-out"
                  text="Shop Now"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Packages;
