import React from "react";
import Boots from "../../../public/shoes/Boots.jpg";
import Casual from "../../../public/shoes/casual.jpg";
import HighHeel from "../../../public/shoes/high-heels.jpg";
import { Button } from "../../Components/ui/button";
import { ArrowRight } from "lucide-react";

const Categories: React.FC = () => {
  return (
    <div className="mt-20 md:mt-40">
      <h2 className="text-3xl font-extrabold text-center">Categories</h2>
      <p className="text-neutral-500 text-sm text-center">
        Find what you are looking for.
      </p>

      <div className="h-full bg-primary xl:block hidden mt-40 rounded-xl py-3 px-10">
        <div className="relative h-[28rem]  ">
          <div className="max-w-72 w-full max-h-96 h-full z-20 absolute left-3 -top-20  rounded-md">
            <img
              src={Boots}
              alt=""
              className="rounded-md h-full w-full object-cover "
            />
            <h3 className="font-semibold text-center">Boots</h3>
          </div>
          <div className="max-w-72 w-full max-h-96 h-full z-20 absolute top-10 left-1/2 -translate-x-1/2 rounded-md">
            <img
              src={Casual}
              alt=""
              className="rounded-md h-full w-full object-cover"
            />
            <h3 className="font-semibold text-center">Casual</h3>
          </div>
          <div className="max-w-72 w-full max-h-96 h-full z-20 absolute -top-20 right-3 rounded-md">
            <img
              src={HighHeel}
              alt=""
              className="rounded-md object-cover h-full w-full"
            />
            <h3 className="font-semibold text-center">HighHeels</h3>
          </div>
        </div>
        <div className="flex justify-center  pb-5  flex-col items-center">
          <p className="text-neutral-500 w-full px-3 md:w-1/4  text-center">
            Walk confidently towards a brighter tomorrow, as your favorite shoes
            elevate not just your style, but your spirit and stride.
          </p>

          <Button variant={"secondary"} className="flex gap-1">
            Explore <ArrowRight strokeWidth={1} />
          </Button>
        </div>
      </div>
      {/* mobile devices */}
      <div className=" bg-primary block xl:hidden h-full mt-10 py-10 rounded-xl">
        <div className="px-2 gap-10 grid grid-cols-1 w-full place-items-center sm:grid-cols-2 h-full">
          <div className=" h-56 md:h-60 lg:h-72 w-full  rounded-md">
            <img
              src={Boots}
              alt=""
              className="rounded-md h-full w-full object-cover"
            />
            <h3 className="font-semibold text-center">Boots</h3>
          </div>
          <div className=" h-56 md:h-60 lg:h-72 w-full rounded-md">
            <img
              src={Casual}
              alt=""
              className="rounded-md h-full w-full object-cover"
            />
            <h3 className="font-semibold text-center">Casual</h3>
          </div>
          <div className=" h-56 md:h-60 lg:h-72 w-full  rounded-md">
            <img
              src={HighHeel}
              alt=""
              className="rounded-md h-full w-full object-cover"
            />
            <h3 className="font-semibold text-center">HighHeels</h3>
          </div>
          <div className="flex justify-center mt-10 pb-5  flex-col items-center">
            <p className="text-neutral-500 text-sm w-full px-3  text-center">
              Walk confidently towards a brighter tomorrow, as your favorite
              shoes elevate not just your style, but your spirit and stride.
            </p>

            <Button variant={"secondary"} className="flex gap-1">
              Explore <ArrowRight strokeWidth={1} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
