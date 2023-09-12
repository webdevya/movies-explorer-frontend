import ApiBase from "./ApiBase";
class Auth extends ApiBase {
  constructor({ baseUrl, headers },
    { signinUrl, signupUrl, userLocalUrl }) {
    super({ baseUrl, headers });
    this._signinUrl = signinUrl;
    this._signupUrl = signupUrl;
    this._userLocalUrl = userLocalUrl;
  }

  checkToken(jwt) {
    return super.getDataJson(this._userLocalUrl, true);
  }

  signup({ name, email, password }) {
    return super.addData(this._signupUrl, { name, password, email });
  }

  signin({ email, password }) {
    return super.addData(this._signinUrl, { password, email });
  }

}
const localUrls = { signinUrl: 'signin', signupUrl: 'signup', userLocalUrl: 'users/me' }

const auth = new Auth({
  baseUrl: 'https://api.movies.webdevya.nomoreparties.co/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}, localUrls);

export { auth };
