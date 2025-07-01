import CartOverview from "@/components/CartOverview";
import Delivery from "@/components/Delivery";
import Payment from "@/components/Payment";
import React from "react";

const Checkout = () => {
  return (
    <div className="p-5 flex flex-col">
      <h2 className="text-2xl font-semibold  mb-5">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-7 min-h-[50svh] rounded-md p-5 items-start gap-5">
        <div className="col-span-4 lg:col-span-4 flex flex-col gap-10">
          <Delivery />
          <Payment />
        </div>
        <CartOverview />
      </div>
      ;
    </div>
  );
};

export default Checkout;
