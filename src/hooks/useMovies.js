import React from "react";
import { api } from '../utils/MoviesApi';


export default function useMovies({ setLoading, setError }) {

  const [movies, setMovies] = React.useState(null);

  const [isEmpty, setIsEmpty] = React.useState(true);

  function searchMovies(pattern) {

    const lowPattern = pattern.toLowerCase();
    return loadMovies().then(all => {
      return all.filter(x => (x.nameRU ?? '').toLowerCase().includes(lowPattern) || (x.nameEN ?? '').toLowerCase().includes(lowPattern));
    }).catch(err => { console.log(err && err.message); setError(err && err.message); })
  }

  function loadMovies() {
    if (movies === null) {
      if (localStorage.getItem('movies')) {
        const stored = JSON.parse(localStorage.getItem('movies'));
        setMovies(stored);
        setIsEmpty(false);
        return Promise.resolve(stored);
      }
      else {
        setLoading(true);

        return api.getMovies()
          .then((movies) => {
            localStorage.setItem('movies', JSON.stringify(movies));
            setMovies(movies);
            setIsEmpty(false);
            return movies;
          })
          .catch(err => { console.log(err && err.message); setError(err && err.message); })
          .finally(() => setLoading(false));
      }
    }
    else {
      setIsEmpty(false);
      return Promise.resolve(movies);
    }
  }

  function clearMovies() {
    if (localStorage.getItem('movies'))
      localStorage.removeItem('movies');
  }

  return { isEmpty, searchMovies, clearMovies };
}
