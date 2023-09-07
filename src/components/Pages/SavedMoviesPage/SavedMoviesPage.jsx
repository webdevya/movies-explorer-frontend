import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SavedMovies from "../../MovieLists/SavedMovies/SavedMovies";




function SavedMoviesPage({ errorText }) {
  return (
    <div >
      <Header />
      <SavedMovies
        errorText={errorText}
      />
      <Footer />
    </div>
  );
}
export default SavedMoviesPage;
