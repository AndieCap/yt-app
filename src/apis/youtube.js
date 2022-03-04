import axios from 'axios';  

const KEY = 'AIzaSyAwpQLh-YtPYAfhbMomHwwPsNqLlr1m8us'
const baseUrl ='https://www.googleapis.com/youtube/v3/search'

export default axios.create(
    {
       baseURL: baseUrl,
       params: {
           part: 'snippet',
           type: 'video',
           maxResults: 5,
           key: KEY
       } 
    }
);
