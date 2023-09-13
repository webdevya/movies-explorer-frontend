import AuthForm from "../../AuthForm/AuthForm";
import CaptionedField from "../../Common/CaptionedField/CaptionedField";
import useValidation from '../../../hooks/useValidation';
import './login.css';
import { NavigateContext } from "../../../contexts/NavigateContext";
import React from "react";
import { emailInputTitle } from '../../../utils/consts';

function LoginPage({ onLogin, errorText, checkToken }) {

  React.useEffect(() => { checkToken() }, []);

  const validation = useValidation();

  const { onRegisterClick } = React.useContext(NavigateContext);

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email: validation.values.email, password: validation.values.password });
  }

  return (
    <AuthForm
      name='login'
      title='Рады видеть!'
      submitText='Войти'
      additionalText='Ещё не зарегистрированы?'
      additionalBtnText='Регистрация'
      onSubmit={handleSubmit}
      onAdditionalBtnClick={onRegisterClick}
      isValid={validation.isValid}
      errorText={errorText}
    >
      <fieldset className='login'>
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
  );
}
export default LoginPage;
