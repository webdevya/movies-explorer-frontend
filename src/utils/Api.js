import ApiBase from "./ApiBase";
//import { localUrls } from './indexConstants.js';


class Api extends ApiBase {
  constructor({ baseUrl,
    headers,
  }, { userLocalUrl, moviesLocalUrl }) {
    super({ baseUrl, headers });

    //this._cardLikeLocalUrl = cardLikeLocalUrl;
    this._userLocalUrl = userLocalUrl;

    this._moviesLocalUrl = moviesLocalUrl;
  }

  // getInitialCards() {
  //   return super.getDataJson(this._cardLocalUrl, true);
  // }

  getAllMovies() {
    return super.getDataJson(this._moviesLocalUrl, true);
  }

  getUserInfo() {
    return super.getDataJson(this._userLocalUrl, true);
  }

  updateUserProps(userProps) {
    return super.updateData(this._userLocalUrl, userProps, null, true);
  }

  saveMovie(movie) {
    return super.addData(this._moviesLocalUrl, movie, true);
  }

  deleteMovie(movieId) {
    return super.deleteData(this._moviesLocalUrl, movieId, true);
  }

  // updateUserAvatar(avatar) {
  //   return super.updateData(this._userAvatarLocalUrl, { avatar }, null, true);
  // }

  // addCard({ name, link }) {
  //   return super.addData(this._cardLocalUrl, { name, link }, true);
  // }

  // deleteCard(id) {
  //   return super.deleteData(this._cardLocalUrl, id, true);
  // }

  // setLike(id) {
  //   return super.putData(this._cardLocalUrl, null, `${id}/${this._cardLikeLocalUrl}`, true)
  // }

  // deleteLike(id) {
  //   return super.deleteData(this._cardLocalUrl, `${id}/${this._cardLikeLocalUrl}`, true)
  // }

  // toggleLike(id, isLike) {
  //   return (isLike ? this.setLike(id) : this.deleteLike(id));
  // }
}
// const localUrls = { cardLocalUrl: 'cards', cardLikeLocalUrl: 'likes', userLocalUrl: 'users/me', userAvatarLocalUrl: 'users/me/avatar' }
const localUrls = { userLocalUrl: 'users/me', moviesLocalUrl: 'movies' }

const api = new Api({
  baseUrl: 'https://api.movies.webdevya.nomoreparties.co/',
  headers: {
    'Content-Type': 'application/json'
  }
}, localUrls);

export { api };
