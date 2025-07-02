"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Plus, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
const toggleSelected = () => {};

const PaymentMethods = () => {
  return (
    <div className="min-h-[80svh]">
      <h1 className="text-2xl font-bold mb-10 px-2">Payment Methods</h1>
      <div className=" max-w-[55rem] p-5">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="border-t border-t-mid-grey py-2 !shadow-none"
          >
            <AccordionTrigger className="hover:!no-underline cursor-pointer !fill-fake-black">
              <div className="flex justify-between font-semibold w-full  ">
                <span className=" text-sm">Mastercard Ending in 2025</span>
                <span className="text-xs text-alt-grey">
                  Expires: <span className="text-black">02/25</span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-between px-2 items-center">
                <div className=" flex items-center gap-2">
                  <Checkbox className=" border-mid-grey cursor-pointer" />
                  <span className="text-xs">Use for recurring payments</span>
                </div>
                <div className=" flex items-center text-muted-foreground hover:text-error gap-1  cursor-pointer w-fit text-[10px]">
                  <Trash2 className=" size-3" />
                  <span className=" font-semibold">Remove</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-t border-t-mid-grey py-2 !shadow-none"
          >
            <AccordionTrigger className="hover:!no-underline cursor-pointer !fill-fake-black">
              <div className="flex justify-between font-semibold w-full  ">
                <span className=" text-sm">Mastercard Ending in 4933</span>
                <span className="text-xs text-alt-grey">
                  Expires: <span className="text-black">02/25</span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-between px-2 items-center">
                <div className=" flex items-center gap-2">
                  <Checkbox className=" border-mid-grey cursor-pointer" />
                  <span className="text-xs">Use for recurring payments</span>
                </div>
                <div className=" flex items-center text-muted-foreground hover:text-error gap-1  cursor-pointer w-fit text-[10px]">
                  <Trash2 className=" size-3" />
                  <span className=" font-semibold">Remove</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border-t border-t-mid-grey py-2 !shadow-none"
          >
            <AccordionTrigger className="hover:!no-underline cursor-pointer !fill-fake-black">
              <div className="flex justify-between font-semibold w-full  ">
                <span className=" text-sm">Diamond Bank Account</span>
                <span className="text-xs text-alt-grey">
                  Expires: <span className="text-black">02/25</span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-between px-2 items-center">
                <div className=" flex items-center gap-2">
                  <Checkbox className=" border-mid-grey cursor-pointer" />
                  <span className="text-xs">Activate Direct Debit</span>
                </div>
                <div className=" flex items-center text-muted-foreground hover:text-error gap-1  cursor-pointer w-fit text-[10px]">
                  <Trash2 className=" size-3" />
                  <span className=" font-semibold">Remove</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex border-t border-t-mid-grey py-5 cursor-pointer hover:underline">
          <Plus className="size-5 bg-transparent " />
          <span className="text-sm font-semibold pl-2 ">
            Add New Payment Card
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
