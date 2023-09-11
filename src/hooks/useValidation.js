import React from "react";
import validator from "validator";

export default function useValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  function handleChange(e) {


    setValues({ ...values, [e.target.name]: e.target.value });

    const errMsg = e.target.type === 'email' ?
      validator.isEmail(e.target.value) ?
        e.target.validationMessage :
        e.target.title && e.target.title.length > 0 ?
          e.target.title :
          'Введите корректный E-mail' :
      e.target.validationMessage && e.target.validationMessage.length > 0 && e.target.title && e.target.title.length > 0 ?
        e.target.title :
        e.target.validationMessage;

    setErrors({ ...errors, [e.target.name]: errMsg });
    if (errMsg && errMsg.length > 0)
      setIsValid(false);
    else
      setIsValid(e.target.closest('form').checkValidity());
  }

  const reset = React.useCallback((defaultValues = {}) => {
    setValues(defaultValues);
    setErrors({});
    setIsValid(false);
  }, [setValues, setErrors, setIsValid]);

  return { values, errors, handleChange, reset, isValid };
}
