import { useEffect, useState} from 'react';
import youtube from '../apis/youtube';

const useVideos= (defaultSearchTerm) => {

  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search  = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    }); 
    // !VA Works
    // console.log(response);
    // !VA set state to response.data.items
    // !VA 135 To get rid of th loading message if the video displays immediately, preset the selectedVideo property of state to the first item in the array.
    // !VA This is where the search callback is added that is called whenever the form is submitted. Term is the search term. The youtube call is documented in 119.
    // !VA 124 Async/await.   
    // !VA 208
    // this.setState({ 
    //   videos: response.data.items,
    //   selectedVideo: response.data.items[0]
    // });
    setVideos( response.data.items);
  };

  return [ videos, search ];

}


export default useVideos;
