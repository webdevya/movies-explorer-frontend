import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Movies from "../../MovieLists/Movies/Movies";
import './movies-page.css'



function MoviesPage({ errorText, setLoading, setError }) {
  return (
    <div className="movies-page">
      <Header />
      <Movies
        errorText={errorText}
        setLoading={setLoading}
        setError={setError}
      />
      <Footer />
    </div>
  );
}
export default MoviesPage;
