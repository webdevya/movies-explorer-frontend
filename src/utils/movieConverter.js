import { beatFilmsBaseUrl } from './consts';

function ConvertToSavedMovieModel(movie) {
  const savedMovie = {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: beatFilmsBaseUrl + movie.image.url,
    trailerLink: movie.trailerLink,
    thumbnail: beatFilmsBaseUrl + movie.image.formats.thumbnail.url,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN
  }

  return savedMovie;
}

export { ConvertToSavedMovieModel };
