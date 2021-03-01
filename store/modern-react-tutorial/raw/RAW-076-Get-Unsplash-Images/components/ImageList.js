import './ImageList.css';
import React from 'react';
// !VA 108
import ImageCard from './ImageCard';


const ImageList = (props) => {
  console.log(props.images);
  // !VA 101 
  // const images = props.images.map((image) => {
    // !VA 103 Add the key prop to the list of URLs being returned. Note: the key property goes on the ROOT element being returned. If the img tag had a div wrapper, the key prop would go on the wrapper div.
    // return <img key={image.id} alt={image.description }src={ image.urls.regular } />
    // !VA 103 Now we can destructure out the three properties.
      // const images = props.images.map(({description, id, urls}) => { 
      // !VA 108 Now we can replace the img tag below with the ImageCard component. First, we replace the destructured properties with the image. This is the original image object. I don't really get this...not sure where this comes from. 
      const images = props.images.map((image) => { 
      // return <img key={ id } alt={ description } src={ urls.regular } />
      // !VA 108 - We don't need to pass in the alt or src attribute, just the key. 
      return <ImageCard key={image.id} image={image}/>
    });
  // !VA 101 Now that we've gotten the array of image URLs above, we can return them in the prop below
  return (
    <div className="image-list">
      {images}
    </div>
  );
};

export default ImageList;