import { FC, useEffect } from "react";
import ProductCarousal from "./ProductCarousal";

import image1 from "../../../public/shoes/1.jpg";
import image2 from "../../../public/shoes/2.jpg";
import image3 from "../../../public/shoes/3.jpg";
import image4 from "../../../public/shoes/4.jpg";
import image5 from "../../../public/shoes/5.jpg";

const shoes = [
  { image: image1, name: "Sneaker A", price: 99.99 },
  { image: image2, name: "Sneaker B", price: 129.99 },
  { image: image3, name: "Sneaker C", price: 79.99 },
  { image: image4, name: "Sneaker D", price: 149.99 },
  { image: image5, name: "Sneaker E", price: 89.99 },
  { image: image1, name: "Sneaker A", price: 99.99 },
  { image: image2, name: "Sneaker B", price: 129.99 },
  { image: image3, name: "Sneaker C", price: 79.99 },
  { image: image4, name: "Sneaker D", price: 149.99 },
  { image: image5, name: "Sneaker E", price: 89.99 },
  { image: image1, name: "Sneaker A", price: 99.99 },
  { image: image2, name: "Sneaker B", price: 129.99 },
  { image: image3, name: "Sneaker C", price: 79.99 },
  { image: image4, name: "Sneaker D", price: 149.99 },
  { image: image5, name: "Sneaker E", price: 89.99 },
  { image: image1, name: "Sneaker A", price: 99.99 },
  { image: image2, name: "Sneaker B", price: 129.99 },
  { image: image3, name: "Sneaker C", price: 79.99 },
  { image: image4, name: "Sneaker D", price: 149.99 },
  { image: image5, name: "Sneaker E", price: 89.99 },
];

const Products: FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="p-3 md:p-5 lg:p-7 xl:p-10">
      <ProductCarousal shoes={shoes} name="Featured" />
      <ProductCarousal shoes={shoes} name="Women's" className="mt-10" />
      <ProductCarousal shoes={shoes} name="Men's" className="mt-10" />
      <ProductCarousal shoes={shoes} name="Unisex" className="mt-10" />
      <ProductCarousal shoes={shoes} name="Girl's" className="mt-10" />
      <ProductCarousal shoes={shoes} name="Boy's" className="mt-10" />
    </div>
  );
};

export default Products;

//Add a featured, women's , mems etc
