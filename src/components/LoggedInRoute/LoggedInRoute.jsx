import React from 'react';
import { Navigate } from "react-router-dom";

const LoggedInRoute = ({ element: Component, ...props }) => {

  React.useEffect(() => { }, [])
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to="/" replace />
  )
}

export default LoggedInRoute;
