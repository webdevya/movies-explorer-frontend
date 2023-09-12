import RequestHandler from "./RequestHandler";
import { ConvertToSavedMovieModel } from '../movieConverter';
import { api } from '../Api';

export class MovieHandler extends RequestHandler {
  constructor({ setErrorText, setIsLoading }) {
    super({ setErrorText, setIsLoading });
  }

  onToggleLike(card) {
    if (card.isLiked) {
      super.handleRequest(
        () => {
          return api.deleteMovie(card.savedId)
            .then(() => { card.setSaved(null); return card; })
            .catch(err => super.handleError(err));
        }, false);
    }
    else {
      const savedModel = ConvertToSavedMovieModel(card.movie);
      super.handleRequest(
        () => {
          return api.saveMovie(savedModel)
            .then((res) => { card.setSaved(res._id); return card; })
            .catch(err => super.handleError(err));
        }, false);
    }

  }
}
