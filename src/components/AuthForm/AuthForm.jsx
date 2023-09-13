import React from 'react';
import Logo from '../Logo/Logo';
import { LoadingContext } from '../../contexts/LoadingContext';
import TransparentButton from '../Common/Buttons/TransparentButton/TransparentButton';
import SquareButton from '../Common/Buttons/SquareButton/SquareButton';
import './auth-form.css';

function AuthForm({ name, title, submitText, additionalText, additionalBtnText, onSubmit, onAdditionalBtnClick, isValid, errorText, children }) {
  const { isLoading } = React.useContext(LoadingContext);
  return (
    <dialog className={`auth-form auth-form_type_${name}`} >
      <Logo
        isLoading={isLoading}
        mixinClassName="" />
      <h1 className='auth-form__title'>{title}</h1>
      <form className="auth-form__form" name={name} onSubmit={onSubmit} noValidate={true}>
        {children}
        <p className='auth-form__error-text'>{errorText}</p>
        <SquareButton
          mixinClassName={`square-button_type_wide-blue auth-form-save-btn-placeholder ${(!isValid || isLoading) && 'square-button_disabled'}`}
          btnText={submitText}
          disabled={!isValid || isLoading}
          type='submit'
        />
      </form>
      <div className='auth-form__addtitional-row'>
        <span className='auth-form__additional-text'>{additionalText}</span>
        <TransparentButton
          mixinClassName='transparent-button_type_blue-text'
          btnText={additionalBtnText}
          onClick={onAdditionalBtnClick}
        />
      </div>
    </dialog>
  );
}
export default AuthForm
