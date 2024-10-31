import { useCallback, useState } from "react";
export const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueIsTouched, setValueIsTouched] = useState(false);
  const isValid = validateValue(enteredValue);
  const hasError = (!isValid && valueIsTouched);

  const setValue = useCallback(
    (value) => {
      setEnteredValue(value);
    },
    [setEnteredValue]
  );

  const valueChangeHandler = useCallback(
    (event) => {
      setValueIsTouched(true);
      setEnteredValue(event.target.value);
    },
    [setValueIsTouched, setEnteredValue]
  );

  const valueBlurHandler = useCallback(() => {
    setValueIsTouched(true);
  }, [setValueIsTouched]);
  
  const reset = () => {
    setEnteredValue("");
    setValueIsTouched(false);
  };
  return {
    enteredValue,
    hasError,
    isValid,
    setValue,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};
