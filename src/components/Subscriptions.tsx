import React from "react";
import Button from "./Button";
import { Info } from "lucide-react";

const Subscriptions = () => {
  const toCurrency = (num: number) => new Intl.NumberFormat().format(num);
  return (
    <div className=" md:min-h-[70svh]">
      <div>
        <h1 className="text-2xl font-bold mb-10 px-2">Order History</h1>
        <div className=" space-y-10">
          <div className="order">
            <div className="details text-xs lg:text-sm flex justify-between bg-light-grey border-t-2 w-full py-3 px-2 font-bold">
              <div className="flex  lg:flex-row md:flex-col flex-col sm:flex-row">
                <span className="text-alt-grey">Next Payment: &nbsp;</span>
                <span className="">September 20, 2021</span>
              </div>
              <div className="flex lg:flex-row md:flex-col flex-col sm:flex-row">
                <span className="text-alt-grey">Price: &nbsp;</span>
                <span className="">N{toCurrency(11000)}/mo</span>
              </div>
              <div className="flex lg:flex-row md:flex-col flex-col sm:flex-row">
                <span className="text-alt-grey">End Date: &nbsp;</span>
                <span className="">September 20, 2021</span>
              </div>
            </div>
            <span className="text-error text-xs px-2 font-semibold flex items-center">
              <Info className="size-4 mr-2" />
              <span>Last Debit Attempt Unsuccessful</span>
            </span>
            <div className="flex text-sm px-2 pb-5 w-full gap-5"></div>
            <div className="flex justify-between items-end p-2">
              <div className="flex  gap-3">
                <img
                  src={`/assets/images/chair2.png`}
                  alt="item"
                  className="size-36"
                />
                <div className="w-full flex flex-col justify-between">
                  <span className="capitalize font-semibold text-sm mb-2">
                    Chair 2
                  </span>
                  <div className="flex flex-col text-fake-black text-xs font-semibold">
                    <span className="">Quantity:&nbsp; &nbsp;&nbsp; 1</span>
                    <span className="">
                      Duration:&nbsp;&nbsp; &nbsp; 12 Months
                    </span>
                  </div>
                  <div className=" flex items-center text-muted-foreground hover:text-secondary gap-1 mt-5 cursor-pointer w-fit">
                    <span className="text-xs font-semibold underline">
                      Extend Subscription
                    </span>
                  </div>
                </div>
              </div>
              <Button
                text="Pay Now"
                className="bg-secondary text-white font-semibold py-2 px-2 rounded-full transition-colors duration-200 w-full cursor-pointer tracking-widest hover:bg-light-grey hover:text-secondary border-secondary border-2  hover:scale-x-[97%] scale-x-95 text-xs lg:text-sm max-w-30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
