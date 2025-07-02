"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { EmblaCarouselType } from "embla-carousel";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Plan {
  amount: number;
  quantity: number;
  period: number;
  id: number;
  isSelected: boolean;
}

interface Chair {
  img: string;
  name: string;
  subscription: string;
  price: string;
}

interface Package {
  name: string;
  installment: string;
  price: number;
  image: string;
  href: string;
}

const Package = ({ product }: { product: string }) => {
  const chairItems: Chair[] = [
    {
      img: "/assets/images/swivel-chair.png",
      name: "Ergonomic And Swivel Chairs (ESC)",
      subscription: "N1,500/mo",
      price: "N12,000 to buy",
    },
    {
      img: "/assets/images/chair1.png",
      name: "Comfy Couch",
      subscription: "N1,500/mo",
      price: "N12,000 to buy",
    },
    {
      img: "/assets/images/chair2.png",
      name: "Comfy Couch",
      subscription: "N1,500/mo",
      price: "N12,000 to buy",
    },
    {
      img: "/assets/images/chair3.png",
      name: "Comfy Couch",
      subscription: "N1,500/mo",
      price: "N12,000 to buy",
    },
  ];

  const packages: Package[] = [
    {
      name: "2 - Bedroom Package",
      installment: "N1,500/mo",
      price: 15000,
      image: "2-bedroom",
      href: "2-bedroom",
    },
    {
      name: "3 - Bedroom Package",
      installment: "N1,500/mo",
      price: 13000,
      image: "3-bedroom",
      href: "3-bedroom",
    },
    {
      name: "Self - Contain Package",
      installment: "N1,500/mo",
      price: 11000,
      image: "self-con",
      href: "self-con",
    },
  ];

  const current: Package | undefined = packages.find((item) => {
    return item.href === product;
  });
  const [plans, setPlans] = useState<Plan[]>([
    { amount: 8000, quantity: 1, period: 1, id: 1, isSelected: false },
    { amount: 12000, quantity: 1, period: 1, id: 2, isSelected: true },
    { amount: 20000, quantity: 1, period: 1, id: 3, isSelected: false },
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

  const updatePlanProperty = (
    id: number,
    value: number,
    property: string
  ): void => {
    property === "period"
      ? setPlans((prevPlans) =>
          prevPlans.map((plan) =>
            plan.id === id ? { ...plan, period: value } : plan
          )
        )
      : setPlans((prevPlans) =>
          prevPlans.map((plan) =>
            plan.id === id ? { ...plan, quantity: value } : plan
          )
        );
  };

  const ellipse: string = "/assets/images/ellipse.svg?url";
  const currentEllipse: string = "/assets/images/current-ellipse.svg?url";

  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState(chairItems.length);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList().length);
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", () =>
      setSelectedIndex(emblaApi.selectedScrollSnap())
    );
    // Clean up
    return () => {
      emblaApi.off("select", () =>
        setSelectedIndex(emblaApi.selectedScrollSnap())
      );
    };
  }, [emblaApi]);

  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  return (
    <div className="">
      <h2 className="p-10 text-3xl mb-5 md:hidden font-medium capitalize">
        {current?.name} , Lorem ipsum dolor sit amet.
      </h2>
      <div className="lg:grid gap-5 md:grid-cols-7 p-10">
        <div className="md:col-span-4 lg:col-span-4">
          <img
            src={`/assets/images/${current?.image}.png`}
            alt=""
            className="w-full mb-5 lg:w-8/12 lg:m-auto "
          />

          <div className="  my-10 relative justify-center items-center flex flex-col w-full md:w-10/12 lg:w-full mx-auto">
            <h2 className=" font-semibold text-xl w-full p-5 text-center sm:text-start">
              This package contains 5 items
            </h2>

            <div className="carousel-container w-full md:hidden flex flex-col items-center">
              <Carousel
                className=" w-full"
                opts={{
                  loop: true,
                  align: "start",
                  containScroll: "trimSnaps",
                }}
                setApi={(api) => {
                  if (api) {
                    setEmblaApi(api);
                  }
                }}
              >
                <CarouselContent className=" -ml-8">
                  {" "}
                  {/* -ml-8 to offset the pl-8 on each item */}
                  {chairItems.map((chair, index) => (
                    <CarouselItem
                      key={index}
                      className=" basis-full flex justify-center pl-8 sm:basis-1/2 flex-shrink-0  "
                    >
                      <div className="item flex flex-col gap-3">
                        <Image
                          src={chair.img}
                          alt={chair.name}
                          width={280}
                          height={280}
                          className="object-cover"
                        />

                        <div className="details m-0 flex flex-col">
                          <div className="name font-medium text-sm">
                            {chair.name}
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              {/* </div> */}

              {/* Indicators */}
              <div className="indicators flex justify-center gap-5 mt-6">
                {Array.from({ length: scrollSnaps }).map((_, i) => (
                  <Image
                    key={i}
                    alt="ellipse"
                    width={8}
                    height={8}
                    src={i === selectedIndex ? currentEllipse : ellipse}
                    className="cursor-pointer transition-all duration-200"
                    onClick={() => {
                      emblaApi?.scrollTo(i);
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 place-items-center p-5 gap-4 w-full items-start ">
              {chairItems.map((chair, _) => (
                <div className="item flex flex-col gap-3 w-full" key={_}>
                  <Image
                    src={chair.img}
                    alt={chair.name}
                    width={280}
                    height={280}
                    // className="w-full"
                  />

                  <div className="details m-0 flex flex-col">
                    <div className="name font-medium text-sm">{chair.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="details col-span-3 lg:col-span-3">
          <h2 className="text-3xl  hidden md:block md:text-xl lg:text-3xl font-medium capitalize">
            {current?.name} , Lorem ipsum dolor sit amet.
          </h2>
          <div className="stars md:block hidden mb-3">
            <span className="text-secondary">★ ★ ★ ★ ☆</span>
          </div>
          <p className="description mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            fugit molestias esse autem praesentium officiis. Assumenda
            voluptatibus nobis reprehenderit culpa ab quisquam nemo. Voluptates
            fugiat odio dicta officiis perferendis laboriosam.
          </p>

          {/* Payment Plan */}
          {!isSmallScreen && (
            <div className="payment-plan space-y-5 ">
              <h2 className="text-lg font-semibold">Choose how you want it</h2>
              {plans.map((plan, index) => (
                <div className="plan" key={index} data-id={plan.id}>
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
                          className="border-mid-grey border-[1.5px] rounded-full lg:mr-10 mr-10 md:mr-3"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 12.5C0 9.18479 1.31696 6.00537 3.66117 3.66117C6.00537 1.31696 9.18479 0 12.5 0C15.8152 0 18.9946 1.31696 21.3388 3.66117C23.683 6.00537 25 9.18479 25 12.5C25 15.8152 23.683 18.9946 21.3388 21.3388C18.9946 23.683 15.8152 25 12.5 25C9.18479 25 6.00537 23.683 3.66117 21.3388C1.31696 18.9946 0 15.8152 0 12.5H0ZM11.7867 17.85L18.9833 8.85333L17.6833 7.81333L11.5467 15.4817L7.2 11.86L6.13333 13.14L11.7867 17.8517V17.85Z"
                          />
                        </svg>
                        Rent to Own for
                        <span className="font-semibold m-0 pl-1">
                          {plan.amount}/month
                        </span>
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
                          className="border-mid-grey border-[1.5px] rounded-full  mr-10 lg:mr-10 md:mr-5 fill-secondary"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 12.5C0 9.18479 1.31696 6.00537 3.66117 3.66117C6.00537 1.31696 9.18479 0 12.5 0C15.8152 0 18.9946 1.31696 21.3388 3.66117C23.683 6.00537 25 9.18479 25 12.5C25 15.8152 23.683 18.9946 21.3388 21.3388C18.9946 23.683 15.8152 25 12.5 25C9.18479 25 6.00537 23.683 3.66117 21.3388C1.31696 18.9946 0 15.8152 0 12.5H0ZM11.7867 17.85L18.9833 8.85333L17.6833 7.81333L11.5467 15.4817L7.2 11.86L6.13333 13.14L11.7867 17.8517V17.85Z"
                          />
                        </svg>
                        Rent for
                        <span className="font-semibold m-0 pl-1">
                          {plan.amount}/month
                        </span>
                      </span>{" "}
                      <div className="modifications pb-10 w-full p-5 flex justify-between gap-5">
                        <div className="quantity-div w-1/2">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild className="">
                              <div className="selectQuantity w-full">
                                <span className="text-xs">Quantity</span>
                                <div className=" w-full border border-alt-grey p-2 rounded-sm flex justify-between items-center cursor-pointer">
                                  {" "}
                                  <span>{plan.quantity}</span>
                                  <ChevronDown className="fill-very-dark-blue stroke-very-dark-blue" />
                                </div>
                              </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              className="w-full p-0 dropdown"
                              align="end"
                            >
                              <div className=" quantity-dropdown w-full flex flex-col justify-start items-center h-48 bg-white shadow-2xl rounded-b-md ">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                                  (item) => (
                                    <DropdownMenuItem
                                      key={item}
                                      className={`option w-full text-center ${
                                        item === plan.quantity ? "selected" : ""
                                      }`}
                                      onClick={() => {
                                        updatePlanProperty(
                                          plan.id,
                                          item,
                                          "quantity"
                                        );
                                      }}
                                    >
                                      {item}
                                    </DropdownMenuItem>
                                  )
                                )}
                              </div>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <div className="rental-period-div w-1/2">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild className="">
                              <div className="selectPeriod w-full">
                                <span className="text-xs">Period</span>
                                <div className=" w-full border border-alt-grey p-2 rounded-sm flex justify-between items-center cursor-pointer">
                                  {" "}
                                  <span>{plan.period}</span>
                                  <ChevronDown className="fill-very-dark-blue stroke-very-dark-blue" />
                                </div>
                              </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              className="w-full p-0 dropdown"
                              align="end"
                            >
                              <div className=" period-dropdown w-full flex flex-col justify-start items-center h-48 bg-white shadow-2xl rounded-b-md  ">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                                  (item) => (
                                    <DropdownMenuItem
                                      key={item}
                                      className={`option w-full text-center ${
                                        item === plan.period ? "selected" : ""
                                      }`}
                                      onClick={() => {
                                        updatePlanProperty(
                                          plan.id,
                                          item,
                                          "period"
                                        );
                                      }}
                                    >
                                      {item}
                                    </DropdownMenuItem>
                                  )
                                )}
                              </div>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Payment Plan */}
      <div className="payment-plan space-y-5 md:hidden">
        <h2 className="text-lg font-semibold">Choose how you want it</h2>
        {plans.map((plan, index) => (
          <div className="plan" key={index} data-id={plan.id}>
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
                    className="border-mid-grey border-[1.5px] rounded-full lg:mr-10 mr-10 md:mr-3"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 12.5C0 9.18479 1.31696 6.00537 3.66117 3.66117C6.00537 1.31696 9.18479 0 12.5 0C15.8152 0 18.9946 1.31696 21.3388 3.66117C23.683 6.00537 25 9.18479 25 12.5C25 15.8152 23.683 18.9946 21.3388 21.3388C18.9946 23.683 15.8152 25 12.5 25C9.18479 25 6.00537 23.683 3.66117 21.3388C1.31696 18.9946 0 15.8152 0 12.5H0ZM11.7867 17.85L18.9833 8.85333L17.6833 7.81333L11.5467 15.4817L7.2 11.86L6.13333 13.14L11.7867 17.8517V17.85Z"
                    />
                  </svg>
                  Rent to Own for
                  <span className="font-semibold m-0 pl-1">
                    {plan.amount}/month
                  </span>
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
                    className="border-mid-grey border-[1.5px] rounded-full  mr-10 lg:mr-10 md:mr-5 fill-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 12.5C0 9.18479 1.31696 6.00537 3.66117 3.66117C6.00537 1.31696 9.18479 0 12.5 0C15.8152 0 18.9946 1.31696 21.3388 3.66117C23.683 6.00537 25 9.18479 25 12.5C25 15.8152 23.683 18.9946 21.3388 21.3388C18.9946 23.683 15.8152 25 12.5 25C9.18479 25 6.00537 23.683 3.66117 21.3388C1.31696 18.9946 0 15.8152 0 12.5H0ZM11.7867 17.85L18.9833 8.85333L17.6833 7.81333L11.5467 15.4817L7.2 11.86L6.13333 13.14L11.7867 17.8517V17.85Z"
                    />
                  </svg>
                  Rent for
                  <span className="font-semibold m-0 pl-1">
                    {plan.amount}/month
                  </span>
                </span>{" "}
                <div className="modifications pb-10 w-full p-5 flex justify-between gap-5">
                  <div className="quantity-div w-1/2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild className="">
                        <div className="selectQuantity w-full">
                          <span className="text-xs">Quantity</span>
                          <div className=" w-full border border-alt-grey p-2 rounded-sm flex justify-between items-center cursor-pointer">
                            {" "}
                            <span>{plan.quantity}</span>
                            <ChevronDown className="fill-very-dark-blue stroke-very-dark-blue" />
                          </div>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="w-20 p-0 dropdown"
                        align="end"
                      >
                        <div className=" quantity-dropdown w-full flex flex-col justify-start items-center h-48 bg-white shadow-2xl rounded-b-md ">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                            (item, index) => (
                              <DropdownMenuItem
                                key={index}
                                className={`option w-full text-center ${
                                  item === plan.quantity ? "selected" : ""
                                }`}
                                onClick={() => {
                                  updatePlanProperty(plan.id, item, "quantity");
                                }}
                              >
                                {item}
                              </DropdownMenuItem>
                            )
                          )}
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="rental-period-div w-1/2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild className="">
                        <div className="selectPeriod w-full">
                          <span className="text-xs">Period</span>
                          <div className=" w-full border border-alt-grey p-2 rounded-sm flex justify-between items-center cursor-pointer">
                            {" "}
                            <span>{plan.period}</span>
                            <ChevronDown className="fill-very-dark-blue stroke-very-dark-blue" />
                          </div>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="w-20 p-0 dropdown"
                        align="end"
                      >
                        <div className=" period-dropdown w-full flex flex-col justify-start items-center h-48 bg-white shadow-2xl rounded-b-md  ">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                            (item, index) => (
                              <DropdownMenuItem
                                key={index}
                                className={`option w-full text-center ${
                                  item === plan.period ? "selected" : ""
                                }`}
                                onClick={() => {
                                  updatePlanProperty(plan.id, item, "period");
                                }}
                              >
                                {item}
                              </DropdownMenuItem>
                            )
                          )}
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className=" bg-light-grey mt-10 p-5 w-full relative justify-center items-center flex flex-col">
        <h2 className=" font-semibold text-xl w-full p-5 text-center sm:text-start">
          Complete the look
        </h2>
        {isSmallScreen ? (
          <div className="carousel-container w-full">
            <Carousel
              className=" w-full"
              opts={{ loop: true, align: "start", containScroll: "trimSnaps" }}
              setApi={(api) => {
                if (api) {
                  setEmblaApi(api);
                }
              }}
            >
              <CarouselContent className=" -ml-8">
                {" "}
                {/* -ml-8 to offset the pl-8 on each item */}
                {chairItems.map((chair, index) => (
                  <CarouselItem
                    key={index}
                    className=" basis-full flex justify-center pl-8 sm:basis-1/2 flex-shrink-0  "
                  >
                    <div className="item flex flex-col gap-3">
                      <Image
                        src={chair.img}
                        alt={chair.name}
                        width={280}
                        height={280}
                        className="object-cover"
                      />

                      <div className="details m-0 flex flex-col">
                        <div className="name font-medium text-sm">
                          {chair.name}
                        </div>
                        <div className="stars">
                          <span className="text-secondary">★ ★ ★ ★ ☆</span>
                        </div>
                        <div className="price flex gap-2 text-sm">
                          <span className="subscription font-semibold">
                            {chair.subscription}
                          </span>
                          <span className="price">{chair.price}</span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {/* </div> */}

            {/* Indicators */}
            <div className="indicators flex justify-center gap-5 mt-6">
              {Array.from({ length: scrollSnaps }).map((_, i) => (
                <Image
                  key={i}
                  alt="ellipse"
                  width={8}
                  height={8}
                  src={i === selectedIndex ? currentEllipse : ellipse}
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => {
                    emblaApi?.scrollTo(i);
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 lg:grid-cols-4 place-items-center p-5 gap-4 w-full items-start">
            {chairItems.map((chair, index) => (
              <div className="item flex flex-col gap-3 w-full" key={index}>
                <Image
                  src={chair.img}
                  alt={chair.name}
                  width={280}
                  height={280}
                  // className="w-full"
                />

                <div className="details m-0 flex flex-col">
                  <div className="name font-medium text-sm">{chair.name}</div>
                  <div className="stars">
                    <span className="text-secondary">★ ★ ★ ★ ☆</span>
                  </div>
                  <div className="price flex gap-2 text-sm">
                    <span className="subscription font-semibold">
                      {chair.subscription}
                    </span>
                    <span className="price">{chair.price} </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Package;
