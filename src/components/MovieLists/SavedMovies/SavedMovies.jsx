import React from 'react';
import { CurrentMoviesContext } from "../../../contexts/CurrentMoviesContext";
import './saved-movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedCardButtons from '../MovieButtons/SavedCardButtons/SavedCardButtons';


function SavedMovies({ errorText, setLoading, setError }) {

  const currentMovies = React.useContext(CurrentMoviesContext);
  function onSearch({ name }) {
    console.log(name);
  }

  function onCardLike(card) {
    console.log(card);
  }

  const cardButtons = ({ onBtnClick, isHovered }) => {
    return (<SavedCardButtons
      onBtnClick={onBtnClick}
      isHovered={isHovered}
    />)
  };

  return (
    <main className="saved-movies">
      <SearchForm onSearch={onSearch} />
      <MoviesCardList
        onCardLike={onCardLike}
        cards={currentMovies}
        cardButtons={cardButtons}
        errorText={errorText}
      />
      <div className="saved-movies__devider" />
    </main>
  );
}

export default SavedMovies;
