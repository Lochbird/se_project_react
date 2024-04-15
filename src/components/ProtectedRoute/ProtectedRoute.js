import React from "react";
import { Redirect } from "react-router-dom";

export function protectedRoute(children, isLoggedin) {
  if (!isLoggedin) {
    return <Redirect to="/login" />;
  }
  return children;
}
