import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config();

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 14,
        key: REACT_APP_API_KEY
    }
});
