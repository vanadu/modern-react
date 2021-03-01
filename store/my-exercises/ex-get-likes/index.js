import React from "react";
import ReactDOM from "react-dom";

// !VA 1) Create a ContentType component that changes the type of content in the App component by changing the class of the parent div in the ContentType component. 2) Create an arrow function that changes the properties of the 'liked' thing in the App component 
// !VA NOTE: I should be able to conditionally populate the App component with the Liked items from within a LikedThing component, but can't figure out how to do that yet.
class Likes {
  constructor(thing,most,least) {
    this.thing = thing;
    this.most = most;
    this.least = least;
  }
}
const weather = new Likes('Weather', 'Snow', 'Hot and Humid');
const food = new Likes('Food', 'Chololate', 'Lima beans');
const music = new Likes('Music', 'Harmonius', 'Loud and repetitive');

let like = 'Food';

const getLike = (like) => {
    if (like === weather.thing) {
      return weather;
    } else if (like=== food.thing) {
      return food;
    } else if (like === music.thing) {
      return music; 
    } 
}

// function getLike(like) {
//   if (like === weather.thing) {
//     return weather;
//   } else if (like=== food.thing) {
//     return food;
//   } else if (like === music.thing) {
//     return music; 
//   } 
// }

let thing = getLike(like);

// !VA 
const App = () => {
  return (
    <div>
        <ContentTypeComponent>
          <div className="ui medium header">My Favorite Kinds Of {thing.thing}</div>
          <ul className="ui content" >
          <li className="ui content"><strong>Most &mdash; {thing.most} </strong></li>
          <li className="ui content"><strong>Least &mdash; {thing.least}</strong></li>
        </ul>
        </ContentTypeComponent>
    </div>

  );
};

const ContentTypeComponent = (props) => {

  return (
      <div className="ui card">
        {props.children}
      </div>
  );
}

// Renders the App component into a div with id 'root'
ReactDOM.render(<App />, document.querySelector("#root"));