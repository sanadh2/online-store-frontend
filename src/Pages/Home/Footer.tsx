import React from "react";
import Title from "../../Components/Title";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TwitterLogoIcon } from "@radix-ui/react-icons";

const Footer: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-primary hidden lg:px-10 lg:flex flex-col gap-10 py-3 justify-between">
        <div className="flex mt-4 justify-between items-stretch ">
          <div className="flex flex-col gap-4 w-40 text-sm ">
            <Title className="lg:text-lg xl:text-lg lg:p-0" />
            <p className="text-neutral-500 text-base">
              we help you find your dream shoes
            </p>
            <div className="flex gap-3 justify-start items-center ">
              <div className=" rounded-full size-8 flex justify-center items-center border-neutral-500 text-neutral-500 border-2 ">
                <FaFacebookF />
              </div>
              <div className=" rounded-full size-8 flex justify-center items-center border-neutral-500 text-neutral-500 border-2 ">
                <FaInstagram />
              </div>
              <div className=" rounded-full size-8 flex justify-center items-center border-neutral-500 text-neutral-500 border-2 ">
                <TwitterLogoIcon />
              </div>
            </div>
          </div>
          <div className="flex gap-5 ">
            <div className="grid gap-y-2">
              <h3 className="font-bold">Information</h3>
              <p className="text-neutral-500">About</p>
              <p className="text-neutral-500">Product</p>
              <p className="text-neutral-500">Blog</p>
            </div>
            <div className="grid gap-y-2">
              <h3 className="font-bold">Company</h3>
              <p className="text-neutral-500">Community</p>
              <p className="text-neutral-500">Career</p>
              <p className="text-neutral-500">Our Story</p>
            </div>
            <div className="grid gap-y-2">
              <h3 className="font-bold">Contact</h3>
              <p className="text-neutral-500">Getting started</p>
              <p className="text-neutral-500">Pricing</p>
              <p className="text-neutral-500">Resources</p>
            </div>
          </div>
        </div>
        <p className="text-neutral-500">
          2024 all Right Reserved Term of use Shoetopia
        </p>
      </div>

      {/* mobile devices */}
      <div className="bg-primary p-3 md:p-5 flex flex-col gap-5 lg:hidden mt-20">
        <div className=" flex  flex-col justify-center items-center">
          <Title className="p-0 md:p-0" />
          <p className="text-neutral-500 text-sm mt-2">
            we help you find your dream shoes
          </p>
          <div className="flex gap-3 justify-center w-full items-center mt-3 ">
            <div className=" rounded-full size-8 flex justify-center items-center border-neutral-500 text-neutral-500 border-2 ">
              <FaFacebookF />
            </div>
            <div className=" rounded-full size-8 flex justify-center items-center border-neutral-500 text-neutral-500 border-2 ">
              <FaInstagram />
            </div>
            <div className=" rounded-full size-8 flex justify-center items-center border-neutral-500 text-neutral-500 border-2 ">
              <TwitterLogoIcon />
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-7 justify-between px-2 items-center text-sm">
          <div className="grid gap-y-2">
            <h3 className="font-bold">Information</h3>
            <p className="text-neutral-500">About</p>
            <p className="text-neutral-500">Product</p>
            <p className="text-neutral-500">Blog</p>
          </div>
          <div className="grid gap-y-2">
            <h3 className="font-bold">Company</h3>
            <p className="text-neutral-500">Community</p>
            <p className="text-neutral-500">Career</p>
            <p className="text-neutral-500">Our Story</p>
          </div>
          <div className="grid gap-y-2">
            <h3 className="font-bold">Contact</h3>
            <p className="text-neutral-500">Getting started</p>
            <p className="text-neutral-500">Pricing</p>
            <p className="text-neutral-500">Resources</p>
          </div>
        </div>
        <p className="text-neutral-500 text-xs">
          2024 all Right Reserved Term of use Shoetopia
        </p>
      </div>
    </div>
  );
};

export default Footer;
