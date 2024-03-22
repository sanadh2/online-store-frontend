import { Box, PhoneCall } from "lucide-react";
import React from "react";
import { FaShoePrints } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className=" mt-20 md:mt-40">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-extrabold text-center">About Us</h2>
        <p className="text-neutral-500 text-sm">
          Embrace the elegance in every step.
        </p>
      </div>
      <div className="mt-16 w-full gap-10 flex flex-col md:flex-row">
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <div className="flex size-14 justify-center items-center rounded-full bg-primary">
            <FaShoePrints className="" />
          </div>
          <h4 className="font-semibold text-lg">Large Assortment</h4>
          <p className="text-center text-neutral-500">
            we offer many different types of products with fewer variations in
            each category.
          </p>
        </div>

        <div className="w-full flex justify-center items-center flex-col gap-2">
          <div className="flex size-14 justify-center items-center rounded-full bg-primary">
            <Box className="" />
          </div>
          <h4 className="font-semibold text-lg">Fast & Free Shipping</h4>
          <p className="text-center text-neutral-500">
            4-day or less delivery timer free shipping and an expedited delivery
            option.
          </p>
        </div>

        <div className="w-full flex justify-center items-center flex-col gap-2">
          <div className="flex size-14 justify-center items-center rounded-full bg-primary">
            <PhoneCall className=" w-" />
          </div>
          <h4 className="font-semibold text-lg"> 24/7 support</h4>
          <p className="text-center text-neutral-500">
            answers to any business related inquiry 24/7 and in real-time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
