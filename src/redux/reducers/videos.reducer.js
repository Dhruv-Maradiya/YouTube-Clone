import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SELECTED_VIDEOS_FAIL,
  SELECTED_VIDEOS_REQUEST,
  SELECTED_VIDEOS_SUCCESS,
} from "../actionTypes";

export const homeVideosReducer = (
  state = {
    videos: [],
    nextPageToken: null,
    loading: false,
    activeCategory: "All",
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        nextPageToken: payload.nextPageToken,
        loading: false,
        activeCategory: payload.category,
      };
    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const selectedVideoReducer = (
  state = {
    loading: false,
    video: null,
  },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case SELECTED_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SELECTED_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        video: payload,
      };
    case SELECTED_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        video: null,
        error: payload,
      };

    default:
      return state;
  }
};
