import React from 'react';
import ReactDOM from 'react-dom';

const obj = JSON.parse('{"id":1,"first_name":"Zedekiah","last_name":"Thaim","email":"zthaim0@webs.com","gender":"Polygender","ip_address":"222.32.218.83"}');

console.log('obj :>> ');
console.log(obj);


class App extends React.Component {
  render() {
    return (
      <div className="content">
         I am a class-based component.
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));


/* !VA Props Workbook

// !VA 042 Props Exercise Solution
// !VA ===========================
// const App = () => {
//   return (
//       <div>
//           <Message header="Changes in Service" message="We just updated our privacy policy here to better service our customers."/>
//       </div>
//   );
// }

// const Message = (props) => {
//   return (
//       <div className="ui message">
//           <div className="header">{props.header}</div>
//           <p>{props.message}</p>
//       </div>
//   );
// }

// !VA Props with Constructor
// !VA =============================
// !VA Create a class constructor Likes and three like objects, weather, food and music. Then create three Components, WeatherComponent, FoodComponent and MusicComponent to push those like objects to the App component for rendering. DOn't forget that the class constructor has to live outside the App object to be scoped globally so all other components can access it.

class Likes {
  constructor(most,least) {
    this.most = most;
    this.least = least;
  }
}
const weather = new Likes('Snow', 'Hot and Humid');
const food = new Likes('Chololate', 'Lima beans');
const music = new Likes('Harmonius', 'Loud and repetitive');

const App = (props) => {
  return (
      <div className="ui content">
          <WeatherComponent most={weather.most} least={weather.least}  />
          <FoodComponent most={food.most} least={food.least}/>
          <MusicComponent most={music.most} least={music.least}/>
      </div>
  );
}

const WeatherComponent = (props) => {
    return (
        <div className="ui message">
          <div className="ui small header">Weather I Like</div>
          <ul className="ui content" >
            <li className="ui content"><strong>Most &mdash; {props.most} </strong></li>
            <li className="ui content"><strong>Least &mdash; {props.least} </strong></li>
          </ul>
        </div>
    );
}

const FoodComponent = (props) => {
  return (
    <div className="ui message">
    <div className="ui small header">Food I Like</div>
    <ul className="ui content" >
      <li className="ui content"><strong>Most &mdash; {props.most} </strong></li>
      <li className="ui content"><strong>Least &mdash; {props.least} </strong></li>
    </ul>
  </div>
  );
}

const MusicComponent = (props) => {
  return (
    <div className="ui message">
    <div className="ui small header">Music I Like</div>
    <ul className="ui content" >
      <li className="ui content"><strong>Most &mdash; {props.most} </strong></li>
      <li className="ui content"><strong>Least &mdash; {props.least} </strong></li>
    </ul>
  </div>
  );
}


*/

