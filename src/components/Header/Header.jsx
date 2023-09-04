import React from 'react';
import { LoadingContext } from '../../contexts/LoadingContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import TransparentButton from '../Common/Buttons/TransparentButton/TransparentButton';
import RoundedButton from '../Common/Buttons/RoundedButton/RoundedButton';
import SquareButton from '../Common/Buttons/SquareButton/SquareButton'
import './header.css';
import Logo from '../Logo/Logo';


function Header() {
  const { isLoading } = React.useContext(LoadingContext);
  const currentUser = React.useContext(CurrentUserContext);
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
        />
        <TransparentButton
          mixinClassName='transparent-button_type_standard'
          btnText='Сохраненные фильмы'
        />
      </div>}
      {isLoggedIn &&
        <RoundedButton
          mixinClassName='header__account-placeholder rounded-button_size_big'
          btnText='Аккаунт'
        />}
      {isLoggedIn &&
        <SquareButton
          mixinClassName='header__burger-placeholder square-button_type_burger'
          btnText=''
        />}
      {!isLoggedIn && <div className='header__auth-menu-placeholder'>
        <TransparentButton
          mixinClassName='transparent-button_type_registration'
          btnText='Регистрация'
        />
        <SquareButton
          btnText='Войти'
          mixinClassName="square-button_type_small-green"
        />
      </div>
      }
    </header>
  );
}
export default Header;
