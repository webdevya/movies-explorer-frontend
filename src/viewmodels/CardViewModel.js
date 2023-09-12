import BaseCardViewModel from "./BaseCardViewModel";

export default class CardViewModel extends BaseCardViewModel {
  constructor({ card, savedId }) {

    super();

    this.id = card.id;
    this.nameRU = card.nameRU;
    this.image = { url: 'https://api.nomoreparties.co' + card.image.url };
    this.trailerLink = card.trailerLink;
    this.duration = this._recalcDuration(card.duration);
    this.movie = card;
    this.savedId = savedId;
    this.isLiked = savedId;
  }
}
