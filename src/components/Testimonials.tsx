"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { EmblaCarouselType } from "embla-carousel";
interface Testimonial {
  content: string;
  index: number;
  star: number;
  author: string;
}

const Testimonials = () => {
  const ellipse: string = "/assets/images/ellipse.svg?url";
  const currentEllipse: string = "/assets/images/current-ellipse.svg?url";

  const testimonials: Testimonial[] = [
    {
      content:
        "Extremely easy! Browsed for furniture and it was in my new apartment within a week. first div",
      index: 1,
      star: 5,
      author: "Paul Pogba",
    },
    {
      content: "Extremely easy! Lorem Ipsum dolor sit amet some type shit.",
      index: 2,
      star: 4,
      author: "Sergio Ramos",
    },
    {
      content:
        " Browsed for furniture and it was in my new apartment within a week. type shit type shit",
      index: 3,
      star: 5,
      author: "Cristiano Ronaldo",
    },
    {
      content:
        "Extremely easy!  it was in my new apartment within a week. More Kinds of Type shit and stuff",
      index: 4,
      star: 5,
      author: "Lionel Messi",
    },
    {
      content:
        "Extremely easy!  it was in my new apartment within a week. More Kinds of Type shit and stuff",
      index: 5,
      star: 5,
      author: "Lionel Messi",
    },
    {
      content:
        "Extremely easy!  it was in my new apartment within a week. More Kinds of Type shit and stuff",
      index: 6,
      star: 5,
      author: "Lionel Messi",
    },
    {
      content:
        "Extremely easy!  it was in my new apartment within a week. More Kinds of Type shit and stuff",
      index: 7,
      star: 5,
      author: "Lionel Messi",
    },
  ];

  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState(testimonials.length);

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

  return (
    <div className="bg-light-grey p-5 w-full space-y-10">
      <h2 className="text-center text-2xl">What our Customers have to say?</h2>
      <div className="wrapper flex flex-col justify-center w-full items-center overflow-clip md:overflow-visible">
        {/* larger screens */}

        <Carousel
          className=" md:max-w-9/10 xl:max-w-9/12"
          opts={{ loop: true }}
          setApi={(api) => {
            if (api) {
              setEmblaApi(api);
            }
          }}
        >
          <CarouselContent className="-ml-2">
            {Array.from(testimonials).map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1  md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2 flex justify-center-safe items-center">
                  <Card className="card">
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <div className="stars flex mb-3">
                        {[...Array(item.star)].map((_, i) => (
                          <span className="star" key={i}>
                            <svg
                              width="20"
                              height="19"
                              viewBox="0 0 20 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                                fill="#FC8510"
                              />
                            </svg>
                          </span>
                        ))}
                      </div>
                      <div className="card-content flex flex-col justify-center space-y-2 w-10/12 text-center">
                        <p>{item.content}</p>
                        <span className="author m-auto font-semibold">
                          &bull; &nbsp; {item.author}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="cursor-pointer hover:border-secondary hover:text-secondary border-very-dark-blue text-very-dark-blue " />
          <CarouselNext className="cursor-pointer hover:border-secondary hover:text-secondary border-very-dark-blue text-very-dark-blue " />
        </Carousel>
        {/* </div> */}

        {/* Indicators */}
        <div className="indicators flex justify-center gap-5 mt-6">
          {Array.from({ length: scrollSnaps }).map((_, i) => (
            <Image
              key={i}
              alt="ellipse"
              width={10}
              height={10}
              src={i === selectedIndex ? currentEllipse : ellipse}
              className="cursor-pointer transition-all duration-200"
              onClick={() => {
                emblaApi?.scrollTo(i);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
