const searchPropsName = 'movies-search-props';
const emailInputTitle = 'Введите корректный адрес электронной почты';
const nameInputTitle = 'Используйте латиницу, кириллицу, пробел или дефис';
const nameRegex = '[a-zA-Zа-яА-Я\\-\\s]+';

const cardInitCount1280 = { countRows: 4, countCols: 3, countAddRow: 1 };
const cardInitCount768 = { countRows: 4, countCols: 2, countAddRow: 1 };
const cardInitCount320 = { countRows: 5, countCols: 1, countAddRow: 2 };

const brakeWidth1280 = 1279;
const brakeWidth768 = 767;

const shortMovieMaxDuration = 40;

const beatFilmsBaseUrl = 'https://api.nomoreparties.co';

const hidingPeriod = 3000;

export {
  searchPropsName,
  emailInputTitle,
  nameInputTitle,
  nameRegex,
  cardInitCount1280,
  cardInitCount768,
  cardInitCount320,
  beatFilmsBaseUrl,
  hidingPeriod,
  brakeWidth1280,
  brakeWidth768,
  shortMovieMaxDuration,
}
