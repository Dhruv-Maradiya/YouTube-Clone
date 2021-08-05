import request from "../../api";
import {
  COMMENTS_FAIL,
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
} from "../actionTypes";

export const getCommentsById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COMMENTS_REQUEST,
    });
    const { data } = await request("/commentThreads", {
      params: {
        part: "snippet",
        videoId: id,
      },
    });
    dispatch({
      type: COMMENTS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: COMMENTS_FAIL,
      payload: error.mesaage,
    });
  }
};
