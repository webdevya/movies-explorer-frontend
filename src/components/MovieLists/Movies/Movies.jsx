import React from 'react';
import './movies.css'
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SquareButton from '../../Common/Buttons/SquareButton/SquareButton'
import CardButtons from '../MovieButtons/CardButtons/CardButtons';
import useMovies from '../../../hooks/useMovies';

function Movies({ errorText, setLoading, setError }) {

  const movieHandler = useMovies(setLoading, setError);
  const currentMovies = movieHandler.movies;
  const showMore = false;
  function onSearch({ name }) {
    console.log(name);
  }

  function onCardLike(card) {
    console.log(card);
  }

  const cardButtons = ({ card, onBtnClick, isHovered }) => {
    return (<CardButtons
      card={card}
      onBtnClick={onBtnClick}
      isHovered={isHovered}
    />)
  };

  //tmpOnLoad();
  return (
    <main className="movies">
      <SearchForm onSearch={onSearch} />
      <MoviesCardList
        onCardLike={onCardLike}
        cards={currentMovies}
        cardButtons={cardButtons}
        errorText={errorText}
      />
      <div className='movies-more'>
        {showMore &&
          <SquareButton
            btnText='Ещё'
            mixinClassName="square-button_type_wide-transparent"
          />}
      </div>
    </main>
  );
}
export default Movies;
