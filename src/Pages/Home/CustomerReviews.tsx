import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../../Components/ui/carousel";

import user1 from "../../../public/faces/1.jpg";
import user3 from "../../../public/faces/3.jpg";
import user2 from "../../../public/faces/2.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import { StarFilledIcon } from "@radix-ui/react-icons";

const reviews = [
  {
    id: 1,
    name: "Nivedita Martin",
    image: user1,
    review:
      "At Shoetopia, you'll find an impressive array of stylish footwear accompanied by attentive service. The inviting ambiance and commitment to quality make it a go-to destination for shoe lovers seeking both comfort and elegance",
    rating: 4.7,
    job: "Software Engineer",
  },
  {
    id: 2,
    name: "Immanual Thomas",
    image: user2,
    review:
      "Shoetopia offers a diverse selection of high-quality shoes in a spacious and inviting atmosphere. The knowledgeable staff provide excellent service, ensuring every customer finds their perfect fit. With attention to detail and a commitment to quality, Shoetopia is a top destination for shoe enthusiasts.",
    rating: 4.5,
    job: "Youtuber",
  },

  {
    id: 3,
    name: "Urvasi Nambiar",
    job: "Classical dancer",
    image: user3,
    review:
      "Shoetopia's curated collection and attentive staff create an exceptional shopping experience. With a focus on quality and style, it's the perfect destination for shoe aficionados looking for their next favorite pair.",
    rating: 4.1,
  },
];

const CustomerReviews: React.FC = () => {
  return (
    <div className="mt-40">
      <h2 className=" text-3xl xl:w-[30rem] font-extrabold">
        What does the customers say about SHOETOPIA?
      </h2>

      <div className="grid grid-flow-row md:grid-flow-col md:overflow-x-scroll scroll-smooth gap-4 md:gap-8 xl:gap-12 mt-20">
        {reviews.map((review) => (
          <Review
            key={review.id}
            image={review.image}
            job={review.job}
            name={review.name}
            review={review.review}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
};

const Review: React.FC<{
  name: string;
  image: string;
  rating: number;
  review: string;
  job: string;
}> = ({ name, image, rating, review, job }) => {
  return (
    <div className="xl:w-[50rem] h-fit rounded-md bg-primary p-3 md:p-5 lg:p-7">
      <p className="h-24 overflow-hidden text-ellipsis">{review}</p>
      <div className="flex w-full items-center justify-center">
        <div className="mt-4 size-20 md:size-32 aspect-square relative flex gap-4">
          <FaQuoteLeft className="absolute -left-1 -top-1" />
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        <div className="w-full flex justify-between px-3 md:px-5 lg:px-7 items-center  h-full">
          <div className="">
            <h4 className="font-medium text-lg">{name}</h4>
            <p className="font-light text-sm">{job}</p>
          </div>
          <div className="flex justify-center items-center font-medium">
            <StarFilledIcon />
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
