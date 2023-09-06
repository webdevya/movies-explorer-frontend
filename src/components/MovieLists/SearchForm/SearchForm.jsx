import React from 'react';
import useValidation from '../../../hooks/useValidation';
import './search.css';
import CheckThumb from '../../Common/CheckThumb/CheckThumb';
import SquareButton from '../../Common/Buttons/SquareButton/SquareButton';

function SearchForm({ onSearch }) {

  const validation = useValidation();
  const [isShort, setIsShort] = React.useState(false);

  function handleCheckChanged(e) {
    setIsShort(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSearch({
      name: validation.values.name
    });
  }

  return (
    <section className='search' alt="Фильтр по фильмам">
      <form className="search__form" name="search-form" onSubmit={handleSubmit} noValidate={true}>
        <input type="text" className="search__form-input" placeholder="Фильм" id="search-form-input" name="name"
          required={true} onChange={validation.handleChange} value={validation.values.name ? validation.values.name : ''} />
        <SquareButton
          mixinClassName={`square-button_type_submit-image  ${!validation.isValid && "square-button_type_submit-image-disbled"}`}
          btnText=''
          disabled={!validation.isValid}
          type='submit'
        />
        {/* <button type="submit" className={`search__form-submit-btn ${!validation.isValid && "search__form-submit-btn_disabled"}`} disabled={!validation.isValid}>Искать</button> */}
      </form>
      <div className='search__check-thumb-placeholder'>
        <CheckThumb
          id="search-form-check link"
          name="isShort"
          isChecked={isShort}
          onChange={handleCheckChanged}
        />
        <span className='search__check-caption'>Короткометражки</span>
      </div>
    </section>
  );
}
export default SearchForm;
