import { baseUrl } from "../../utils/utils";
import { checkResponse } from "../../utils/utils";

const signup = ({ name, avatar, email, password }) => {
  const res = fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      avatar,
      email,
      password,
    }),
  }).then(() => checkResponse(res));
};

const login = ({ email, password }) => {
  const res = fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(() => checkResponse(res));
};

const checkToken = (jwt) => {
  const res = fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  }).then(() => checkResponse(res));
};

export { signup, login, checkToken };
