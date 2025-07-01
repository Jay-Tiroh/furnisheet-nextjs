"use client";
import AccountDetails from "@/components/AccountDetails";
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
    <div className="m-10">
      <div className="grid md:grid-cols-6  gap-10 justify-between ">
        <div className=" md:col-span-2 lg:col-span-1 text-sm flex flex-col h-full justify-between w-full ">
          <div className="">
            <div className="profile  font-medium py-5 border-b-2 border-mid-grey mb-5 flex items-center flex-col">
              <div className="size-40 overflow-clip rounded-sm mb-2">
                <img
                  src="/assets/images/jethro.jpg"
                  alt="profile img"
                  className="object-cover"
                />
              </div>
              <span className="name ">Jethro Uchechi</span>
            </div>
            <div className="tabs flex flex-col gap-2 font-medium">
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
                  active === "orders" ? "text-secondary" : ""
                }`}
                onClick={() => {
                  setActive("orders");
                }}
              >
                My Orders
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
                  active === "return" ? "text-secondary" : ""
                }`}
                onClick={() => {
                  setActive("return");
                }}
              >
                Return Items
              </span>
            </div>
          </div>
          <span className="hover:text-secondary cursor-pointer justify-self-end font-medium hidden md:block">
            Deactivate Account
          </span>
        </div>

        <div className="page md:col-span-4 lg:col-span-5 ">
          <div className="md:w-[85%] ml-auto">
            <AccountDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
