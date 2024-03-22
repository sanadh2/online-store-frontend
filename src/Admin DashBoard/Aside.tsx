import { DashboardIcon } from "@radix-ui/react-icons";
import { AlignLeft, BadgeCheck, Barcode, ChevronDown } from "lucide-react";
import React, { useState } from "react";

type PropTypes = {
  setPage: React.Dispatch<
    React.SetStateAction<{
      addProduct: boolean;
      productList: boolean;
    }>
  >;
};

const Aside: React.FC<PropTypes> = ({ setPage }) => {
  const [open, setOpen] = useState({
    products: false,
  });

  const setThePage = (e: "add-product" | "product-list") => {
    const page = { addProduct: false, productList: false };

    if (e === "add-product") {
      page.addProduct = true;
    }
    if (e === "product-list") {
      page.productList = true;
    }
    setPage(page);
  };

  return (
    <aside className=" w-60 md:w-66 border h-svh bg-neutral-100">
      <nav className="h-14  md:h-16 lg:h-20 bg-primary flex justify-between p-3 items-center gap-2">
        <div className="flex gap-2 ">
          <BadgeCheck className="size-10" />
          <div className="">
            <h2 className="font-bold text-slate-800">Admin</h2>
            <p>ecommerce</p>
          </div>
        </div>
        <button>
          <AlignLeft className="shadow-none size-6" strokeWidth={1} />
        </button>
      </nav>
      <div className="p-3 space-y-6">
        <button className="flex gap-1 items-center font-medium hover:opacity-100 opacity-75 active:opacity-40 transition-opacity ease-in-out ">
          <DashboardIcon className="text-primary-divert size-[26px]" />
          DashBoard
        </button>
        <div className="">
          <div className="flex justify-between items-center">
            <button className="flex w-full gap-1 items-center font-medium hover:opacity-100 opacity-75 active:opacity-40 transition-opacity ease-in-out">
              <Barcode className="text-primary-divert size-[26px]" />
              Products
            </button>
            <button
              className={
                (open.products ? "rotate-180" : "") +
                "  transition-all duration-300 ease-in-out"
              }
              onClick={() =>
                setOpen((prev) => ({ ...prev, products: !prev.products }))
              }
            >
              <ChevronDown className="text-neutral-400" />
            </button>
          </div>
          <div className={`overflow-hidden`}>
            <div
              className={` ${open.products ? "translate-y-0 py-3" : " -translate-y-full h-0 "}  flex flex-col w-full text-neutral-500  text-sm items-start gap-2 px-3 md:px-5 lg:px-7 transition-all duration-500`}
            >
              <button onClick={() => setThePage("add-product")}>
                Add Product
              </button>
              <button onClick={() => setThePage("product-list")}>
                Product list
              </button>
              <button>Categories</button>
              <button>Brand</button>
            </div>
          </div>
        </div>

        <button className="flex gap-1 items-center font-medium hover:opacity-100 opacity-75 active:opacity-40 transition-opacity ease-in-out">
          <DashboardIcon className="text-primary-divert size-[26px]" />
          DashBoard
        </button>
        <button className="flex gap-1 items-center font-medium hover:opacity-100 opacity-75 active:opacity-40 transition-opacity ease-in-out">
          <DashboardIcon className="text-primary-divert size-[26px]" />
          DashBoard
        </button>
        <button className="flex gap-1 items-center font-medium hover:opacity-100 opacity-75 active:opacity-40 transition-opacity ease-in-out">
          <DashboardIcon className="text-primary-divert size-[26px]" />
          DashBoard
        </button>
      </div>
    </aside>
  );
};

export default Aside;
