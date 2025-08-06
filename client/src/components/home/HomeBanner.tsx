import Banner1 from "@/assets/banner-1.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomeBanner() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Carousel className="">
        <CarouselContent className="">
          <CarouselItem className="">
            <img
              src={Banner1}
              alt="Promoção"
              className=" h-auto object-cover"
            />
          </CarouselItem>
          <CarouselItem className="">
            <img
              src={Banner1}
              alt="Promoção"
              className=" h-auto object-cover"
            />
          </CarouselItem>
          <CarouselItem className="">
            <img
              src={Banner1}
              alt="Promoção"
              className=" h-auto object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
