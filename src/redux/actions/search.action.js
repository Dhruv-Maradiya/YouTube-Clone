import request from "../../api";
import {
  SEARCH_VIDEO_FAIL,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_SUCCESS,
} from "../actionTypes";

export const getVideosByKeyword = (keyWord) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SEARCH_VIDEO_REQUEST,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        q: keyWord,
        maxResults: 20,
        type: "video",
        pageToken: getState().searchVideo.nextPageToken,
      },
    });
    console.log(data);
    dispatch({
      type: SEARCH_VIDEO_SUCCESS,
      payload: { data, keyWord },
      payload: {
        keyWord: keyWord,
        items: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SEARCH_VIDEO_FAIL,
      payload: error.message,
    });
  }
};
