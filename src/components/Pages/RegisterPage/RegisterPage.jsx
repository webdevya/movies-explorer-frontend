import React from "react";
import AuthForm from "../../AuthForm/AuthForm";
import CaptionedField from "../../Common/CaptionedField/CaptionedField";
import useValidation from '../../../hooks/useValidation';
import { NavigateContext } from "../../../contexts/NavigateContext";
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import './register.css';
import { emailInputTitle, nameInputTitle, nameRegex } from '../../../utils/consts';

function RegisterPage({ onRegister, errorText, checkToken }) {

  React.useEffect(() => { checkToken() }, []);
  const currentUser = React.useContext(CurrentUserContext);
  const validation = useValidation();
  const { onSigninClick } = React.useContext(NavigateContext);



  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ name: validation.values.name, email: validation.values.email, password: validation.values.password });
  }

  return (!currentUser.email ?
    <AuthForm
      name='register'
      title='Добро пожаловать!'
      submitText='Зарегистрироваться'
      additionalText='Уже зарегистрированы?'
      additionalBtnText='Войти'
      onSubmit={handleSubmit}
      onAdditionalBtnClick={onSigninClick}
      isValid={validation.isValid}
      errorText={errorText}
    >
      <fieldset className='register'>
        <CaptionedField
          caption='Имя'
          id='name'
          name='name'
          value={validation.values.name}
          errorText={validation.errors.name}
          onChange={validation.handleChange}
          pattern={nameRegex}
          title={nameInputTitle}
        />
        <CaptionedField
          caption='E-mail'
          id='email'
          name='email'
          value={validation.values.email}
          errorText={validation.errors.email}
          onChange={validation.handleChange}
          type='email'
          title={emailInputTitle}
        />
        <CaptionedField
          caption='Пароль'
          id='password'
          name='password'
          value={validation.values.password}
          errorText={validation.errors.password}
          onChange={validation.handleChange}
          type='password'
        />

      </fieldset>
    </AuthForm>
    : <div></div>
  );
}
export default RegisterPage;
