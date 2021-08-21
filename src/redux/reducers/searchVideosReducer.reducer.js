import {
  SEARCH_VIDEO_FAIL,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_SUCCESS,
} from "../actionTypes";

export const searchVideoByKeywordReducer = (
  state = {
    loadingSearch: false,
    videos: null,
    nextPageToken: null,
    keyWord: null,
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
      // console.log([...state.videos, payload.data.items]);
      return {
        ...state,
        loadingSearch: false,
        videos:
          payload.keyWord === state.keyWord
            ? [...state.videos, ...payload.items]
            : payload.items,
        nextPageToken: payload.nextPageToken,
        keyWord: payload.keyWord,
      };
    case SEARCH_VIDEO_FAIL:
      return {
        ...state,
        loadingSearch: false,
        error: payload.data,
      };

    default:
      return state;
  }
};
