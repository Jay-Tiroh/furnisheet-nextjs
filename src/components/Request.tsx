"use client";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Button from "./Button";
import { useDialog } from "@/contexts/dialog-context";
const Request = () => {
  const { isOpen, closeDialog } = useDialog();
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeDialog()}>
      <form>
        <DialogContent className=" sm:max-w-[425px] p-12 [&>button]:scale-150 [&>button]:pr-3 [&>button]:hover:text-error [&>button]:focus:!ring-0 [&>button]:focus:!outline-none [&>button]:focus:!border-0 [&>button]:!ring-0  [&>button]:!border-0  [&>button]:!outline-0">
          <DialogHeader>
            <DialogTitle className="text-2xl w-full text-start">
              Furniture Request
            </DialogTitle>
            <DialogDescription className="hidden">
              Fill out the form below to request a piece of furniture.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <Label htmlFor="email" className="text-xs text-muted-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                defaultValue="pedro.duarte@example.com"
                className="!ring-0 !border-1 border-alt-grey !shadow-none !bg-transparent !placeholder:text-muted-foreground !text-sm !font-normal !text-fake-black !rounded-xs !p-5"
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="name" className="text-xs text-muted-foreground">
                Name of Furniture
              </Label>
              <Input
                id="name"
                name="name"
                defaultValue="Chair"
                className="!ring-0 !border-1 border-alt-grey !shadow-none !bg-transparent !placeholder:text-muted-foreground !text-sm !font-normal !text-fake-black !rounded-xs !p-5"
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="desc" className="text-xs text-muted-foreground">
                Short Description
              </Label>
              <Input
                id="desc"
                name="desc"
                defaultValue="The chair has big arms and legs. It can be convert..."
                className="!ring-0 !border-1 border-alt-grey !shadow-none !bg-transparent !placeholder:text-muted-foreground !text-sm !font-normal !text-fake-black !rounded-xs !p-5"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                text="Submit Request"
                className="bg-secondary text-white font-semibold py-3 px-4 rounded-full  w-full transition-all ease-in-out  duration-300 cursor-pointer hover:bg-transparent hover:text-secondary border-secondary border-2 hover:scale-x-[91%] scale-90"
              />
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default Request;
