import React from 'react';
import { CurrentMoviesContext } from "../../contexts/CurrentMoviesContext";
import './movies.css'
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SquareButton from '../Common/Buttons/SquareButton/SquareButton'

function Movies({ tmpOnLoad }) {

  const currentMovies = React.useContext(CurrentMoviesContext);
  function onSearch({ name }) {
    console.log(name);
  }

  function onCardLike(card) {
    console.log(card);
  }

  //tmpOnLoad();
  return (
    <main className="movies">
      <SearchForm onSearch={onSearch} />
      <MoviesCardList
        onCardLike={onCardLike}
        cards={currentMovies}
      />
      <div className='movies-more'>
        <SquareButton
          btnText='Ещё'
          mixinClassName="square-button_type_wide-transparent"
        />
      </div>
    </main>
  );
}
export default Movies;
