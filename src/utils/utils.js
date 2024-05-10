export const baseUrl = "http://localhost:3001";

export const checkResponse = (res) => {
  if (res.ok) {
    console.log(res, "response is ok");
    return res.json();
  }
  console.log(res, "response is not ok");
  return Promise.reject(`Error: ${res.status}`);
};
