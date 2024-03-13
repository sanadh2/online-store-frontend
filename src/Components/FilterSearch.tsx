import React, { useState } from "react";

import MySelect from "./Select";

interface PropTypes {
  categoryParams: string | null;
  ratingParams: string | null;
  authorParams: string | null;
  languageParams: string | null;
  categories: string[];
  languages: string[];
}

const FilterSearch: React.FC<PropTypes> = ({
  categoryParams,
  ratingParams,
  languageParams,
  categories,
  languages,
}) => {
  const [category, setCategory] = useState<string | undefined>(
    categoryParams ? categoryParams : undefined
  );
  const [rating, setRating] = useState<string | undefined>(
    ratingParams ? ratingParams : undefined
  );
  const [language, setLanguage] = useState<string | undefined>(
    languageParams ? languageParams : undefined
  );
  return (
    <div className="px-1">
      <form
        action=""
        method="GET"
        className="flex gap-2 h-full w-full flex-wrap"
      >
        <h2 className="text-xl font-Outfit">Filter</h2>
        <div className="flex flex-row overflow-x-scroll md:overflow-hidden w-full items-center md:flex-col justify-start gap-3 ">
          <MySelect
            setValue={setCategory}
            value={category}
            options={categories}
            name="category"
            placeholder="Category"
          />
          <MySelect
            setValue={setRating}
            value={rating}
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            name="rating"
            placeholder="Rating"
          />
          <MySelect
            setValue={setLanguage}
            value={language}
            options={languages}
            name="language"
            placeholder="Language"
          />
        </div>

        <button
          type="submit"
          className="py-1 px-3   text-sm md:text-base font-light md:px-4 md:py-1  md:w-full whitespace-nowrap bg-black rounded text-white dark:bg-white dark:text-black"
        >
          Filter this
        </button>
      </form>
    </div>
  );
};

export default FilterSearch;
