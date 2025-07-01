"use client";
import Button from "@/components/Button";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface Plan {
  amount: number;
  location: string;
  id: number;
  isSelected: boolean;
  type: string; // Optional property for type
}

const create = () => {
  const locations: string[] = [
    "Abuja",
    "Lagos",
    "Port Harcourt",
    "Ibadan",
    "Kano",
  ];

  const [location, setLocation] = useState<string>("Abuja");
  return (
    <div>
      {" "}
      <div className="wrapper py-10 md:p-10">
        <h2 className="text-xl font-bold mb-10 px-10 md:px-0">
          My Furnisheet Account
        </h2>
        <div className="grid md:grid-cols-2 gap-2 md:gap-10">
          <div className="signin md:max-w-[25rem] border-b border-dark-grey py-10 px-10 md:px-0 md:border-0">
            <h3 className="text-lg font-semibold">Already a Member?</h3>
            <Button
              text="Log In"
              className=" font-semibold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out w-full cursor-pointer  hover:bg-fake-black border-fake-black border    mt-5 text-sm hover:text-white"
              href="/login"
            />
          </div>
          <div className="form md:max-w-[35rem] py-5 px-10 md:px-0">
            <form action="" className="space-y-5">
              <h3 className="text-lg font-semibold">New Member?</h3>
              <div className=" text-xs flex flex-col font-semibold">
                <span>
                  Email Address <span className="text-secondary">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  className="border-1 border-mid-grey rounded-sm mt-1 bg-white p-3 outline-0 text-sm font-normal"
                  placeholder="sampleemail@gmail.com"
                />
              </div>{" "}
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
              <div className=" text-xs flex flex-col font-semibold ">
                <span>
                  Password <span className="text-secondary">*</span>
                </span>
                <input
                  type="password"
                  name="password"
                  className="border-1 border-mid-grey rounded-sm mt-1 bg-white p-3 outline-0 text-sm font-normal"
                  placeholder="Must not be less than 8 digits..."
                  pattern=".{8,}"
                  title="Must be at least 8 characters long"
                />
              </div>
              <div className=" text-xs flex flex-col font-semibold ">
                <span>
                  Repeat Password <span className="text-secondary">*</span>
                </span>
                <input
                  type="password"
                  name="repeat-password"
                  className="border-1 border-mid-grey rounded-sm mt-1 bg-white p-3 outline-0 text-sm font-normal"
                  placeholder="Must not be less than 8 digits..."
                  pattern=".{8,}"
                  title="Must be at least 8 characters long"
                />
              </div>
              <div className=" text-xs flex flex-col font-semibold ">
                <span>
                  Phone Number<span className="text-secondary">*</span>
                </span>
                <input
                  type="tel"
                  name="phone"
                  className="border-1 border-mid-grey rounded-sm mt-1 bg-white p-3 outline-0 text-sm font-normal"
                  placeholder="Must not be less than 8 digits..."
                  pattern=".{8,}"
                  title="Must be at least 8 characters long"
                />
              </div>
              <div className="text-xs  flex flex-col font-semibold  ">
                <span>
                  Location <span className="text-secondary">*</span>
                </span>
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
              <div className=" text-xs flex flex-col font-semibold ">
                <span>
                  Delivery Address<span className="text-secondary">*</span>
                </span>
                <input
                  type="text"
                  name="address"
                  className="border-1 border-mid-grey rounded-sm mt-1 bg-white p-3 outline-0 text-sm font-normal"
                />
              </div>
              <Button
                text="Create Account"
                className="bg-secondary text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200 w-full cursor-pointer tracking-widest hover:bg-light-grey hover:text-secondary border-secondary border-2  hover:scale-x-[97%] scale-x-95 mt-5 text-sm"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="auth-options border-t border-dark-grey mb-10 relative p-10 ">
        <div className="bg-white p-3 rounded-full w-1/3 absolute left-[33.3%] -top-6 text-sm text-center">
          OR connect with
        </div>
        <div className="flex w-full justify-center gap-3">
          <div className="flex rounded-full border h-12 items-center gap-1 w-48 justify-center cursor-pointer hover:text-blue-600  hover:border-blue-600 transition-all duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
              className="size-6"
            >
              <path
                fill="#3F51B5"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              ></path>
              <path
                fill="#FFF"
                d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
              ></path>
            </svg>
            <span>Facebook</span>
          </div>
          <div className="flex rounded-full border h-12 items-center gap-1 w-48 justify-center cursor-pointer hover:text-yellow-500 hover:border-yellow-500 transition-all duration-200 ease-in-out">
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            <span>Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default create;
