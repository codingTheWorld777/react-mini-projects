import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config();

const REACT_APP_API_KEY = "AIzaSyBgFk7tpLnH4LiLRF_KHzdodFvQppwPSxQ";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 14,
        key: REACT_APP_API_KEY
    }
});
