import api from "./ApiConfig";

export const loginApi = (username, password) =>
  api.post("user/login", {
    username,
    password,
  });

export const signupApi = (username, password, phone, email, role, firstName, lastName) =>
  api.post("user/signup", {
 username, password, phone, email, role, firstName, lastName
  });