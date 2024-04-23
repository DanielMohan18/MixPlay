import axios from 'axios';
const BASE_URL ='https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
      part: 'snippet',
      maxResults: 50,
      videoId: 'M7FIvfx5J10'
    },
    headers: {
      'X-RapidAPI-Key': "e108d60529msh352bc406d76a1c7p179099jsn542ba9ec7a60",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI= async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);

    return data;
  }
  
  