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
  cardInitCount320
} from '../../../utils/consts';
import CardViewModel from '../../../viewmodels/CardViewModel';

function Movies({ errorText, setLoading, setError }) {

  const searchSave = useSavedState(searchPropsName);
  const movieHandler = useMovies({ setLoading, setError });
  const useWidth = useWindowWidth();

  const [foundMovies, setfoundMovies] = React.useState(null);
  const [shownMovies, setShownMovies] = React.useState(null);
  const [isShowMore, setIsShowMore] = React.useState(false);
  const [currentMoviesCount, setCurrentMoviesCount] = React.useState(0);
  // const [moreTimes, setMoreTimes] = React.useState(0);
  // const [isShort, setIsShort] = React.useState(false);
  const [searchParams, setSearchParams] = React.useState({ moreTimes: 0 });


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

    const cnt = width >= 1279 ? calculateCountsByConsts(cardInitCount1280, more) :
      width >= 767 ? calculateCountsByConsts(cardInitCount768, more) :
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
    const filtered = (isShort ? movies.filter(x => x.duration <= 40) : movies);
    const viewmodels = filtered.slice(0, moviesCount).map(x => new CardViewModel({ card: x, isLiked: false }));
    setShownMovies(viewmodels);
    setIsShowMore(filtered.length > viewmodels.length);

  }

  function onThumbChange(isShort) {
    const props = { ...searchParams, isShort: isShort, moreTimes: 0 };

    saveSearchParams(props);
    const cnt = setCalculatedCardsCount(useWidth.width, props.moreTimes);
    setCurrentMoviesCount(cnt);

    //filterShownMovies(foundMovies, isShort, cnt);
  }

  function onCardLike(card) {
    console.log(card);
  }

  function onShowMore() {
    const props = { ...searchParams, moreTimes: searchParams.moreTimes + 1 };
    saveSearchParams(props);
    const currCnt = setCalculatedCardsCount(useWidth.width, props.moreTimes);
    //filterShownMovies(foundMovies, searchParams.isShort, currCnt);
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
      />
      <MoviesCardList
        onCardLike={onCardLike}
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
