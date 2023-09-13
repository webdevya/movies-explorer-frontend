import React from 'react';
import './movies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SquareButton from '../../Common/Buttons/SquareButton/SquareButton'
import CardButtons from '../MovieButtons/CardButtons/CardButtons';
import useMovies from '../../../hooks/useMovies';
import { searchPropsName } from '../../../utils/consts.js';
import useSavedState from '../../../hooks/useSavedState';
import useWindowWidth from '../../../hooks/useWindowWidth';
import {
  cardInitCount1280,
  cardInitCount768,
  cardInitCount320,
  brakeWidth1280,
  brakeWidth768,
  shortMovieMaxDuration
} from '../../../utils/consts';
import CardViewModel from '../../../viewmodels/CardViewModel';
import { SavedMoviesContext } from '../../../contexts/SavedMoviesContext';

function Movies({ errorText, setLoading, setError, toggleLike }) {

  const searchSave = useSavedState(searchPropsName);
  const movieHandler = useMovies({ setLoading, setError });
  const useWidth = useWindowWidth();

  const [foundMovies, setfoundMovies] = React.useState(null);
  const [shownMovies, setShownMovies] = React.useState(null);
  const [isShowMore, setIsShowMore] = React.useState(false);
  const [currentMoviesCount, setCurrentMoviesCount] = React.useState(0);
  const [searchParams, setSearchParams] = React.useState({ moreTimes: 0 });
  const [isSearchError, setIsSearchError] = React.useState(false);

  const savedMovies = React.useContext(SavedMoviesContext);

  React.useEffect(() => {
    const props = searchSave.getData();
    if (Object.keys(props).length > 0) {
      setCalculatedCardsCount(useWidth.width, props.moreTimes);
      onSearch(props);
    }
  }, []);

  React.useEffect(() => {
    setCalculatedCardsCount(useWidth.width, searchParams.moreTimes);
  }, [useWidth.width, searchParams.moreTimes]);

  React.useEffect(() => {
    filterShownMovies(foundMovies, searchParams.isShort, currentMoviesCount);
  }, [currentMoviesCount, searchParams.isShort]);

  function setCalculatedCardsCount(width, more) {

    const cnt = width >= brakeWidth1280 ? calculateCountsByConsts(cardInitCount1280, more) :
      width >= brakeWidth768 ? calculateCountsByConsts(cardInitCount768, more) :
        calculateCountsByConsts(cardInitCount320, more);

    setCurrentMoviesCount(cnt);
    return cnt;
  }

  function calculateCountsByConsts(cardInitCount, more) {
    const count = cardInitCount.countRows * cardInitCount.countCols +
      more * cardInitCount.countCols * cardInitCount.countAddRow;
    return count;
  }

  function onSearch({ name, isShort }) {
    if (!name || name.length === 0) {
      setIsSearchError(true);
      return;
    }

    setIsSearchError(false);
    const props = { ...searchParams, name: name, isShort: isShort, moreTimes: 0 };
    saveSearchParams(props);
    const cnt = setCalculatedCardsCount(useWidth.width, searchParams.moreTimes);
    movieHandler.searchMovies(name).then(found => {
      setfoundMovies(found);
      filterShownMovies(found, isShort, cnt);
    });
  }

  function filterShownMovies(movies, isShort, moviesCount) {
    if (!movies)
      return;
    const filtered = (isShort ? movies.filter(x => x.duration <= shortMovieMaxDuration) : movies);
    const viewmodels = filtered.slice(0, moviesCount).map(x => new CardViewModel({ card: x, savedId: findSavedId(x.id) }));
    setShownMovies(viewmodels);
    setIsShowMore(filtered.length > viewmodels.length);

  }

  function findSavedId(movieId) {
    if (!savedMovies || savedMovies.length === 0)
      return null;
    if (!savedMovies.some(x => x.movieId === movieId))
      return null;
    return savedMovies.find(x => x.movieId === movieId)._id;
  }

  function onThumbChange(isShort) {
    const props = { ...searchParams, isShort: isShort, moreTimes: 0 };

    saveSearchParams(props);
    const cnt = setCalculatedCardsCount(useWidth.width, props.moreTimes);
    setCurrentMoviesCount(cnt);
  }


  function onShowMore() {
    const props = { ...searchParams, moreTimes: searchParams.moreTimes + 1 };
    saveSearchParams(props);
    setCalculatedCardsCount(useWidth.width, props.moreTimes);
  }

  function saveSearchParams(props) {
    setSearchParams(props);
    searchSave.saveData(props);
  }

  const cardButtons = ({ card, onBtnClick, isHovered }) => {
    return (<CardButtons
      card={card}
      onBtnClick={onBtnClick}
      isHovered={isHovered}
    />)
  };

  return (
    <main className="movies">
      <SearchForm
        onSearch={onSearch}
        onThumbChange={onThumbChange}
        initName={searchParams.name}
        initIsShort={searchParams.isShort}
        isError={isSearchError}
      />
      <MoviesCardList
        onCardLike={toggleLike}
        cards={shownMovies}
        cardButtons={cardButtons}
        errorText={errorText}
      />
      <div className='movies-more'>
        {isShowMore &&
          <SquareButton
            btnText='Ещё'
            mixinClassName="square-button_type_wide-transparent"
            onClick={onShowMore}
          />}
      </div>
    </main>
  );
}
export default Movies;
