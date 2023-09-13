import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SavedMovies from "../../MovieLists/SavedMovies/SavedMovies";




function SavedMoviesPage({ errorText, toggleLike }) {
  return (
    <div >
      <Header />
      <SavedMovies
        errorText={errorText}
        toggleLike={toggleLike}
      />
      <Footer />
    </div>
  );
}
export default SavedMoviesPage;
