
// import Main from './Main';
// import ImagePopup from './ImagePopup';
// import EditProfilePopup from './EditProfilePopup';
// import AddPlacePopup from './AddPlacePopup';
// import { api } from "../utils/Api.js";
// import { auth } from "../utils/Auth.js";

import React from 'react';
//import { getIsUserLiked } from '../utils/likesHandler.js';
//import EditAvatarPopup from './EditAvatarPopup';
//import ConfirmPopup from './ConfirmPopup';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
//import ProtectedRoute from "../..utils/ProtectedRoute";
//import Login from './Login';
//import Register from './Register';
//import InfoTooltip from './InfoTooltip';
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

function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [errorText, setErrorText] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isProfileEditMode, setIsProfileEditMode] = React.useState(false)
  const [currentMovies, setCurrentMovies] = React.useState([
    {
      "id": 1,
      "nameRU": "«Роллинг Стоунз» в изгнании в изгнании в изгнании в изгнании",
      "duration": "1ч 17м",
      "image": {
        "url": "https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg"
      }
    },
    {
      "id": 2,
      "nameRU": "All Tomorrow's Parties",
      "duration": "1ч 17м",
      "isLiked": true,
      "image": {
        "url": "https://api.nomoreparties.co/uploads/all_tommoros_parties_33a125248d.jpeg"
      }
    },
    {
      "id": 3,
      "nameRU": " Без обратного пути",
      "duration": "1ч 17м",
      "isLiked": true,
      "image": {
        "url": "https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg"
      }
    },
    {
      "id": 4,
      "nameRU": "Bassweight",
      "duration": "1ч 17м",
      "image": {
        "url": "https://api.nomoreparties.co/uploads/zagruzhennoe_113f557116.jpeg"
      }
    },
    {
      "id": 5,
      "nameRU": "Bassweight",
      "duration": "1ч 17м",
      "image": {
        "url": "https://api.nomoreparties.co/uploads/zagruzhennoe_113f557116.jpeg"
      }
    },
    {
      "id": 6,
      "nameRU": "Bassweight",
      "duration": "1ч 17м",
      "image": {
        "url": "https://api.nomoreparties.co/uploads/zagruzhennoe_113f557116.jpeg"
      }
    },
    {
      "id": 7,
      "nameRU": "Bassweight",
      "duration": "1ч 17м",
      "image": {
        "url": "https://api.nomoreparties.co/uploads/zagruzhennoe_113f557116.jpeg"
      }
    },
    {
      "id": 8,
      "nameRU": "Bassweight",
      "duration": "1ч 17м",
      "image": {
        "url": "https://api.nomoreparties.co/uploads/zagruzhennoe_113f557116.jpeg"
      }
    },
    {
      "id": 9,
      "nameRU": " Без обратного пути",
      "duration": "1ч 17м",
      "isLiked": true,
      "image": {
        "url": "https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg"
      }
    },
    {
      "id": 10,
      "nameRU": " Без обратного пути",
      "duration": "1ч 17м",
      "isLiked": true,
      "image": {
        "url": "https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg"
      }
    },
    {
      "id": 11,
      "nameRU": " Без обратного пути",
      "duration": "1ч 17м",
      "isLiked": true,
      "image": {
        "url": "https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg"
      }
    },
  ])

  const navigate = useNavigate();


  function closeMenu() {
    setIsMenuOpen(false);
  }
  function onProfileUpdate({ name, email }) {
    setCurrentUser({ ...currentUser, name: name, email: email })
    setIsProfileEditMode(false);
  }

  function onProfileExit() {
    setCurrentUser({});
    navigate('/', { replace: true });
  }

  function onRegister({ name, email, password }) {
    console.log(name, email, password);
    navigate('/signin', { replace: true });
  }


  function onLogin({ email, password }) {
    setCurrentUser({ _id: 1, name: 'Прокопий', email: email, password: password })
    navigate('/movies', { replace: true });
    // Promise.resolve(setCurrentUser({ _id: 1, name: 'Прокопий', email: email, password: password }))
    //   .then(() => { navigate('/movies', { replace: true }); });

  }
  function onSigninClick() {
    navigate('/signin', { replace: true });
    setIsMenuOpen(false);
  }

  function onRegisterClick() {
    navigate('/signup', { replace: true });
    setIsMenuOpen(false);
  }

  function onMainClick() {
    navigate('/', { replace: true });
    setIsMenuOpen(false);
  }

  function onMoviesClick() {
    navigate('/movies', { replace: true });
    setIsMenuOpen(false);
  }

  function onSavedMoviesClick() {
    navigate('/saved-movies', { replace: true });
    setIsMenuOpen(false);
  }

  function onProfileClick() {
    navigate('/profile', { replace: true });
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
                  element={<MoviesPage />}
                />
                <Route
                  path="/saved-movies"
                  element={<SavedMoviesPage />}
                />
                <Route
                  path="/profile"
                  element={<ProfilePage
                    onProfileUpdate={onProfileUpdate}
                    onProfileExit={onProfileExit}
                    isEditMode={isProfileEditMode}
                    setIsEditMode={setIsProfileEditMode}
                  />}
                />
                <Route
                  path="/signup"
                  element={<RegisterPage
                    onRegister={onRegister}
                    errorText={errorText}
                  />}

                />
                <Route
                  path="/signin"
                  element={<LoginPage
                    onLogin={onLogin}
                    errorText={errorText}
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
