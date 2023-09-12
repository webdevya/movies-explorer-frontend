import React from 'react';
import { SavedMoviesContext } from "../../../contexts/SavedMoviesContext";
import './saved-movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedCardButtons from '../MovieButtons/SavedCardButtons/SavedCardButtons';
import SavedCardViewModel from '../../../viewmodels/SavedCardViewModel';
import { shortMovieMaxDuration } from '../../../utils/consts';


function SavedMovies({ errorText, setLoading, setError, toggleLike }) {

  const currentMovies = React.useContext(SavedMoviesContext);

  const [shownMovies, setShownMovies] = React.useState(null);
  const [filter, setFilter] = React.useState({ name: '', isShort: false });

  React.useEffect(() => {

    const filtered = !currentMovies || currentMovies.length === 0 ? [] :
      currentMovies.filter(x => checkName(x, filter.name) && checkIsShort(x, filter.isShort))
    setShownMovies(filtered.map(x => new SavedCardViewModel({ card: x })))

  }, [currentMovies, filter]);

  function checkName(movie, name) {
    if (!name || name.length === 0)
      return true;
    const lowPattern = name.toLowerCase();
    return (movie.nameRU ?? '').toLowerCase().includes(lowPattern) || (movie.nameEN ?? '').toLowerCase().includes(lowPattern)
  }
  function checkIsShort(movie, isShort) {
    if (!isShort)
      return true;
    return movie.duration <= shortMovieMaxDuration;
  }

  function onSearch({ name, isShort }) {
    setFilter({ name: name, isShort: isShort });
  }

  function onThumbChange(isShort) {
    setFilter({ ...filter, isShort: isShort });
  }

  const cardButtons = ({ onBtnClick, isHovered }) => {
    return (<SavedCardButtons
      onBtnClick={onBtnClick}
      isHovered={isHovered}
    />)
  };

  return (
    <main className="saved-movies">
      <SearchForm
        onSearch={onSearch}
        onThumbChange={onThumbChange}
      />
      <MoviesCardList
        onCardLike={toggleLike}
        cards={shownMovies}
        cardButtons={cardButtons}
        errorText={errorText}
      />
      <div className="saved-movies__devider" />
    </main>
  );
}

export default SavedMovies;
