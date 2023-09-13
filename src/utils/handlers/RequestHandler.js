export default class RequestHandler {
  constructor({ setErrorText, setIsLoading }) {
    this.setErrorText = setErrorText;
    this._setIsLoading = setIsLoading;
  }


  handleRequest(request, hideError = false) {
    this.setErrorText('');
    this._setIsLoading(true);
    request()
      .catch(err => this.handleError(err))
      .finally(() => this._setIsLoading(false));
  }

  handleError(error) {
    console.log(error && error.message);
    this.setErrorText(error && error.message);
  }

}
