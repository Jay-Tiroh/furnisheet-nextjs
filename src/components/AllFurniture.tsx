"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Button from "./Button";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import Link from "next/link";

interface Furniture {
  name: string;
  stars: number;
  installment: string;
  price: number;
  image: string;
  category: string[];
  productName: string;
}
const AllFurniture = () => {
  const furnitures: Furniture[] = [
    {
      name: "Ergonomic And Swivel Chairs(ESC)",
      productName: "swivel-chair",
      stars: 4,
      installment: "N1,500/mo",
      price: 15000,
      image: "swivel-chair",
      category: ["Recommended"],
    },
    {
      name: "Comfy Chair, Grey with wooden arms",
      productName: "comfy-chair",
      stars: 4,
      installment: "N1,500/mo",
      price: 13000,
      image: "chair1",
      category: ["Best Selling"],
    },
    {
      name: "White Seat, Adjustable wooden legs",
      productName: "white-seat",
      stars: 4,
      installment: "N1,500/mo",
      price: 11000,
      image: "chair2",
      category: ["Best Selling"],
    },
    {
      name: "Comfy Couch, Grey left extended",
      productName: "comfy-couch",
      stars: 4,
      installment: "N1,500/mo",
      price: 25000,
      image: "chair3",
      category: ["Best Selling", "Recommended"],
    },
    {
      name: "Office Chair, Black and adjustable",
      productName: "office-chair",
      stars: 4,
      installment: "N1,500/mo",
      price: 15000,
      image: "chair4",
      category: ["Recommended"],
    },
    {
      name: "Nice Cabinet, Grey left extended",
      productName: "nice-cabinet",
      stars: 4,
      installment: "N1,500/mo",
      price: 20000,
      image: "chair5",
      category: [],
    },
    {
      name: "Some Kind Of Furniture, I guess...",
      productName: "random-furniture",
      stars: 4,
      installment: "N1,500/mo",
      price: 17000,
      image: "chair6",
      category: [],
    },
  ];

  const [selected, setSelected] = useState<string | null>("All");
  // State to hold the sorted furniture items
  const [sorted, setSorted] = useState(furnitures);

  const sortFurniture = (option: string | null) => {
    if (option === "All") return setSorted(furnitures);
    else if (option === "Best Selling" || option === "Recommended") {
      setSorted(
        furnitures.filter((item) => {
          if (option === "Recommended") {
            return item.category.includes("Recommended");
          } else if (option === "Best Selling") {
            return item.category.includes("Best Selling");
          }
        })
      );
    } else if (option === "Price: Low to High") {
      const sortedlist = [...furnitures];
      sortedlist.sort((a, b) => a.price - b.price);
      setSorted(sortedlist);
    } else {
      const sortedlist = [...furnitures];
      sortedlist.sort((a, b) => a.price - b.price);
      setSorted(sortedlist.reverse());
    }
  };

  const select = (e: React.MouseEvent<HTMLElement>) => {
    const current = e.target as HTMLElement;
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
      option.classList.remove("selected");
      if (option === current) {
        option.classList.add("selected");
        setSelected(option.textContent);
      }
    });

    sortFurniture(current.textContent);
  };

  return (
    <div>
      <div className="flex flex-col p-5 sm:p-10  gap-7 header w-full bg-light-grey">
        <h2 className=" font-semibold text-2xl">All Furniture</h2>
        <div className="ribbon flex justify-between items-center w-full">
          <span className="items text-xs font-medium  text-very-grey">
            258 items
          </span>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="mx-0 px-0  md:px-auto">
              <div className="sort-btn flex items-center gap-2 cursor-pointer">
                <span className="text-xs font-medium text-very-grey">
                  Sort by:
                </span>
                <div className="flex items-center gap-1 cursor-pointer">
                  <span className="font-semibold text-xs md:text-sm">
                    {" "}
                    {selected}
                  </span>
                  <ChevronDown className="size-4  fill-fake-black stroke-fake-black" />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-0" align="end">
              <DropdownMenuItem
                className={`${selected === "All" ? "selected" : ""} option`}
                onClick={(e) => {
                  select(e);
                }}
              >
                All
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`${
                  selected === "Recommended" ? "selected" : ""
                } option`}
                onClick={(e) => {
                  select(e);
                }}
              >
                Recommended
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`${
                  selected === "Best Selling" ? "selected" : ""
                } option`}
                onClick={(e) => {
                  select(e);
                }}
              >
                Best Selling
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`${
                  selected === "Price: High to Low" ? "selected" : ""
                } option`}
                onClick={(e) => {
                  select(e);
                }}
              >
                Price: High to Low
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`${
                  selected === "Price: Low to High" ? "selected" : ""
                } option`}
                onClick={(e) => {
                  select(e);
                }}
              >
                Price: Low to High
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 p-5 place-items-center py-10 items-stretch ">
        {sorted.map((item: Furniture, i: number) => (
          <Link href={`/furniture/product/${item.productName}`} key={i}>
            <div className="item h-full flex flex-col ">
              <AspectRatio ratio={1} className=" w-full">
                <Image
                  width={700}
                  height={700}
                  src={`/assets/images/${item.image}.png`}
                  alt={item.name}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 66vw"
                  className="hover:cursor-pointer w-full object-cover"
                />
              </AspectRatio>
              <div className="flex flex-col">
                <div className="text-sm mt-1 font-medium">{item.name}</div>
                <div className="stars">
                  <span className="text-secondary">★ ★ ★ ★ ☆</span>
                </div>
                <div className="price text-sm">
                  <span className="font-semibold subscription ">
                    {item.installment}
                  </span>
                  &nbsp; {`${item.price} to buy`}
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* make a request */}
        <div className="flex flex-col bg-light-grey items-center justify-center p-10 rounded-lg h-[17.5rem]">
          <span className="text text-center w-10/12 mx-auto">
            Can’t find what you are looking for?
          </span>
          <Button
            className={
              "btn flex items-center justify-center text-center tracking-wide  py-2 px-7 rounded-full  mt-3 lg:py-4 lg:px-10 cursor-pointer border-very-dark-blue border-2 text-very-dark-blue font-semibold hover:text-white hover:bg-very-dark-blue transition-colors duration-150 ease-in-out"
            }
            text={"Make a Request"}
          />
        </div>
      </div>
    </div>
  );
};

export default AllFurniture;
