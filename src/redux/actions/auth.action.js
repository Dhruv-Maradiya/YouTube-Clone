import auth from "../../firebase.js";
import firebase from "firebase/app";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionTypes.js";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
    const res = await auth.signInWithPopup(provider);
    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.name,
      url: res.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem("ytc-accessToken", accessToken);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });
    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};
export const log_out = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: LOG_OUT,
  });
  sessionStorage.removeItem("ytc-accessToken");
  sessionStorage.removeItem("ytc-user");
};
