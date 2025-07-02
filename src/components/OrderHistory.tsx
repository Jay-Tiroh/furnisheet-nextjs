"use client";
import React from "react";

interface Order {
  placed: string;
  total: number;
  id: string;
  eta?: string;
  delivered?: string;
  stage?: string;
  items: string[];
}

const OrderHistory = () => {
  const history: Order[] = [
    {
      placed: "September 10, 2024",
      total: 15000,
      id: "473542735PI",
      eta: "September 30, 2024",
      stage: "sent",
      items: ["chair1", "swivel-chair", "chair2"],
    },
    {
      placed: "July 15, 2024",
      total: 15000,
      id: "473542735PI",
      delivered: "September 30, 2024",
      items: ["chair4"],
    },
  ];
  const getProgress = (order: Order): number => {
    if (order.delivered) return 11;
    if (order.stage === "sent") return 7;
    if (order.stage === "prepared") return 4;
    return 1;
  };
  const toCurrency = (num: number) => new Intl.NumberFormat().format(num);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-10 px-2">Order History</h1>
      <div className=" space-y-10">
        {history.map((order, _) => (
          <div className="order" key={_}>
            <div className="details text-xs lg:text-sm flex justify-between bg-light-grey border-t-2 w-full py-3 px-2 font-bold">
              <div className="flex  lg:flex-row md:flex-col flex-col sm:flex-row">
                <span className="text-alt-grey">Order Placed: &nbsp;</span>
                <span className="">{order.placed}</span>
              </div>
              <div className="flex lg:flex-row md:flex-col flex-col sm:flex-row">
                <span className="text-alt-grey">Total: &nbsp;</span>
                <span className="">N{toCurrency(order.total)}</span>
              </div>
              <div className="flex lg:flex-row md:flex-col flex-col sm:flex-row">
                <span className="text-alt-grey">Order ID: &nbsp;</span>
                <span className="">{order.id}</span>
              </div>
            </div>
            <div className="flex text-sm px-2 py-5 w-full gap-5">
              {!order.delivered && (
                <span className="flex flex-col gap-1">
                  <span>Estimated Delivery:</span>
                  <span>{order.eta}</span>
                </span>
              )}
              {order.delivered && (
                <span className="flex flex-col gap-1 font-bold">
                  <span>Delivered</span>
                  <span>{order.delivered}</span>
                </span>
              )}
              <div className=" flex flex-col items-center w-full">
                <div className="flex justify-between w-full p-1 pr-3">
                  <span className="">Ordered</span>
                  <span className="">Processing</span>
                  <span className="">Sent</span>
                  <span className="">Delivered</span>
                </div>
                <div className="w-full flex flex-col justify-center h-full relative">
                  <div className="w-full h-1 rounded-full bg-alt-grey/50">
                    <div
                      className="h-1 rounded-full bg-secondary transition-all ease-in-out duration-200"
                      style={{ width: `${(getProgress(order) / 11) * 100}%` }}
                    ></div>
                  </div>
                  <div
                    className="size-3 bg-secondary rounded-full absolute -translate-x-1/2 top-1/2 -translate-y-1/2"
                    style={{ left: `${(getProgress(order) / 11) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-end p-2">
              <div className="flex  gap-3">
                {order.items.map((item, _) => (
                  <img
                    key={_}
                    src={`/assets/images/${item}.png`}
                    alt="item"
                    className="size-20"
                  />
                ))}
              </div>
              <span className="text-alt-grey font-bold text-xs underline hover:text-error/80 cursor-pointer">
                Return Item(s)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
