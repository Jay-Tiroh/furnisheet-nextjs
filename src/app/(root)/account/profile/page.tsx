"use client";
import AccountDetails from "@/components/AccountDetails";
import OrderHistory from "@/components/OrderHistory";
import PaymentMethods from "@/components/PaymentMethods";
import Subscriptions from "@/components/Subscriptions";
import React, { useState } from "react";
interface Profile {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  location: string;
  lga: string;
  address: string;
}

const profile = () => {
  const [active, setActive] = useState<string>("details");

  return (
    <div className=" p-5 md:p-10 w-full">
      <div className="grid md:grid-cols-6  gap-10  ">
        <div className=" md:col-span-2 lg:col-span-1 text-sm flex flex-col h-full justify-between w-full max-h-[70svh] ">
          <div className="">
            <div className="profile  font-medium py-5 border-b-2 border-mid-grey mb-5 flex items-center md:items-start flex-col">
              <div className="size-40 overflow-clip rounded-sm mb-2">
                <img
                  src="/assets/images/jethro.jpg"
                  alt="profile img"
                  className="object-cover"
                />
              </div>
              <span className="name ">Jethro Uchechi</span>
            </div>
            <div className="tabs flex flex-col gap-2 font-medium ">
              <span
                className={`hover:text-secondary cursor-pointer ${
                  active === "details" ? "text-secondary" : ""
                }`}
                onClick={() => {
                  setActive("details");
                }}
              >
                Account Details
              </span>
              <span
                className={`hover:text-secondary cursor-pointer ${
                  active === "history" ? "text-secondary" : ""
                }`}
                onClick={() => {
                  setActive("history");
                }}
              >
                Order History
              </span>
              <span
                className={`hover:text-secondary cursor-pointer ${
                  active === "payment" ? "text-secondary" : ""
                }`}
                onClick={() => {
                  setActive("payment");
                }}
              >
                Payment
              </span>
              <span
                className={`hover:text-secondary cursor-pointer ${
                  active === "subscriptions" ? "text-secondary" : ""
                }`}
                onClick={() => {
                  setActive("subscriptions");
                }}
              >
                Subscriptions
              </span>
            </div>
          </div>
          <span className="hover:text-secondary cursor-pointer justify-self-end font-medium hidden md:block">
            Deactivate Account
          </span>
        </div>

        <div className="page md:col-span-4 lg:col-span-5 w-full">
          <div className="lg:w-[85%] md:ml-auto w-full">
            {active === "details" && <AccountDetails />}
            {active === "history" && <OrderHistory />}
            {active === "payment" && <PaymentMethods />}
            {active === "subscriptions" && <Subscriptions />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
