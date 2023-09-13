export default class BaseCardViewModel {

  setSaved(savedId) {
    this.savedId = savedId;
    this.isLiked = savedId;
  }

  _recalcDuration(duration) {
    if (duration < 60)
      return `${duration}м`;
    const hours = Math.trunc(duration / 60)
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  }
}
