import TransparentButton from "../../Common/Buttons/TransparentButton/TransparentButton";
import { useNavigate } from "react-router-dom";
import './not-found.css';

function NotFoundPage() {

  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  return (
    <main className="not-found">
      <h1 className="not-found__code">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <TransparentButton
        mixinClassName="transparent-button_type_blue-text not-found-btn-placeholder"
        btnText="Назад"
        onClick={goBack}
      />
    </main>
  );
}
export default NotFoundPage;
