import { api } from "../../utils/Api.js";
import { auth } from "../../utils/Auth";

import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
// import ProtectedRoute from "../../utils/ProtectedRoute.jsx";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import { CurrentMoviesContext } from '../../contexts/CurrentMoviesContext';
import { NavigateContext } from '../../contexts/NavigateContext';

import LandingPage from '../Pages/LandingPage/LandingPage';
import MoviesPage from '../Pages/MoviesPage/MoviesPage';
import SavedMoviesPage from '../Pages/SavedMoviesPage/SavedMoviesPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import MenuPopup from '../MenuPopup/MenuPopup';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [errorText, setErrorText] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isProfileEditMode, setIsProfileEditMode] = React.useState(false)
  const [currentMovies, setCurrentMovies] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    handleTokenCheck();
  }, [])


  function handleTokenCheck() {

    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');

      auth.checkToken(jwt)
        .then(() => {
          return api.getUserInfo()
            .then((user) => setCurrentUser(user))
            .then(() => navigate("/movies", { replace: true }))
            .catch(err => { console.log(err); showError(); });
        })
        .catch(err => { console.log(err); showError(); });
    }
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
          })
          .catch(err => { console.log(err); showError(); });
      });

  }


  function onProfileExit() {
    if (localStorage.getItem('jwt'))
      localStorage.removeItem('jwt');
    setCurrentUser({});
    navigate('/', { replace: true });
  }

  function showError(error) {
    setErrorText(error);
  }

  function handleRequest(request, hideError = false) {
    setErrorText('');
    setIsLoading(true);
    request()
      .catch(err => { console.log(err); showError(err); })
      .finally(() => setIsLoading(false));
  }

  function onRegister({ name, email, password }) {
    handleRequest(
      () => {
        return auth.signup({ name, email, password })
          .then(() => navigate('/signin', { replace: true }))
          .catch(err => { console.log(err); showError(err); });
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
          .catch(err => { console.log(err); showError(err); });
      }, true);
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
  }

  function onMenuClick() {
    setIsMenuOpen(true);
  }

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentMoviesContext.Provider value={currentMovies}>
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
                      loggedIn={currentUser.email}
                      errorText={errorText}
                      setLoading={setIsLoading}
                      setError={setErrorText}
                    />
                  } />

                <Route
                  path="/saved-movies"
                  element={
                    <ProtectedRoute element={SavedMoviesPage}
                      loggedIn={currentUser.email}
                      errorText={errorText}
                    />
                  } />

                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute element={ProfilePage}
                      loggedIn={currentUser.email}
                      onProfileUpdate={onProfileUpdate}
                      onProfileExit={onProfileExit}
                      isEditMode={isProfileEditMode}
                      setIsEditMode={setIsProfileEditMode}
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
        </CurrentMoviesContext.Provider>
      </CurrentUserContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
