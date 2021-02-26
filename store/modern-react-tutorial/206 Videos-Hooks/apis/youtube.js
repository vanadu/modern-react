import axios from 'axios';

const KEY = 'AIzaSyCk2Q_6phTIMRePwojX1d5JKtf1uCpf1KY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
  
});

