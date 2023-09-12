import BaseCardViewModel from "./BaseCardViewModel";

export default class SavedCardViewModel extends BaseCardViewModel {
  constructor({ card }) {
    super();
    this.id = card.movieId;
    this.nameRU = card.nameRU;
    this.image = { url: card.image };
    this.trailerLink = card.trailerLink;
    this.duration = this._recalcDuration(card.duration);
    this.savedId = card._id;
    this.isLiked = card._id;
  }
}
