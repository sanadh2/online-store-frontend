import { FC, useEffect, useRef } from "react";
import Input from "../../Components/ui/Input";
import { Button } from "../../Components/ui/button";
import { SearchIcon } from "lucide-react";

const Search: FC<{
  close: () => void;
}> = ({ close }) => {
  const inputrRef = useRef<HTMLInputElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const closeModel = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      else close();
    };
    if (inputrRef.current) inputrRef.current.focus();
    window.addEventListener("keydown", closeModel);
    return () => window.removeEventListener("keydown", closeModel);
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCloseModal = (e: MouseEvent) => {
    const { target } = e;
    if (!target || !mainRef.current) return;
    if (!mainRef.current.contains(target as Node)) {
      close();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [handleCloseModal]);

  return (
    <div
      ref={mainRef}
      className="max-w-screen-xl overflow-scroll bg-primary rounded-xl md:rounded-2xl lg:rounded-[2rem] w-full h-full border max-h-[30rem] pt-0 md:pt-0 xl:pt-0  px-3 md:px-5 lg:px-7 xl:px-10"
    >
      <div className="h-fit  sticky top-0 mt-4">
        <div className="flex justify-center items-center w-full h-fit gap-2 mt-5 ">
          <div className="relative w-full">
            <Input ref={inputrRef} placeholder="Search " className="pl-14" />
            <div className="absolute  left-2 top-2 flex justify-center items-center rounded-md size-8 bg-primary">
              <SearchIcon className="" />
            </div>
          </div>
          <Button
            variant={"destructive"}
            className="whitespace-nowrap text-sm hidden md:block"
            onClick={close}
          >
            Close
          </Button>
        </div>
      </div>

      <div className="w-full h-full flex items-center flex-col gap-2 mt-4">
        {Array.from({ length: 7 }).map((_, index) => (
          <div className="py-2 flex  bg-white w-full rounded-md " key={index}>
            <img src="" alt="" className="w-10 h-10" />
            <p>{"name"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
