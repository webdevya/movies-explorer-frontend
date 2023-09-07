import React from "react";
import { api } from '../utils/MoviesApi';


export default function useMovies({ setLoading, setError }) {

  const [movies, setMovies] = React.useState(null);

  function searchMovies(pattern) {
    loadMovies();
    const found = movies.filter(`/${pattern}/i`);
    return found;
  }

  function loadMovies() {
    if (movies === null) {
      if (localStorage.getItem('movies')) {
        setMovies(localStorage.getItem('movies'));
        return movies;
      }
      else {
        setLoading(true);
        return api.getMovies()
          .then((movies) => {
            localStorage.setItem('movies');
            setMovies(movies);
            return movies;
          })
          .catch(err => { console.log(err); setError(err.message); })
          .finally(() => setLoading(false));
      }
    }
    else
      return movies;
  }

  return { movies, searchMovies };
}
