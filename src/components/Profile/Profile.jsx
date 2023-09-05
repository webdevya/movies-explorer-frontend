import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useValidation from '../../hooks/useValidation';
import './profile.css';
import SquareButton from '../Common/Buttons/SquareButton/SquareButton';
import TransparentButton from '../Common/Buttons/TransparentButton/TransparentButton';


function Profile({ onProfileUpdate, onProfileExit, isEditMode, setIsEditMode }) {

  const validation = useValidation();
  const currentUser = React.useContext(CurrentUserContext);
  function handleEditProfile() {
    setIsEditMode(true);
  }

  function handleProfileExit() {
    onProfileExit();
  }

  function handleSubmit(e) {
    e.preventDefault();
    onProfileUpdate(validation.values.name, validation.values.email);
  }
  React.useEffect(() => {
    validation.reset({
      name: currentUser.name,
      email: currentUser.email
    })
  }, [currentUser]);

  return (
    <section className='profile' alt="Профиль пользователя">
      <div className='profile__info'>
        <h2 className='profile__greeting'>{`Привет, ${validation.values.name}`}</h2>

        <form className={`profile__form ${isEditMode && 'profile__form_type_edit'}`} name="profile-form" onSubmit={handleSubmit} noValidate={true}>
          <fieldset className='profile__fields'>

            <label className="profile__field profile__field_underlined">
              <span className="profile__field-caption">Имя</span>
              <input type="text" className={`profile__input ${validation.errors.name && validation.errors.name.length > 0 && "profile__input_type_error"}`} placeholder="Имя" id="profile-input-name" name="name"
                required={true} onChange={validation.handleChange} value={validation.values.name ? validation.values.name : ''} disabled={!isEditMode} />
              <span className="profile__error profile-input-name-error">{validation.errors.name && validation.errors.name}</span>
            </label>

            <label className="profile__field">
              <span className="profile__field-caption">E-mail</span>
              <input type="email" className={`profile__input ${validation.errors.email && validation.errors.email.length > 0 && "profile__input_type_error"}`} placeholder="E-mail" id="profile-input-email" name="email"
                required={true} onChange={validation.handleChange} value={validation.values.email ? validation.values.email : ''} disabled={!isEditMode} />
              <span className="profile__error profile-input-name-error">{validation.errors.email && validation.errors.email}</span>
            </label>
          </fieldset>
          {isEditMode && <SquareButton
            mixinClassName={`square-button_type_wide-blue ${!validation.isValid && 'square-button_disabled'}`}
            btnText="Сохранить"
            disabled={!validation.isValid}
            type="submit"
          />}
        </form>
      </div>
      {!isEditMode &&
        <div className="profile__buttons">
          <TransparentButton
            mixinClassName="transparent-button_type_standard"
            btnText="Редактировать"
            onClick={handleEditProfile}
          />
          <TransparentButton
            mixinClassName="transparent-button_type_red-text"
            btnText="Выйти из аккаунта"
            onClick={handleProfileExit}
          />
        </div>}
    </section>
  );
}
export default Profile;
