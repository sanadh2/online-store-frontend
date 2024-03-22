import { FC, useState } from "react";
import ModeToggle from "../Components/ToggleTheme";
import { Bell, Layers } from "lucide-react";
import Aside from "./Aside";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { baseURL } from "../Api/server";

const Dashboard: FC = () => {
  const [showAside, setShowAside] = useState(false);
  const [page, setPage] = useState({
    addProduct: true,
    productList: false,
  });

  const { data: user } = useSelector((store: RootState) => store.user);

  return (
    <div className="flex min-h-svh divide-x-2 bg-neutral-100 text-black">
      <div className={` hidden lg:block sticky top-0  bottom-0 left-0`}>
        <Aside setPage={setPage} />
      </div>
      <div
        className={`fixed ${showAside ? "backdrop-brightness-75 backdrop-blur" : "-translate-x-96 pointer-events-none"} transition-transform  transform ease-in-out duration-500 block lg:hidden lg:sticky top-0 bottom-0 left-0 h-svh w-svw z-50`}
      >
        <Aside setPage={setPage} />
      </div>
      <div className="w-full">
        <nav className="bg-primary sticky top-0 h-14 md:h-16 lg:h-20 flex justify-center gap-3 lg:gap-10 items-center p-3 md:p-5 lg:p-7">
          <h1 className="text-base whitespace-nowrap  md:text-3xl font-medium w-full text-center">
            Welcome {user?.name}
          </h1>
          <div className="flex justify-center items-center gap-3">
            <ModeToggle className="" size="size-7" />
            <button>
              <Bell />
            </button>
            <button className="lg:hidden" onClick={() => setShowAside(true)}>
              <Layers />
            </button>
            <div className="size-10 rounded-full border border-black overflow-hidden dark:border-white">
              <img
                src={baseURL + user?.avatar}
                onError={(e) => {
                  if (user?.gender === "male")
                    e.currentTarget.src = "/male-avatar.png";
                  else if (user?.gender === "female")
                    e.currentTarget.src = "/female-avatar.jpg";
                  else e.currentTarget.src = "/others-avatar.jpg";
                  e.currentTarget.onerror = null;
                }}
                alt=""
                className="size-full rounded-full object-cover"
              />
            </div>
          </div>
        </nav>
        <div className="">
          {page.addProduct && <AddProduct />}
          {page.productList && <ProductList />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
