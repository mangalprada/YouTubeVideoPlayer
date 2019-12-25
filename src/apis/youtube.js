import axios from "axios";

const KEY = "AIzaSyBT0kSDKW4mLC1AxD9_v27LwXqulEJam8U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY
  }
});
