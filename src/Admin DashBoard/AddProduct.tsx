import { FC, useEffect } from "react";
import useForm from "../hooks/useForm";
import { IndianRupee } from "lucide-react";
import { addShoeApi } from "../Api/shoes";
import { toast } from "../Components/ui/use-toast";
type StateType = {
  name: string;
  brand: string;
  gender: "boys" | "girls" | "unisex" | "kids" | null;
  category: "running" | "football" | "casual" | "formal" | "";
  price: string;
  itemsLeft: string;
  image?: File;
};
const AddProduct: FC = () => {
  const initialState: StateType = {
    name: "",
    brand: "",
    gender: null,
    category: "",
    price: "",
    itemsLeft: "",
  };

  const validate = (values: StateType) => {
    const errors: Record<string, string> = {};

    if (values.name.length < 3)
      errors.name = "name must have at least 4 letters";
    if (!values.gender) errors.gender = "this field is required";
    if (values.brand.length < 1) errors.brand = "this field is required";
    if (values.category.length < 0) errors.category = "this field is required";
    if (values.price.length < 1) errors.price = "this field is required";
    if (values.itemsLeft.length < 1)
      errors.itemsLeft = "this field is required";
    if (!values.image) errors.image = "please add the image of the product";
    return errors;
  };
  const onSubmit = () => {
    console.log(values);
    addShoeApi(values)
      .then(() => {
        toast({ title: "success", className: "text-green-500" });
        clearFields();
      })
      .catch((err: Error) =>
        toast({ title: err.message, variant: "destructive" })
      );
  };
  const {
    values,
    handleSubmit,
    handleFileChange,
    clearFields,
    handleInputChange,
    errors,
  } = useForm(initialState, validate, onSubmit);

  useEffect(() => {
    const timeout = setTimeout(() => console.log(values), 2000);
    return () => clearTimeout(timeout);
  }, [
    values.name,
    values.price,
    values.brand,
    values.category,
    values.gender,
    values.price,
  ]);

  return (
    <div className="p-3 md:p-5">
      <h2 className="text-xl font-medium">Add Product</h2>
      <div className="mt-10">
        <form action="" onSubmit={handleSubmit}>
          <div className=" flex items-center gap-2">
            <label
              htmlFor="name"
              className=" decoration-black whitespace-nowrap"
            >
              Name of the product:
            </label>
            <div className="w-full">
              <input
                name="name"
                id="name"
                autoFocus
                className=" outline-none bg-white h-10 w-full ring-1 focus:ring-2 ring-primary-divert pl-3 rounded-md"
                value={values.name}
                onChange={handleInputChange}
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-2">{errors.name}</p>
              )}
            </div>
          </div>
          <div className="group mt-5 flex gap-2">
            <p className="peer-focus:underline decoration-black whitespace-nowrap">
              Gender of the product:
            </p>
            <div className="">
              <div className="w-full flex gap-2 items-center ">
                <input
                  name="gender"
                  id="boys"
                  type="checkbox"
                  className="peer accent-black bg-white"
                  checked={values.gender == "boys"}
                  value={"boys"}
                  onChange={handleInputChange}
                />
                <label htmlFor="boys">Boys</label>
                <input
                  name="gender"
                  id="girls"
                  type="checkbox"
                  className="peer accent-black bg-white"
                  checked={values.gender == "girls"}
                  value={"girls"}
                  onChange={handleInputChange}
                />
                <label htmlFor="girls">Girls</label>
                <input
                  name="gender"
                  id="kids"
                  type="checkbox"
                  className="peer accent-black bg-white"
                  checked={values.gender == "kids"}
                  value={"kids"}
                  onChange={handleInputChange}
                />
                <label htmlFor="kids">Kids</label>
                <input
                  name="gender"
                  id="unisex"
                  type="checkbox"
                  className="peer accent-black bg-white"
                  checked={values.gender == "unisex"}
                  value={"unisex"}
                  onChange={handleInputChange}
                />
                <label htmlFor="unisex">Unisex</label>
              </div>
              {errors.gender && (
                <p className="text-red-500 text-xs mt-2">{errors.gender}</p>
              )}
            </div>
          </div>
          <div className="group flex items-center gap-2 mt-5">
            <label
              htmlFor="brand"
              className="peer-focus:underline decoration-black whitespace-nowrap"
            >
              Name of the brand:
            </label>
            <div className="w-full">
              <input
                name="brand"
                id="brand"
                className="peer uppercase outline-none bg-white h-10 w-full ring-1 focus:ring-2 ring-primary-divert pl-3 rounded-md"
                value={values.brand}
                onChange={handleInputChange}
                placeholder="Brand"
              />
              {errors.brand && (
                <p className="text-red-500 text-xs mt-2">{errors.brand}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center lg:flex-row gap-x-7 lg:items-center">
            <div className="group flex items-center gap-2 mt-5">
              <label
                htmlFor="category"
                className="peer-focus:underline decoration-black whitespace-nowrap"
              >
                Category:
              </label>
              <div className="">
                <select
                  className="accent-black w-fit bg-inherit border bg-white border-primary-divert rounded-md px-2 py-1"
                  defaultValue={""}
                  id="category"
                  name="category"
                  onChange={handleInputChange}
                >
                  <option value={""} className="text-neutral-500">
                    Select Category
                  </option>
                  <option value="running" className="">
                    Running
                  </option>
                  <option value="football" className="">
                    Football
                  </option>
                  <option value="casual" className="">
                    Casual
                  </option>
                  <option value="formal" className="">
                    Formal
                  </option>
                </select>
              </div>
              {errors.category && (
                <p className="text-red-500 text-xs">{errors.category}</p>
              )}
            </div>
            <div className="group flex items-center gap-2 mt-5 relative w-full">
              <label
                htmlFor="price"
                className="peer-focus:underline decoration-black whitespace-nowrap"
              >
                price of the product:
              </label>
              <div className="relative">
                <input
                  name="price"
                  id="price"
                  type="number"
                  className="peer outline-none bg-white h-10 w-full ring-1 focus:ring-2 ring-primary-divert px-5 rounded-md"
                  value={values.price}
                  onChange={handleInputChange}
                  placeholder="Price"
                />
                <IndianRupee
                  strokeWidth={1.4}
                  className={`size-4 absolute left-1 top-[12px] ${values.price === "" ? "text-neutral-400" : ""}`}
                />
                <div className="bg-white cursor-text inline-block w-5 right-4 top-1 h-8 absolute" />
              </div>
              {errors.price && (
                <p className="text-red-500 text-xs">{errors.price}</p>
              )}
            </div>
          </div>
          <div className="flex gap-3 flex-col md:flex-row  md:items-center justify-center md:justify-normal">
            <div className="flex gap-2 items-center mt-5">
              <label htmlFor="items-left">No of Products:</label>
              <div className="relative">
                <input
                  name="itemsLeft"
                  id="items-left"
                  type="number"
                  className="peer outline-none bg-white h-10 w-full ring-1 focus:ring-2 ring-primary-divert px-3 rounded-md"
                  value={values.itemsLeft}
                  onChange={handleInputChange}
                  placeholder="No of Products"
                />
                <div className="w-5 bg-white cursor-text h-8 right-2 top-1 absolute" />
                {errors.itemsLeft && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.itemsLeft}
                  </p>
                )}
              </div>
            </div>
            <div className="">
              <div className="group flex gap-2 items-center mt-5 ">
                <input
                  name="image"
                  id="image"
                  type="file"
                  className="sr-only peer "
                  onChange={handleFileChange}
                  placeholder="No of Products"
                  accept="image/*"
                />
                <label
                  autoFocus
                  htmlFor="image"
                  className="bg-primary peer-focus:outline cursor-pointer px-3 p-1 rounded-md border border-transparent"
                >
                  Upload Image
                </label>
                {values.image ? (
                  <div className="size-10 rounded-full border border-black aspect-square">
                    <img
                      src={URL.createObjectURL(values.image)}
                      alt="image"
                      className="size-full rounded-full object-cover"
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              {errors.image && (
                <p className="text-red-500 text-xs mt-2">{errors.image}</p>
              )}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              className="text-lg px-4 py-1.5  mt-10 bg-green-500 hover:bg-green-600  focus:bg-green-600 transition-colors ease-in-out duration-300 rounded-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
