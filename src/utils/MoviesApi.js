import ApiBase from "./ApiBase";

class MoviesApi extends ApiBase {
  constructor({ baseUrl, headers },) {
    super({ baseUrl, headers });
  }

  getMovies() {
    return super.getDataJson('', false);
  }
}

const api = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export { api };
