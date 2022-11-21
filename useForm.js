import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setFormState((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return { ...formState, onInputChange, onResetForm };
};
