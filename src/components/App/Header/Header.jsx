import React from 'react';
import Preloader from '../../Common/Preloader/Preloader'
import { LoadingContext } from '../../../contexts/LoadingContext';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import TransparentButton from '../../Common/Buttons/TransparentButton/TransparentButton';
import RoundedButton from '../../Common/Buttons/RoundedButton/RoundedButton';
import SquareButton from '../../Common/Buttons/SquareButton/SquareButton'
import './header.css';


function Header() {
  const { isLoading } = React.useContext(LoadingContext);
  const currentUser = React.useContext(CurrentUserContext);
  const isLoggedIn = currentUser._id;
  return (
    <header className='header'>
      <div className={`header__logo ${!isLoading && 'header__logo_with-img'}`}>
        {isLoading && <Preloader />}
      </div>
      {isLoggedIn && <div className='header__menu-placeholder'>
        <TransparentButton
          mixinClassName='transparent-button_type_all-films'
          btnText='Фильмы'
        />
        <TransparentButton
          mixinClassName='transparent-button_type_saved-films'
          btnText='Сохраненные фильмы'
        />
      </div>}
      {isLoggedIn &&
        <RoundedButton
          mixinClassName='header-account-placeholder rounded-button_size_big'
          btnText='Аккаунт'
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
