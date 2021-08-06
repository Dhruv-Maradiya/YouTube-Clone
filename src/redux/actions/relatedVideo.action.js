import request from "../../api";
import {
  RELATED_VIDEO_FAIL,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
} from "../actionTypes";

export const getRelatedVideo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RELATED_VIDEO_REQUEST,
    });
    const data = await request("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 20,
        type: "video",
      },
    });
    dispatch({
      type: RELATED_VIDEO_SUCCESS,
      payload: data.data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: RELATED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};
