import React from "react";

const CurrentUserContext = React.createContext({
  name: "",
  email: "",
  avatar: "",
  _id: "",
});

export { CurrentUserContext };
