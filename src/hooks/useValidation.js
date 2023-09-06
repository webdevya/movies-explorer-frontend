import React from "react";

export default function useValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());

  }

  const reset = React.useCallback((defaultValues = {}) => {
    setValues(defaultValues);
    setErrors({});
    setIsValid(false);
  }, [setValues, setErrors, setIsValid]);

  return { values, errors, handleChange, reset, isValid };
}
