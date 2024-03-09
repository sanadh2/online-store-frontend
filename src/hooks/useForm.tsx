import React, { useState } from "react";

interface FormState {}

const useForm = <T extends FormState>(
  initialState: T,
  validate: (values: T) => Record<keyof T, string>,
  onSubmit: () => void
) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Record<keyof T, string>>(
    {} as Record<keyof T, string>
  );

  const clearFields = () => {
    const clearedValues: T = { ...initialState };
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key))
        clearedValues[key] = "" as T[Extract<keyof T, string>];
    }
    setValues(clearedValues);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files) return;
    setValues({
      ...values,
      [name]: files[0],
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit();
    } else {
      console.log("Form has validation errors:", validationErrors);
    }
  };

  return {
    values,
    errors,
    handleInputChange,
    handleFileChange,
    handleSubmit,
    clearFields,
  };
};

export default useForm;
