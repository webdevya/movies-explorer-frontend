import React from 'react';
import usePopupClose from '../../hooks/usePopupClose';
import TransparentButton from '../Common/Buttons/TransparentButton/TransparentButton';
import RoundedButton from '../Common/Buttons/RoundedButton/RoundedButton';
import { NavigateContext } from '../../contexts/NavigateContext';
import './menu-popup.css';
import SquareButton from '../Common/Buttons/SquareButton/SquareButton';
import { useLocation } from 'react-router-dom';

function MenuPopup({ isOpen, onClose }) {

  usePopupClose(isOpen, onClose)

  const location = useLocation().pathname;


  const { onMainClick, onMoviesClick, onSavedMoviesClick, onProfileClick } = React.useContext(NavigateContext);


  return (
    <dialog className={`menu-popup ${isOpen ? "menu-popup_opened" : ""}`} >
      <div className="menu-popup__main">
        <SquareButton
          mixinClassName='square-button_type_x menu-popup-close-placeholder'
          type='reset'
          onClick={onClose}
          btnText=''
        />
        {/* <button type="reset" className="popup__close-btn image-btn image-btn_hover-opacity_medium" onClick={onClose}></button> */}
        <div className='menu-popup__menu'>
          <div className='menu-popup__links'>
            <TransparentButton
              mixinClassName={`transparent-button_type_menu ${location === '/' && 'transparent-button_type_menu-active'}`}
              btnText='Главная'
              onClick={onMainClick}
            />
            <TransparentButton
              mixinClassName={`transparent-button_type_menu ${location === '/movies' && 'transparent-button_type_menu-active'}`}
              btnText='Фильмы'
              onClick={onMoviesClick}
            />
            <TransparentButton
              mixinClassName={`transparent-button_type_menu ${location === '/saved-movies' && 'transparent-button_type_menu-active'}`}
              btnText='Сохранённые фильмы'
              onClick={onSavedMoviesClick}
            />
          </div>

          <RoundedButton
            mixinClassName='rounded-button_size_big'
            btnText='Аккаунт'
            onClick={onProfileClick}
          />
        </div>
      </div>
    </dialog>
  );
}
export default MenuPopup
