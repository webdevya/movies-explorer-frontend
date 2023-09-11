export default class CardViewModel {
  constructor({ card, isLiked }) {
    this.id = card.id;
    this.nameRU = card.nameRU;
    this.image = { url: 'https://api.nomoreparties.co' + card.image.url };
    this.isLiked = isLiked;
    this.trailerLink = card.trailerLink;
    this.duration = this._recalcDuration(card.duration);
  }

  _recalcDuration(duration) {
    if (duration < 60)
      return `${duration}м`;
    const hours = Math.trunc(duration / 60)
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  }
}
