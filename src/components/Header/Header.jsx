import React from 'react';
import { LoadingContext } from '../../contexts/LoadingContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { NavigateContext } from '../../contexts/NavigateContext';
import TransparentButton from '../Common/Buttons/TransparentButton/TransparentButton';
import RoundedButton from '../Common/Buttons/RoundedButton/RoundedButton';
import SquareButton from '../Common/Buttons/SquareButton/SquareButton'
import './header.css';
import Logo from '../Logo/Logo';


function Header({ onMovies, onSavedMovies, onProfile, onMenu, onRegister, onSignin }) {
  const { isLoading } = React.useContext(LoadingContext);
  const currentUser = React.useContext(CurrentUserContext);
  const { onMoviesClick, onSavedMoviesClick, onProfileClick, onMenuClick, onRegisterClick, onSigninClick } = React.useContext(NavigateContext);
  const isLoggedIn = currentUser._id;
  return (
    <header className='header'>
      <Logo
        isLoading={isLoading}
        mixinClassName='header-logo-placeholder'
      />
      {isLoggedIn && <div className='header__menu-placeholder'>
        <TransparentButton
          mixinClassName='transparent-button_type_all-films'
          btnText='Фильмы'
          onClick={onMoviesClick}
        />
        <TransparentButton
          mixinClassName='transparent-button_type_standard'
          btnText='Сохраненные фильмы'
          onClick={onSavedMoviesClick}
        />
      </div>}
      {isLoggedIn &&
        <RoundedButton
          mixinClassName='header__account-placeholder rounded-button_size_big'
          btnText='Аккаунт'
          onClick={onProfileClick}
        />}
      {isLoggedIn &&
        <SquareButton
          mixinClassName='header__burger-placeholder square-button_type_burger'
          btnText=''
          onClick={onMenuClick}
        />}
      {!isLoggedIn && <div className='header__auth-menu-placeholder'>
        <TransparentButton
          mixinClassName='transparent-button_type_registration'
          btnText='Регистрация'
          onClick={onRegisterClick}
        />
        <SquareButton
          btnText='Войти'
          mixinClassName="square-button_type_small-green"
          onClick={onSigninClick}
        />
      </div>
      }
    </header>
  );
}
export default Header;
