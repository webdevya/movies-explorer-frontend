import AuthForm from "../../AuthForm/AuthForm";
import CaptionedField from "../../Common/CaptionedField/CaptionedField";
import useValidation from '../../../hooks/useValidation';
import './register.css';

function RegisterPage({ onRegister, onEnterClick, errorText }) {

  const validation = useValidation();
  function handleSubmit() {
    onRegister({ name: validation.values.name, email: validation.values.email, password: validation.values.password });
  }

  return (
    <AuthForm
      name='register'
      title='Добро пожаловать!'
      submitText='Зарегистрироваться'
      additionalText='Уже зарегистрированы?'
      additionalBtnText='Войти'
      onSubmit={handleSubmit}
      onAdditionalBtnClick={onEnterClick}
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
        />
        <CaptionedField
          caption='E-mail'
          id='email'
          name='email'
          value={validation.values.email}
          errorText={validation.errors.email}
          onChange={validation.handleChange}
          type='email'
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
export default RegisterPage;
