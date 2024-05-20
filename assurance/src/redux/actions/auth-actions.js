import {loginApi} from "../../controllers/ApiUser"
import storage from "../../config/storage";
import { AUTH_KEY } from "../../config/config";
import { jwtDecode } from "jwt-decode";

export function isLoading(bool) {
  return {
    type: "LOGIN_ATTEMPT",
    isLoading: bool,
  };
}

export function loginSuccess(userData) {
  return {
    type: "LOGIN_SUCCESS",
    userData,
  };
}

export function loginFailed(error) {
  return {
    type: "LOGIN_FAILED",
    error,
  };
}

export function login(username, password) {
  return (dispatch) => {
    dispatch(isLoading(true));
    return loginApi(username, password)
      .then((response) => {
        console.log(response , "auth action");
        if (response.ok) {
          dispatch(isLoading(false));
          const user = jwtDecode(response.data.token);
          dispatch(loginSuccess(user));
          storage.storeKey(AUTH_KEY, response.data.token);
        } else {
          dispatch(isLoading(false));
          dispatch(loginFailed(response.data.msg));
        }
      })
      .catch((error) => {
        dispatch(isLoading(false));
        dispatch(loginFailed(error));
      });
  };
}

export const persistantLogin = (user) => {
  return loginSuccess(user);
};