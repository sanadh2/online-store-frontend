import React from "react";
import image1 from "../../../public/shoes/1.jpg";
import image2 from "../../../public/shoes/2.jpg";
import image3 from "../../../public/shoes/3.jpg";
import image4 from "../../../public/shoes/4.jpg";
import image5 from "../../../public/shoes/5.jpg";
import { ArrowRight } from "lucide-react";

const shoes = [
  { image: image1, name: "Sneaker A", price: 99.99 },
  { image: image2, name: "Sneaker B", price: 129.99 },
  { image: image3, name: "Sneaker C", price: 79.99 },
  { image: image4, name: "Sneaker D", price: 149.99 },
  { image: image5, name: "Sneaker E", price: 89.99 },
];

const BestProducts: React.FC = () => {
  return (
    <div className="mt-10 px-3 font-Poppins md:px-7 w-full  gap-3 grid grid-flow-col overflow-x-scroll overscroll-x-contain">
      <div className="w-60 rounded-md h-full  p-1   ">
        <h2 className="font-bold  mt-3 text-left text-3xl ">
          Best Selling Shoes
        </h2>
        <p className="mt-3 text-neutral-500">
          Step into a healthier lifestyle with every stride, by indulging in
          your favorite shoes - the foundation of comfort, style, and
          confidence.
        </p>
        <button className="rounded-md px-4 py-2 mt-3 bg-primary hover:bg-primary-hover focus:ring-1 flex gap-1 text-base font-medium">
          See more <ArrowRight strokeWidth={1} />
        </button>
      </div>
      {shoes.map((shoe) => (
        <div
          className="w-60 h-full  aspect-[12/16] rounded-md"
          key={shoe.image}
        >
          <img
            className="h-full w-full object-cover rounded-md"
            src={shoe.image}
          />
          <div className="py-1 px-2">
            <h3 className="font-medium text-neutral-700">{shoe.name}</h3>
            <p className="text-sm text-neutral-500">₹{shoe.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestProducts;
