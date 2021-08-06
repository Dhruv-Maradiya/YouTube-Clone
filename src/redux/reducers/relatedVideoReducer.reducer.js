import {
  RELATED_VIDEO_FAIL,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
} from "../actionTypes";

export const relatedVideoReducer = (
  state = {
    loadingRelated: false,
    videos: null,
  },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case RELATED_VIDEO_REQUEST:
      return {
        ...state,
        loadingRelated: true,
      };
    case RELATED_VIDEO_SUCCESS:
      return {
        ...state,
        loadingRelated: false,
        videos: payload,
      };
    case RELATED_VIDEO_FAIL:
      return {
        ...state,
        loadingRelated: false,
        error: payload,
      };

    default:
      return state;
  }
};
