import Banner1 from "@/assets/banner-1.png";

import * as React from "react";

import { type CarouselApi } from "@/components/ui/carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomeBanner() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="max-w-[400px] mx-auto mt-26">
      <Carousel className="" setApi={setApi}>
        <CarouselContent className="">
          <CarouselItem className="">
            <div className="px-5">
              <img
                src={Banner1}
                alt="Promoção"
                className=" h-auto object-cover rounded-md"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div className="px-5">
              <img
                src={Banner1}
                alt="Promoção"
                className=" h-auto object-cover rounded-md"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div className="px-5">
              <img
                src={Banner1}
                alt="Promoção"
                className=" h-auto object-cover rounded-md"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="relative">
          <CarouselPrevious className=" left-30 top-6" />
          <CarouselNext className=" right-30 top-6" />
        </div>
      </Carousel>
      <div className="flex justify-center gap-2 mt-5 items-center">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 flex rounded-full transition-all duration-300 ${current === index + 1 ? 'bg-blue-500 w-4 h-2' : 'bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>
  );
}
