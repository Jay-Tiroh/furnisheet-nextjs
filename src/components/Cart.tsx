// components/Cart.tsx or AppSidebar.tsx
"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useSidebar } from "../contexts/sidebar";
import { Trash2, X } from "lucide-react";
import Button from "./Button";
interface Subscription {
  name: string;
  img: string;
  quantity: number;
  duration: number;
  installment: number;
}

interface Purchase {
  name: string;
  img: string;
  quantity: number;
  price: number;
}

export function AppSidebar() {
  const { isOpen, close } = useSidebar();
  const subscriptions: Subscription[] = [
    {
      name: "Ergonomic And Swivel Chairs(ESC)",
      installment: 1500,
      img: "swivel-chair",
      duration: 3,
      quantity: 1,
    },
    {
      name: "another chair",
      installment: 1500,
      img: "chair1",
      duration: 2,
      quantity: 1,
    },
    {
      name: "third chair",
      installment: 1500,
      img: "chair2",
      duration: 3,
      quantity: 3,
    },
  ];

  const purchases: Purchase[] = [
    {
      name: "Ergonomic And Swivel Chairs(ESC)",
      price: 12500,
      img: "swivel-chair",
      quantity: 1,
    },
    {
      name: "Gaming Chair",
      price: 12500,
      img: "chair4",
      quantity: 2,
    },
  ];

  const toCurrency = (num: number) => new Intl.NumberFormat().format(num);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && close()}>
      <SheetContent
        side="right"
        className="  [&>button]:hidden w-auto !md:max-w-[45rem] !overflow-y-scroll sidebar p-5 !pb-15 !mb-5"
      >
        <SheetHeader className="hidden">
          <SheetTitle>items you want to buy</SheetTitle>
          <SheetDescription>This is the cart.</SheetDescription>
        </SheetHeader>
        <div className="bg-white lg:rounded-sm min-h-[30rem] m-auto md:mt-10 w-full flex flex-col items-center ">
          <div className="flex justify-between mb-5 w-full ">
            <div className="my-4 ">
              <h2 className="text-3xl font-semibold">Your Cart(3)</h2>
            </div>
            <X
              className="size-8 cursor-pointer text-fake-black hover:text-error"
              onClick={close}
            />
          </div>
          <div className="flex flex-col items-start py-5">
            <h4 className="text-sm text-muted-foreground px-4">Subscription</h4>
            <div className="flex flex-col gap-8 items-center justify-between p-4  border-b border-mid-grey">
              {subscriptions.map((item, i) => (
                <div
                  className="item w-full max-w-[35rem]  flex items-stretch space-x-2 cart-item"
                  key={i}
                >
                  <img
                    src={`/assets/images/${item.img}.png`}
                    alt="cart-item"
                    className="w-1/4 rounded-sm"
                  />
                  <div className="details flex items-stretch justify-between w-3/4 gap-1">
                    <div className="text flex flex-col justify-between  h-full w-4/6 md:pl-7 pb-2">
                      <span className="capitalize font-semibold text-sm mb-2">
                        {item.name}
                      </span>
                      <div className="flex flex-col text-fake-black text-xs font-semibold">
                        <span className="">
                          Quantity:&nbsp; &nbsp;&nbsp; {item.quantity}
                        </span>
                        <span className="">
                          Duration:&nbsp;&nbsp; &nbsp; {item.duration} Months
                        </span>
                      </div>
                      <div className=" flex items-center text-muted-foreground hover:text-error gap-1 mt-5 cursor-pointer w-fit">
                        <Trash2 className=" size-4" />
                        <span className="text-xs font-semibold">Remove</span>
                      </div>
                    </div>
                    <p className="font-semibold w-2/6 text-sm text-center md:text-start">
                      N{toCurrency(item.installment)}/mo
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-sm text-muted-foreground px-4 mt-5">
              Purchases
            </h4>
            <div className="flex flex-col gap-8 items-center justify-between p-4  border-b border-mid-grey">
              {purchases.map((item, i) => (
                <div
                  className="item w-full max-w-[35rem]  flex items-stretch space-x-2 cart-item"
                  key={i}
                >
                  <img
                    src={`/assets/images/${item.img}.png`}
                    alt="cart-item"
                    className="w-1/4 rounded-sm"
                  />
                  <div className="details flex items-stretch justify-between w-3/4 gap-1">
                    <div className="text flex flex-col justify-between  h-full w-4/6 md:pl-7 pb-2">
                      <span className="capitalize font-semibold text-sm mb-2">
                        {item.name}
                      </span>
                      <div className="flex flex-col text-fake-black text-xs font-semibold">
                        <span className="">
                          Quantity:&nbsp; &nbsp;&nbsp; {item.quantity}
                        </span>
                      </div>
                      <div className=" flex items-center text-muted-foreground hover:text-error gap-1 mt-5 cursor-pointer w-fit">
                        <Trash2 className=" size-4" />
                        <span className="text-xs font-semibold">Remove</span>
                      </div>
                    </div>
                    <p className="font-semibold w-2/6 text-sm text-center md:text-start">
                      N{toCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="total w-full max-w-[35rem]">
            <div className="flex justify-between p-5 text-lg">
              <span className=""> Subscription Total</span>
              <span className=" font-semibold tracking wider">
                N
                {toCurrency(
                  subscriptions.reduce(
                    (acc, item) => acc + item.installment * item.quantity,
                    0
                  )
                )}
                /mo
              </span>
            </div>
            <div className="flex justify-between p-5 text-lg">
              <span className=""> Purchase Total</span>
              <span className=" font-semibold tracking wider">
                N
                {toCurrency(
                  purchases.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )
                )}
              </span>
            </div>
          </div>
          <Button
            text="Proceed To Checkout"
            className="bg-secondary text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200 w-full cursor-pointer tracking-widest hover:bg-light-grey hover:text-secondary border-secondary border-2  hover:scale-x-[97%] scale-x-95 mt-5 text-sm"
            href="/checkout"
          />
          {/* Had to do this to create space */}
          <div className="h-[5svh] text-transparent">hey</div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
