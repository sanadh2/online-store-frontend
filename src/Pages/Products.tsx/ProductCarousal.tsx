import { FC } from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../Components/ui/carousel";
import { cn } from "../../lib/utils";

type ShoeType = {
  name: string;
  image: string;
  price: number;
};
type PropTypes = {
  shoes: ShoeType[];
  name: string;
  className?: string;
};

const ProductCarousal: FC<PropTypes> = ({ shoes, name, className }) => {
  return (
    <div className={cn("h-fit rounded-md p-3 bg-primary", className)}>
      <div className="flex gap-1 justify-center items-center w-fit">
        <h2 className="underline decoration-primary-divert underline-offset-4 text-base lg:text-2xl font-semibold">
          {name}
        </h2>
        <BsArrowRight
          className="text-primary-divert size-4 md:size-6"
          strokeWidth={0.5}
        />
      </div>
      <div className="mt-4 w-full mx-auto">
        <Carousel
          opts={{
            align: "start",
            startIndex: 0,
            active: true,
          }}
          className="p-0 md:p-5 w-full"
        >
          <CarouselContent className="">
            {shoes.map((shoe, index) => (
              <CarouselItem
                key={index}
                className="rounded-md basis-auto justify-center"
              >
                <div className="flex flex-col justify-center items-start">
                  <div className="size-24 md:size-32 lg:size-40">
                    <img
                      src={shoe.image}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <h4 className="text-sm md:text-lg font-medium">
                    {shoe.name}
                  </h4>
                  <p className="text-xs md:text-sm ">
                    ₹{Math.floor(shoe.price * 78)}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-0 hidden md:flex" />
          <CarouselPrevious className="left-0 hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCarousal;
