import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";

export function ProtectedRoute({ children, isLoggedIn, ...props }) {
  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to="/login" />}</Route>
  );
}

// export function ProtectedRoute(children, isLoggedin) {
//   if (!isLoggedin) {
//     return <Redirect to="/login" />;
//   }
//   return children;
// }
