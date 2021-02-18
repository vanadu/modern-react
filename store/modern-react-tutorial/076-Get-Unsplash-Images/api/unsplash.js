import axios from 'axios';

// !VA 098 This creates an instance of the axios client so we can customize it.
export default axios.create({

  baseURL: 'https://api.unsplash.com', 
  // !VA 098 Moved this from onSearchSubmit in App.js 
  headers: {
    Authorization: 'Client-ID INpm-yRfMK8IJIeKJP08_wsN9eupEwhiMZwzHlzGVoU' 
  }
})