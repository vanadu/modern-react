import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const arr = [2, 5, 100 ]
    // !VA Triple the numbers in the arr
    // const tripleIt = arr.map((item) => { 
    //   return item * 3; 
    // });
    const tripleIt = arr.map( item  => item * 3 );
    console.log('tripleIt :>> ');
    console.log(tripleIt);
    
    // !VA Convert nums in arr to string
    // const numToString = arr.map(() =>  {
    //   return item.toString();
    // });
    const numToString = arr.map( item => item.toString()  );
    console.log('numToString :>> ');
    console.log(numToString);


    // !VA Convert names to initial caps
    const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];
    const initialCaps = names.map((name) => {
      const initialCaps = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      return initialCaps;
    });
    console.log('initialCaps :>> ');
    console.log(initialCaps);

    // !VA Make an array of strings of the names
    const data = [
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
    ]; 

    // !VA Print a list of just the names in the data object
    const names2 = data.map((item) => {
      return item.name;
    });
    console.log('names2 :>> ');
    console.log(names2);

    const oldenough = data.map(( item ) => {
      const ret = item.age > 12 ? item.name + ' is old enough!' : item.name + 'is too young!';
      return ret;
    });
    console.log('oldenough :>> ');
    console.log(oldenough);

    // !VA Make an array of the names in h1s, and the ages in h2s
    const elems = data.map(( item ) => {
      return `<h1>Name: ${item.name}</h1><br /><h2>Age: ${item.age}</h2>`;
    });
    console.log('elems :>> ');
    console.log(elems);


  return (
      <div className="content">
         I am a functional component.
      </div>
 );
}

ReactDOM.render(<App />, document.querySelector('#root'));