import request from "../../api";
import {
  SEARCH_VIDEO_FAIL,
  SEARCH_VIDEO_REQUEST,
  SEARCH_VIDEO_SUCCESS,
} from "../actionTypes";

export const getVideosByKeyword = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_VIDEO_REQUEST,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        q: keyword,
        maxResults: 300,
        type: "video",
      },
    });
    dispatch({
      type: SEARCH_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SEARCH_VIDEO_FAIL,
      payload: error.message,
    });
  }
};
