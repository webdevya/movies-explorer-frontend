import React from "react";
import { Link } from "react-router-dom";
import './logo.css';
import Preloader from "../Common/Preloader/Preloader";

function Logo({ isLoading, mixinClassName }) {
  return (
    <Link className={`logo link ${!isLoading && 'logo_with-img'} ${mixinClassName}`} to='/'>
      {isLoading && <Preloader />}
    </Link>
  );
}
export default Logo;
