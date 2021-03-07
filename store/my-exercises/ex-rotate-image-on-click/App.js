import React, { useState  } from 'react';
import './App.css';
import Image from './Image';


const App = () => {

  const [ rotValue, setRotValue] = useState(0);

  const onClick = (e) => {
    e.target.classList.contains('left') ? setRotValue(rotValue + 90) : setRotValue(rotValue - 90);
  }

  return (
    <div className="ui container">
      <div className="ui header">Rotate Image On Click</div>
      <div className="ui instructions">
        Render an image from /public. Create two buttons: left arrow and right arrow. When clicked each button should rotate the image by 90 degrees in the appropriate direction. Use useState to store the current rotation. Use useRef to access the CSS rotation property of the image. 
      </div>
      <div className="ui segment content">
        <Image caption={'Click a button to rotate the image'} rotValue={rotValue} />
      </div>
      <button onClick={ onClick } className="ui button left">Rotate Left</button>
      <button onClick={ onClick } className="ui button right">Rotate Right</button>
    </div>
  );
};

export default App;