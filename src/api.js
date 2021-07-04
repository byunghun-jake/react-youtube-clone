import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

const youtubeAPI = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: API_KEY,
    part: "snippet",
    type: "video",
  },
})

export const getPopularVideos = () =>
  youtubeAPI.get("videos", {
    params: {
      chart: "mostPopular",
      maxResults: 20,
      regionCode: "KR",
    },
  })

export const getSearchResults = (q) =>
  youtubeAPI.get("search", {
    params: {
      q,
    },
  })

export const getVideo = (id) =>
  youtubeAPI.get("videos", {
    params: {
      id,
    },
  })
