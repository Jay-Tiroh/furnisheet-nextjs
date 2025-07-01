"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Button from "./Button";

const AccountDetails = () => {
  const locations: string[] = [
    "Abuja",
    "Lagos",
    "Port Harcourt",
    "Ibadan",
    "Kano",
  ];

  const [location, setLocation] = useState<string>("Abuja");
  const lgas: string[] = [
    "Abuja North",
    "Abuja South",
    "Abuja East",
    "Abuja West",
    "Abuja Central",
  ];

  const [lga, setLga] = useState<string>("Abuja North");
  return (
    <div className="space-y-10 w-full">
      <h2 className="font-bold text-xl">Account Details</h2>
      <div className="w-full">
        <form action="" className=" flex flex-col w-full">
          <div className="grid grid-cols-2 gap-3">
            <div className=" text-xs flex flex-col font-semibold">
              <span>
                First Name <span className="text-secondary">*</span>
              </span>
              <input
                type="text"
                name="firstname"
                className="border-1 border-mid-grey rounded-sm mt-1 bg-white p-3 outline-0 text-sm font-normal"
              />
            </div>
            <div className=" text-xs flex flex-col font-semibold">
              <span>
                Last Name <span className="text-secondary">*</span>
              </span>
              <input
                type="text"
                name="lastname"
                className="border-1 border-mid-grey rounded-sm mt-1 bg-white p-3 outline-0 text-sm font-normal"
              />
            </div>
            <div className=" col-span-2 text-xs flex flex-col font-semibold">
              <span>
                Email Address <span className="text-secondary">*</span>
              </span>
              <input
                type="email"
                name="email"
                className="border-1 border-mid-grey rounded-sm mt-1 bg-white p-3 outline-0 text-sm font-normal"
                placeholder="sampleemail@gmail.com"
              />
            </div>
            <div className=" text-xs flex flex-col font-semibold">
              <span>Phone Number</span>
              <input
                type="tel"
                name="phone"
                className="border-1 border-mid-grey rounded-sm mt-1 bg-white p-3 outline-0 text-sm font-normal"
                placeholder="sampleemail@gmail.com"
              />
            </div>
            <br />
            <div className="text-xs  flex flex-col font-semibold  ">
              <span>Location</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="">
                  <div className="selectPeriod w-full">
                    <div className="border-1 border-mid-grey rounded-sm mt-1 bg-white p-[10px] outline-0 text-sm w-full">
                      <div className=" w-full  rounded-sm flex justify-between items-center cursor-pointer font-normal">
                        {" "}
                        <span>{location}</span>
                        <ChevronDown className="fill-very-dark-blue stroke-very-dark-blue" />
                      </div>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-full p-0 dropdown"
                  align="end"
                >
                  <div className=" period-dropdown w-full flex flex-col justify-start items-center h-48 bg-white shadow-2xl rounded-b-md  ">
                    {locations.map((item, index) => (
                      <DropdownMenuItem
                        key={index}
                        className={`option w-full text-center ${
                          item === location ? "selected" : ""
                        }`}
                        onClick={() => {
                          setLocation(item);
                        }}
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="text-xs  flex flex-col font-semibold  ">
              <span>Local Government Area</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="">
                  <div className="selectPeriod w-full">
                    <div className="border-1 border-mid-grey rounded-sm mt-1 bg-white p-[10px] outline-0 text-sm w-full">
                      <div className=" w-full  rounded-sm flex justify-between items-center cursor-pointer font-normal">
                        {" "}
                        <span>{lga}</span>
                        <ChevronDown className="fill-very-dark-blue stroke-very-dark-blue" />
                      </div>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-full p-0 dropdown"
                  align="end"
                >
                  <div className=" period-dropdown w-full flex flex-col justify-start items-center h-48 bg-white shadow-2xl rounded-b-md  ">
                    {lgas.map((item, index) => (
                      <DropdownMenuItem
                        key={index}
                        className={`option w-full text-center ${
                          item === lga ? "selected" : ""
                        }`}
                        onClick={() => {
                          setLga(item);
                        }}
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className=" col-span-2 text-xs flex flex-col font-semibold">
              <span>Delivery Address</span>
              <input
                type="email"
                name="email"
                className="border-1 border-mid-grey rounded-sm mt-1 bg-white p-3 outline-0 text-sm font-normal"
                placeholder="sampleemail@gmail.com"
              />
            </div>
          </div>
          <Button
            text="Update"
            className="bg-secondary text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200 w-full cursor-pointer tracking-widest hover:bg-light-grey hover:text-secondary border-secondary border-2  hover:scale-x-[100%] scale-x-98 mt-5 text-sm max-w-[25rem]  "
          />
        </form>
        <div className="mt-10 border-t-2 py-5">
          <h2 className="font-bold text-xl mb-10">Change Password</h2>
          <form action="" className=" flex flex-col w-full">
            <div className="grid grid-cols-2 gap-3">
              <div className=" text-xs flex flex-col font-semibold">
                <span>
                  Password <span className="text-secondary">*</span>
                </span>
                <input
                  type="password"
                  name="pswd"
                  className="border-1 border-mid-grey rounded-sm mt-1 bg-white p-3 outline-0 text-sm font-normal"
                />
              </div>
              <br />
              <div className=" text-xs flex flex-col font-semibold">
                <span>
                  New Password <span className="text-secondary">*</span>
                </span>
                <input
                  type="password"
                  name="new-pswd"
                  className="border-1 border-mid-grey rounded-sm mt-1 bg-white p-3 outline-0 text-sm font-normal"
                />
              </div>
              <div className=" text-xs flex flex-col font-semibold">
                <span>
                  Repeat New Password <span className="text-secondary">*</span>
                </span>
                <input
                  type="password"
                  name="new-pswd-rpt"
                  className="border-1 border-mid-grey rounded-sm mt-1 bg-white p-3 outline-0 text-sm font-normal"
                />
              </div>
            </div>
            <Button
              text="Change Password"
              className="bg-secondary text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200 w-full cursor-pointer tracking-widest hover:bg-light-grey hover:text-secondary border-secondary border-2  hover:scale-x-[100%] scale-x-98 mt-5 text-sm max-w-[25rem] "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
