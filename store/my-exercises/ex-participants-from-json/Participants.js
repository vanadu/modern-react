import React from 'react';

// !VA Using this JSON data
const data = [{
  "id": 1,
  "first_name": "Em",
  "last_name": "Dominik",
  "email": "edominik0@mail.ru",
  "gender": "Bigender",
  "ip_address": "23.61.224.247"
}, {
  "id": 2,
  "first_name": "Emory",
  "last_name": "Hutfield",
  "email": "ehutfield1@vinaora.com",
  "gender": "Agender",
  "ip_address": "164.68.148.3"
}, {
  "id": 3,
  "first_name": "Eleonore",
  "last_name": "Coltart",
  "email": "ecoltart2@weebly.com",
  "gender": "Genderfluid",
  "ip_address": "100.211.2.191"
}];

// !VA Create a new object containing a subset of the data: id, first, gender, email
class Participant {
  constructor(id, first, gender, email ) {
    this.id = id;
    this.first = first;
    this.gender = gender;
    this.email = email;
  }
}

// !VA This says: for each val in data, create a new Person object with these properties of val: id, first_name, etc
const participants = data.map(function(val){
    return new Participant(val.id, val.first_name, val.gender, val.email);
    });
    console.log('participants :>> ');
    console.log(participants);


export default class Data extends React.Component {
  render() {
    return (
        <div>
          <div className="ui segment">
            <ul className="ui">
              <li className="ui">{participants[0].first} &mdash; {participants[0].gender}</li>
              <li className="ui">{participants[1].first} &mdash; {participants[1].gender}</li>
              <li className="ui">{participants[2].first} &mdash; {participants[2].gender}</li>
            </ul>
          </div>
        </div>
    );
  }
}

