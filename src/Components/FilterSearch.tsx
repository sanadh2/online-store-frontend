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
    <>
      <form
        action=""
        method="get"
        className="flex h-full flex-col justify-center gap-3 "
      >
        <h2 className="text-xl font-Outfit  mt-5 "> Filter</h2>
        <MySelect
          setValue={setCategory}
          value={category}
          options={categories}
          name="category"
          placeholder="Category"
        />
        <div className="">
          <MySelect
            setValue={setRating}
            value={rating}
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            name="rating"
            placeholder="Rating"
          />
        </div>
        <MySelect
          setValue={setLanguage}
          value={language}
          options={languages}
          name="language"
          placeholder="Language"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black rounded-md text-white dark:bg-white dark:text-black"
        >
          Filter this
        </button>
      </form>
    </>
  );
};

export default FilterSearch;
