"use client";
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
const Delivery = () => {
  const [plans, setPlans] = useState<Plan[]>([
    {
      type: "Home Delivery",
      amount: 8000,
      location: "Abuja",
      id: 1,
      isSelected: false,
    },
    {
      type: "Pickup Station",
      amount: 12000,
      location: "Lagos",
      id: 2,
      isSelected: true,
    },
  ]);

  const handlePlanSelection = (id: number): void => {
    setPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.id === id
          ? { ...plan, isSelected: true }
          : { ...plan, isSelected: false }
      )
    );
  };

  const updatePlanProperty = (id: number, value: string): void => {
    setPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.id === id ? { ...plan, location: value } : plan
      )
    );
    console.log(id, plans);
  };

  const locations: string[] = [
    "Abuja",
    "Lagos",
    "Port Harcourt",
    "Ibadan",
    "Kano",
  ];

  return (
    <div className="bg-white p-5 space-y-5 rounded-md">
      <div className=" flex flex-col gap-1">
        <h2 className="text-lg font-semibold">Delivery</h2>
        <p className="text-sm text-muted-foreground">
          Please select a delivery method
        </p>
      </div>
      {plans.map((plan) => (
        <div className="plan" key={plan.id} data-id={plan.id}>
          {!plan.isSelected && (
            <div
              className="plan-div"
              onClick={() => {
                handlePlanSelection(plan.id);
              }}
            >
              <span className=" plan-span">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="border-mid-grey border-[1.5px] rounded-full lg:mr-5 mr-5 md:mr-1"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 12.5C0 9.18479 1.31696 6.00537 3.66117 3.66117C6.00537 1.31696 9.18479 0 12.5 0C15.8152 0 18.9946 1.31696 21.3388 3.66117C23.683 6.00537 25 9.18479 25 12.5C25 15.8152 23.683 18.9946 21.3388 21.3388C18.9946 23.683 15.8152 25 12.5 25C9.18479 25 6.00537 23.683 3.66117 21.3388C1.31696 18.9946 0 15.8152 0 12.5H0ZM11.7867 17.85L18.9833 8.85333L17.6833 7.81333L11.5467 15.4817L7.2 11.86L6.13333 13.14L11.7867 17.8517V17.85Z"
                  />
                </svg>
                {plan.type}
              </span>{" "}
            </div>
          )}
          {plan.isSelected && (
            <div className="selected-plan-div">
              <span className="selected-plan-span">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="border-mid-grey border-[1.5px] rounded-full  lg:mr-5 mr-5 md:mr-1 fill-secondary"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 12.5C0 9.18479 1.31696 6.00537 3.66117 3.66117C6.00537 1.31696 9.18479 0 12.5 0C15.8152 0 18.9946 1.31696 21.3388 3.66117C23.683 6.00537 25 9.18479 25 12.5C25 15.8152 23.683 18.9946 21.3388 21.3388C18.9946 23.683 15.8152 25 12.5 25C9.18479 25 6.00537 23.683 3.66117 21.3388C1.31696 18.9946 0 15.8152 0 12.5H0ZM11.7867 17.85L18.9833 8.85333L17.6833 7.81333L11.5467 15.4817L7.2 11.86L6.13333 13.14L11.7867 17.8517V17.85Z"
                  />
                </svg>
                {plan.type}
              </span>{" "}
              <div className="modifications pb-10 w-full p-5">
                <div className="grid grid-cols-2 md:w-[90%] gap-3 ">
                  <div className="firstname text-xs flex flex-col font-semibold">
                    <span>
                      First Name <span className="text-secondary">*</span>
                    </span>
                    <input
                      type="text"
                      name="firstname"
                      className="border-1 border-mid-grey rounded-xs mt-1 bg-white p-3 outline-0 text-sm"
                    />
                  </div>
                  <div className="firstname text-xs flex flex-col font-semibold">
                    <span>
                      Last Name <span className="text-secondary">*</span>
                    </span>
                    <input
                      type="text"
                      name="lastname"
                      className="border-1 border-mid-grey rounded-xs mt-1 bg-white p-3 outline-0 text-sm"
                    />
                  </div>
                  <div className="firstname text-xs flex flex-col font-semibold">
                    <span>
                      Phone Number <span className="text-secondary">*</span>
                    </span>
                    <input
                      type="text"
                      name="phone"
                      className="border-1 border-mid-grey rounded-xs mt-1 bg-white p-3 outline-0 text-sm"
                    />
                  </div>

                  <div className="text-xs  flex flex-col font-semibold ">
                    <span>
                      Location <span className="text-secondary">*</span>
                    </span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild className="">
                        <div className="selectPeriod w-full">
                          <div className="border-1 border-mid-grey rounded-xs mt-1 bg-white p-[10px] outline-0 text-sm w-full">
                            <div className=" w-full  rounded-sm flex justify-between items-center cursor-pointer">
                              {" "}
                              <span>{plan.location}</span>
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
                                item === plan.location ? "selected" : ""
                              }`}
                              onClick={() => {
                                updatePlanProperty(plan.id, item);
                                console.log(
                                  `Selected location: ${item}`,
                                  plan.id
                                );
                              }}
                            >
                              {item}
                            </DropdownMenuItem>
                          ))}
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="col-span-2 text-xs flex flex-col font-semibold">
                    <span>
                      Delivery Address <span className="text-secondary">*</span>
                    </span>
                    <input
                      type="text"
                      name="phone"
                      className="border-1 border-mid-grey rounded-xs mt-1 bg-white p-3 outline-0 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Delivery;
