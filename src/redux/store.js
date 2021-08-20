import { createStore, applyMiddleware, combineReducers } from "redux";
import { authReducer } from "./reducers/auth.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  homeVideosReducer,
  selectedVideoReducer,
} from "./reducers/videos.reducer";
import { channelDetailReducer } from "./reducers/channel.reducer";
import { commentReducer } from "./reducers/comments.reducer";
import { relatedVideoReducer } from "./reducers/relatedVideoReducer.reducer";
import { searchVideoByKeywordReducer } from "./reducers/searchVideosReducer.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailReducer,
  commentReducer: commentReducer,
  relatedVideos: relatedVideoReducer,
  searchVideo: searchVideoByKeywordReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
