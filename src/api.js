import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDPeCHuP4EIMhxvPtlgzQLmbCsBjgrRlYQ",
  },
});

export default request;

// "AIzaSyDPeCHuP4EIMhxvPtlgzQLmbCsBjgrRlYQ",    dhruvmaradiya0
// "AIzaSyCi84HFuCJjtXx5UTARVO6Lb2ZeKUwGevY",    dhruvmaradiyar
// "AIzaSyApceSRpsTg5MLzbO0oY1wkVkJ3pR0Qkok",    maradiyadhruv0
