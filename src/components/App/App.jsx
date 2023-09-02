import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from '../Main/Main';
import Movies from '../MovieLists/Movies/Movies';
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
import SavedMovies from '../MovieLists/SavedMovies/SavedMovies';

function App() {

  // const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  // const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  // const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  // const [toolTipText, setToolTipText] = React.useState('');
  // const [toolTipIsOk, setToolTipIsOk] = React.useState(true);
  // const [selectedCard, setSelectedCard] = React.useState(null);
  // const [deletingCard, setDeletingCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({ _id: 1 });
  //const [cards, setCards] = React.useState([]);
  //const [loggedData, setLoggedData] = React.useState({});
  //const [mainMenuData, setMainMenuData] = React.useState(getSignInMenuData());
  const [isLoading, setIsLoading] = React.useState(false);
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
    // {
    //   "id": 3,
    //   "nameRU": " Без обратного пути",
    //   "duration": "1ч 17м",
    //   "isLiked": true,
    //   "image": {
    //     "url": "https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg"
    //   }
    // },
    // {
    //   "id": 4,
    //   "nameRU": "Bassweight",
    //   "duration": "1ч 17м",
    //   "image": {
    //     "url": "https://api.nomoreparties.co/uploads/zagruzhennoe_113f557116.jpeg"
    //   }
    // },
    // {
    //   "id": 5,
    //   "nameRU": "Bassweight",
    //   "duration": "1ч 17м",
    //   "image": {
    //     "url": "https://api.nomoreparties.co/uploads/zagruzhennoe_113f557116.jpeg"
    //   }
    // },
    // {
    //   "id": 6,
    //   "nameRU": "Bassweight",
    //   "duration": "1ч 17м",
    //   "image": {
    //     "url": "https://api.nomoreparties.co/uploads/zagruzhennoe_113f557116.jpeg"
    //   }
    // },
    // {
    //   "id": 7,
    //   "nameRU": "Bassweight",
    //   "duration": "1ч 17м",
    //   "image": {
    //     "url": "https://api.nomoreparties.co/uploads/zagruzhennoe_113f557116.jpeg"
    //   }
    // },
    // {
    //   "id": 8,
    //   "nameRU": "Bassweight",
    //   "duration": "1ч 17м",
    //   "image": {
    //     "url": "https://api.nomoreparties.co/uploads/zagruzhennoe_113f557116.jpeg"
    //   }
    // },
    // {
    //   "id": 9,
    //   "nameRU": " Без обратного пути",
    //   "duration": "1ч 17м",
    //   "isLiked": true,
    //   "image": {
    //     "url": "https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg"
    //   }
    // },
    // {
    //   "id": 10,
    //   "nameRU": " Без обратного пути",
    //   "duration": "1ч 17м",
    //   "isLiked": true,
    //   "image": {
    //     "url": "https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg"
    //   }
    // },
    // {
    //   "id": 11,
    //   "nameRU": " Без обратного пути",
    //   "duration": "1ч 17м",
    //   "isLiked": true,
    //   "image": {
    //     "url": "https://api.nomoreparties.co/uploads/blur_a43fcf463d.jpeg"
    //   }
    // },
  ])

  const navigate = useNavigate();

  // React.useEffect(() => {
  //   handleTokenCheck();
  // }, [])

  // function handleTokenCheck() {

  //   if (localStorage.getItem('jwt')) {
  //     const jwt = localStorage.getItem('jwt');

  //     auth.checkToken(jwt)
  //       .then((res) => {
  //         setLoggedData(res);
  //         navigate("/", { replace: true });
  //         Promise.all([
  //           api.getUserInfo(),
  //           api.getInitialCards()
  //         ])
  //           .then(([user, cardList]) => {
  //             setCurrentUser(user);
  //             setCards(cardList);
  //           })
  //           .catch(err => { console.log(err); showError(); });
  //       })
  //       .catch(err => { console.log(err); showError(); });
  //   }
  // }

  // function handleSubmit(request, hideError = false) {
  //   setIsLoading(true);
  //   request()
  //     .then(closeAllPopups)
  //     .catch(err => { console.log(err); showError(hideError ? null : err); })
  //     .finally(() => setIsLoading(false));
  // }

  // function handleCardLike(card) {
  //   const isLiked = getIsUserLiked(card.likes, currentUser._id);

  //   api.toggleLike(card._id, !isLiked)
  //     .then((newCard) => {
  //       setCards(state => state.map(c => c._id === card._id ? newCard : c));
  //     })
  //     .catch(err => { console.log(err); showError(err); });
  // }

  // function handleCardDelete(card) {
  //   setDeletingCard(card);
  // }

  // function handleConfirmDelete() {
  //   handleSubmit(
  //     () => {
  //       return api.deleteCard(deletingCard._id)
  //         .then(() => {
  //           setCards(state => state.filter(c => c._id !== deletingCard._id));
  //         });
  //     });
  // }

  // function handleEditProfileClick() {
  //   setIsEditProfilePopupOpen(true);
  // }

  // function handleEditAvatarClick() {
  //   setIsEditAvatarPopupOpen(true);
  // }

  // function showError(error) {
  //   showToolTip(false, error);
  // }

  // function showToolTip(isOk, text) {
  //   setToolTipIsOk(isOk);
  //   if (text)
  //     setToolTipText(text);
  //   else
  //     isOk ? setToolTipText('Вы успешно зарегистрировались!') : setToolTipText('Что-то пошло не так! Попробуйте ещё раз.');
  // }

  // function handleUpdateUser(userProps) {
  //   handleSubmit(
  //     () => {
  //       return api.updateUserProps(userProps)
  //         .then(user => {
  //           setCurrentUser(user);
  //         });
  //     });
  // }

  // function handleUpdateAvatar(avatar) {
  //   handleSubmit(
  //     () => {
  //       return api.updateUserAvatar(avatar)
  //         .then(user => {
  //           setCurrentUser(user);
  //         });
  //     });
  // }

  // function handleAddCardSubmit(cardData) {
  //   handleSubmit(
  //     () => {
  //       return api.addCard(cardData)
  //         .then(newCard => {
  //           setCards([newCard, ...cards]);
  //         });
  //     });
  // }

  // function handleLogin(credentials) {
  //   handleSubmit(
  //     () => {
  //       return auth.signin(credentials)
  //         .then((res) => {
  //           if (res.token) {
  //             localStorage.setItem('jwt', res.token);

  //           }
  //         })
  //         .then(() => handleTokenCheck());
  //     }, true);
  // }

  // function handleRegister(credentials) {
  //   handleSubmit(
  //     () => {
  //       return auth.signup(credentials)
  //         .then((res) => {
  //           showToolTip(true);
  //           navigate('/sign-in', { replace: true });
  //         });
  //     }, true);
  // }

  // function handleAddPlaceClick() {
  //   setIsAddPlacePopupOpen(true);
  // }

  // function closeAllPopups() {
  //   setIsEditProfilePopupOpen(false);
  //   setIsAddPlacePopupOpen(false);
  //   setIsEditAvatarPopupOpen(false);
  //   setDeletingCard(null);
  //   setSelectedCard(null);
  //   setToolTipText('');
  // }

  // function handleCardClick(card) {
  //   setSelectedCard(card);
  // }

  // function getSignInMenuData() {
  //   return { email: '', btnText: 'Войти', onClick: () => { navigate('/sign-in', { replace: true }); } };
  // }

  // function getSignUpMenuData() {
  //   return { email: '', btnText: 'Регистрация', onClick: () => { navigate('/sign-up', { replace: true }); } };
  // }

  // function getSignOutMenuData() {
  //   return {
  //     email: loggedData?.email, btnText: 'Выйти', onClick: () => {
  //       if (localStorage.getItem('jwt'))
  //         localStorage.removeItem('jwt');
  //       setLoggedData({});
  //       navigate('/sign-in', { replace: true });
  //     }
  //   };
  // }


  function tmpSetUser() {
    setCurrentUser({ _id: 1 });
  }
  return (
    <LoadingContext.Provider value={{ isLoading }}>
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentMoviesContext.Provider value={currentMovies}>
          <div className="page">
            <Header />
            <Routes>
              <Route
                path="/"
                element={<Main />}
              />
              <Route
                path="/movies"
                element={<Movies tmpOnLoad={tmpSetUser} />}
              />
              <Route
                path="/saved-movies"
                element={<SavedMovies />}
              />
            </Routes>
            {/* <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute element={Main}
                  loggedIn={loggedData.email}
                  cards={cards}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onEditAvatar={handleEditAvatarClick}
                  onCardClick={handleCardClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                  menuDataHandler={setMainMenuData}
                  menuDataInstance={getSignOutMenuData()}
                />
              } />

            <Route
              path="/sign-in"
              element={<Login
                onSubmit={handleLogin}
                menuDataHandler={setMainMenuData}
                menuDataInstance={getSignUpMenuData()} />} />
            <Route
              path="/sign-up"
              element={<Register
                onSubmit={handleRegister}
                menuDataHandler={setMainMenuData}
                menuDataInstance={getSignInMenuData()} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes> */}
            <Footer />

            {/* <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onAddCard={handleAddCardSubmit}
          />

          <ImagePopup
            card={selectedCard}
          />

          <ConfirmPopup
            title="Вы уверены?"
            isOpen={deletingCard !== null}
            processingText="Удаление..."
            onConfirm={handleConfirmDelete}
          />
          <InfoTooltip
            isOK={toolTipIsOk}
            tooltip={toolTipText}
          /> */}

          </div>
        </CurrentMoviesContext.Provider>
      </CurrentUserContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
