import React, { useEffect, useRef }from 'react';

// !VA Direct path to folder works: /image01.jpg
// !VA Path as env variable works: <img src={process.env.PUBLIC_URL + '/image01.jpg'} alt="image" className="ui large"/>

const Image = ( props ) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.style.rotate = props.rotValue + 'deg';
  }); 


  return (
    <>
      <div className="img-wrap">
        <img 
          src={process.env.PUBLIC_URL + '/image01.jpg'} 
          alt="ALT" 
          className="ui large"
          ref={ref}/>
      </div>
      <div className="ui caption">{props.caption}</div>

    </>
  );
};

export default Image;