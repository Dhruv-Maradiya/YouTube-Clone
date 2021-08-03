import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionTypes";

const initialState = {
  accessToken: sessionStorage.getItem("ytc-accessToken")
    ? sessionStorage.getItem("ytc-accessToken")
    : null,
  user: sessionStorage.getItem("ytc-user")
    ? JSON.parse(sessionStorage.getItem("ytc-user"))
    : null,
  loading: false,
};

export const authReducer = (preveState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...preveState,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...preveState,
        accessToken: payload,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...preveState,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case LOAD_PROFILE:
      return {
        ...preveState,
        user: payload,
      };
    case LOG_OUT:
      return {
        ...preveState,
        accessToken: null,
        user: null,
      };
    default:
      return preveState;
  }
};
