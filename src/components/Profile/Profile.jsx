import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useValidation from '../../hooks/useValidation';
import './profile.css';
import SquareButton from '../Common/Buttons/SquareButton/SquareButton';
import TransparentButton from '../Common/Buttons/TransparentButton/TransparentButton';
import { emailInputTitle, nameInputTitle, nameRegex } from '../../utils/consts';
import { LoadingContext } from '../../contexts/LoadingContext';


function Profile({ onProfileUpdate, onProfileExit, isEditMode, setIsEditMode, errorText, infoText }) {

  const validation = useValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const [isUserDataEqual, setIsUserDataEqual] = React.useState(true);
  const { isLoading } = React.useContext(LoadingContext);

  function handleEditProfile() {
    setIsEditMode(true);
  }

  function handleProfileExit() {
    onProfileExit();
  }

  function handleSubmit(e) {
    e.preventDefault();
    onProfileUpdate({ name: validation.values.name, email: validation.values.email });
  }
  React.useEffect(() => {
    validation.reset({
      name: currentUser.name,
      email: currentUser.email
    })
  }, [currentUser]);

  React.useEffect(() => {
    setIsUserDataEqual(currentUser.name === validation.values.name && currentUser.email === validation.values.email);
  }, [validation.values.name, validation.values.email]);

  return (
    <section className='profile' alt="Профиль пользователя">
      <div className='profile__info'>
        <h2 className='profile__greeting'>{`Привет, ${validation.values.name}`}</h2>

        <form className={`profile__form ${isEditMode && 'profile__form_type_edit'}`} name="profile-form" onSubmit={handleSubmit} noValidate={true}>
          <fieldset className='profile__fields'>

            <label className="profile__field profile__field_underlined">
              <span className="profile__field-caption">Имя</span>
              <input type="text" className={`profile__input ${validation.errors.name && validation.errors.name.length > 0 && "profile__input_type_error"}`}
                placeholder="Имя" id="profile-input-name" name="name" required={true} onChange={validation.handleChange}
                value={validation.values.name ? validation.values.name : ''} disabled={!isEditMode || isLoading}
                pattern={nameRegex} title={nameInputTitle} />
              <span className="profile__error profile-input-name-error">{validation.errors.name && validation.errors.name}</span>
            </label>

            <label className="profile__field">
              <span className="profile__field-caption">E-mail</span>
              <input type="email" title={emailInputTitle} className={`profile__input ${validation.errors.email && validation.errors.email.length > 0 && "profile__input_type_error"}`}
                placeholder="E-mail" id="profile-input-email" name="email" required={true} onChange={validation.handleChange}
                value={validation.values.email ? validation.values.email : ''} disabled={!isEditMode || isLoading} />
              <span className="profile__error profile-input-name-error">{validation.errors.email && validation.errors.email}</span>
            </label>
          </fieldset>
          <p className='profile__error'>{errorText}</p>
          <p className='profile__info-text'>{infoText}</p>
          {isEditMode && <SquareButton
            mixinClassName={`square-button_type_wide-blue ${(!validation.isValid || isUserDataEqual || isLoading) && 'square-button_disabled'}`}
            btnText="Сохранить"
            disabled={!validation.isValid || isUserDataEqual || isLoading}
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
