import React, { Component } from 'react';

class ImageCard extends Component {
  // !VA 110 Constructor function for the refs that will access the DOM
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  // !VA 110 To access the ref, we use componentDidMount
  // !VA 111 Now we have ensure that the image will load before its refs are
  componentDidMount() {
    // !VA But if you try to access dimension properties of this, it will return 0 because the image hasn't loaded yet.
    // console.log(this.imageRef);
    // !VA So we have to add an eventListener on the load event with a callback of this.setSpans. NOTE: setSPans refers to the CSS Grid property that specifies width.
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  // !VA 111 Remember that this requires and arrow function for binding.
  setSpans = () => {
    // !VA 111 
    // console.log(this.imageRef.current.clientHeight);
    // !VA 112 This is where we actually set the height so that each image occupies the appropriate number of spans to display correctly.
    const height = this.imageRef.current.clientHeight;
    const spans =  Math.ceil(height / 10);

    this.setState ({ spans })

  }

  render() {
    // !VA Now we can destructure this.props.image out of the this.props.image object. 
    const { description, urls }= this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
         
        <img 
          alt={description }
          src={urls.regular}
          ref={this.imageRef}/>
      </div>
    );
  }
}

export default ImageCard;