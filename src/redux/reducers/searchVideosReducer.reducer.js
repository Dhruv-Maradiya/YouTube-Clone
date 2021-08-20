import {
  SEARCH_VIDEO_FAIL,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_SUCCESS,
} from "../actionTypes";

export const searchVideoByKeywordReducer = (
  state = {
    loadingSearch: false,
    videos: null,
  },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case SEARCH_VIDEO_REQUEST:
      return {
        ...state,
        loadingSearch: true,
      };
    case SEARCH_VIDEO_SUCCESS:
      return {
        ...state,
        loadingSearch: false,
        videos: payload,
      };
    case SEARCH_VIDEO_FAIL:
      return {
        ...state,
        loadingSearch: false,
        error: payload,
      };

    default:
      return state;
  }
};
