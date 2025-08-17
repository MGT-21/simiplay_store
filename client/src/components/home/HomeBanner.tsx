import Banner1 from "@/assets/banner-2.png";

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
    <div className="md:max-w-[800] lg:max-w-[1000px] xl:max-w-[1200px] mt-20 xl:mt-30 items-center">
      <Carousel className="" setApi={setApi}>
        <CarouselContent className="">
          <CarouselItem className="">
            <img
              src={Banner1}
              alt="Promoção"
              className=" h-auto object-cover rounded-md"
            />
          </CarouselItem>
          <CarouselItem className="">
            <img
              src={Banner1}
              alt="Promoção"
              className=" h-auto object-cover rounded-md"
            />
          </CarouselItem>
          <CarouselItem className="">
            <img
              src={Banner1}
              alt="Promoção"
              className=" h-auto object-cover rounded-md"
            />
          </CarouselItem>
        </CarouselContent>
        <div className="absolute left-1/3 right-1/3 mt-7">
          <CarouselPrevious/>
          <CarouselNext />
        </div>
      </Carousel>
      <div className="flex justify-center gap-2 mt-6 items-center">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 flex rounded-full transition-all duration-300 ${current === index + 1
                ? "bg-primary w-5 h-2 border-1"
                : "bg-white border-1"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
