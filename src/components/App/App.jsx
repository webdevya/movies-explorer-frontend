import { api } from "../../utils/Api.js";
import { auth } from "../../utils/Auth"
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import { NavigateContext } from '../../contexts/NavigateContext';

import LandingPage from '../Pages/LandingPage/LandingPage';
import MoviesPage from '../Pages/MoviesPage/MoviesPage';
import SavedMoviesPage from '../Pages/SavedMoviesPage/SavedMoviesPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import MenuPopup from '../MenuPopup/MenuPopup';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import useMovies from './../../hooks/useMovies'
import useSavedState from "../../hooks/useSavedState";
import { searchPropsName } from '../../utils/consts';
import { ConvertToSavedMovieModel } from '../../utils/movieConverter';
import useHidingText from '../../hooks/useHidingText';
import { hidingPeriod } from '../../utils/consts';

function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [errorText, setErrorText] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isProfileEditMode, setIsProfileEditMode] = React.useState(false)
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [profileInfoText, setProfileInfoText] = React.useState('');

  const navigate = useNavigate();

  React.useEffect(() => {

    handleTokenCheck(false);
  }, [])

  const searchSave = useSavedState(searchPropsName);
  const moviesHook = useMovies({ setLoading: setIsLoading, setError: setErrorText });
  const profileInformer = useHidingText(hidingPeriod)

  function handleTokenCheck(navigateAfterCheck = true) {

    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');

      auth.checkToken(jwt)
        .then(() => {
          return Promise.all(
            [api.getUserInfo(),
            api.getAllMovies(),
            ]
          ).then(([user, movies]) => {
            setCurrentUser(user);
            setIsLoggedIn(user.email);
            setSavedMovies(movies);
          })
            .then(() => navigateAfterCheck && navigate("/movies", { replace: true }))
            .catch(err => { setIsLoggedIn(false); console.log(err && err.message); showError(err); });
        })
        .catch(err => { setIsLoggedIn(false); console.log(err && err.message); showError(); });
    }
    else
      setIsLoggedIn(false);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }
  function onProfileUpdate({ name, email }) {
    handleRequest(
      () => {
        return api.updateUserProps({ name, email })
          .then((user) => {
            setCurrentUser(user);
            setIsProfileEditMode(false);
            profileInformer.setText({ setter: setProfileInfoText, text: 'Данные обновлены' });
          })
          .catch(err => { console.log(err.message); showError(err); });
      });

  }


  function onProfileExit() {
    if (localStorage.getItem('jwt'))
      localStorage.removeItem('jwt');
    setCurrentUser({});
    searchSave.clearData();
    moviesHook.clearMovies();
    navigate('/', { replace: true });
  }

  function showError(error) {
    setErrorText(error && error.message);
  }

  function handleRequest(request, hideError = false) {
    setErrorText('');
    setIsLoading(true);
    request()
      .catch(err => { console.log(err && err.message); showError(err); })
      .finally(() => setIsLoading(false));
  }

  function onRegister({ name, email, password }) {
    handleRequest(
      () => {
        return auth.signup({ name, email, password })
          //.then(() => navigate('/signin', { replace: true }))
          .then(() => onLogin({ email, password }))
          .catch(err => { console.log(err && err.message); showError(err); });
      }, true);
  }

  function onLogin({ email, password }) {
    handleRequest(
      () => {
        return auth.signin({ email, password })
          .then((res) => {
            if (res.token) {
              return localStorage.setItem('jwt', res.token);
            }
          })
          .then(() => handleTokenCheck())
          .catch(err => { console.log(err && err.message); showError(err); });
      }, true);
  }

  function onToggleLike(card) {
    if (card.isLiked) {
      handleRequest(
        () => {
          return api.deleteMovie(card.savedId)
            .then(() => {
              setSavedMovies(savedMovies.filter(x => x._id !== card.savedId));
              card.setSaved(null);
              return card;
            })
            .catch(err => { console.log(err && err.message); showError(err); });
        }, false);
    }
    else {
      const savedModel = ConvertToSavedMovieModel(card.movie);
      handleRequest(
        () => {
          return api.saveMovie(savedModel)
            .then((res) => {
              card.setSaved(res._id);
              setSavedMovies([res, ...savedMovies]);
              return card;
            })
            .catch(err => { console.log(err && err.message); showError(err); });
        }, false);
    }
  }

  function onSigninClick() {
    NavigateFromMenu('/signin', true);
  }

  function onRegisterClick() {
    NavigateFromMenu('/signup', true);
  }

  function onMainClick() {
    NavigateFromMenu('/');
  }

  function onMoviesClick() {
    NavigateFromMenu('/movies');
  }

  function onSavedMoviesClick() {
    NavigateFromMenu('/saved-movies');
  }

  function onProfileClick() {
    NavigateFromMenu('/profile');
  }

  function NavigateFromMenu(route, replaceRoute = false) {
    navigate(route, { replace: replaceRoute });
    setIsMenuOpen(false);
    setIsProfileEditMode(false);
    setErrorText('');
  }

  function onMenuClick() {
    setIsMenuOpen(true);
  }

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      <CurrentUserContext.Provider value={currentUser}>
        <SavedMoviesContext.Provider value={savedMovies}>
          <NavigateContext.Provider value={{ onMainClick, onMoviesClick, onSavedMoviesClick, onProfileClick, onMenuClick, onRegisterClick, onSigninClick }}>
            <div className="page">
              <Routes>
                <Route
                  path="/"
                  element={<LandingPage />}
                />

                <Route
                  path="/movies"
                  element={
                    <ProtectedRoute element={MoviesPage}
                      loggedIn={isLoggedIn}//{currentUser.email}
                      errorText={errorText}
                      setLoading={setIsLoading}
                      setError={setErrorText}
                      toggleLike={onToggleLike}
                    />
                  } />

                <Route
                  path="/saved-movies"
                  element={
                    <ProtectedRoute element={SavedMoviesPage}
                      loggedIn={isLoggedIn}//{currentUser.email}
                      errorText={errorText}
                      toggleLike={onToggleLike}
                    />
                  } />

                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute element={ProfilePage}
                      loggedIn={isLoggedIn}//{currentUser.email}
                      onProfileUpdate={onProfileUpdate}
                      onProfileExit={onProfileExit}
                      isEditMode={isProfileEditMode}
                      setIsEditMode={setIsProfileEditMode}
                      errorText={errorText}
                      infoText={profileInfoText}
                    />
                  } />

                <Route
                  path="/signup"
                  element={<RegisterPage
                    onRegister={onRegister}
                    errorText={errorText}
                    checkToken={handleTokenCheck}
                  />}

                />

                <Route
                  path="/signin"
                  element={<LoginPage
                    onLogin={onLogin}
                    errorText={errorText}
                    checkToken={handleTokenCheck}
                  />}
                />
                <Route
                  path="*"
                  element={<NotFoundPage />}
                />
              </Routes>
              <MenuPopup
                isOpen={isMenuOpen}
                onClose={closeMenu}
              />
            </div>
          </NavigateContext.Provider>
        </SavedMoviesContext.Provider>
      </CurrentUserContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
