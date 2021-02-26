import React from 'react';
import './App.css';
import Data from './Data';
/* !VA  Start 4:45 AM Complete: 10:15 AM
* Create class constructor Patients for subset of data. 
* Map over data to create array of individual patient data including id, first name, gender, age and injury
* Create Data component as class 
* Create Patient component as class
* Scaffold out the render of th patient data in the Patient component, including props for rendering the Patients data: first, age, gender, addiction
* Import the Patient component and add the Patient tag to App
* Start by defining the props in the App component for the Patient 0, just to confirm that everything renders OK
* Loop through the patients and 

*/

const data = [{
  "id": 0,
  "first_name": "Elanor",
  "last_name": "Dominik",
  "email": "edominik0@mail.ru",
  "gender": "Female",
  "age": "35",
  "injury": "compression fracture",
  "ip_address": "23.61.224.247"
}, {
  "id": 1,
  "first_name": "Robert",
  "last_name": "Hutfield",
  "email": "ehutfield1@vinaora.com",
  "gender": "Male",
  "age": "68",
  "injury": "spinal stenosis",
  "ip_address": "164.68.148.3"
}, {
  "id": 2,
  "first_name": "Margaret",
  "last_name": "Coltart",
  "email": "ecoltart2@weebly.com",
  "gender": "Female",
  "age": "56",
  "injury": "spinal osteoarthritis",
  "ip_address": "100.211.2.191"
}, {
  "id": 3,
  "first_name": "James",
  "last_name": "Stannis",
  "email": "jstannis@absk.com",
  "gender": "Transgender",
  "age": "32",
  "injury": "Lumbar disc herniation",
  "ip_address": "200.123.2.998"
}];

{/* <Patient name={patients[0].first} age={patients[0].age} gender={patients[0].gender} injury={patients[0].injury}/> */}

class Patients {
  constructor(id, first, age, gender, injury) {
      this.id = id;
      this.first = first;
      this.age = age;
      this.gender = gender;
      this.injury = injury;
  }
}

const patients = data.map( patient => { 
  return new Patients( patient.id, patient.first_name, patient.age, patient.gender, patient.injury );
});


class App extends React.Component {
  state = { id: null }
  // !VA Not required to bind unless state is initialized with constructor?
  // this.onNameClick = this.onNameClick.bind(this);

  onNameClick = (target) => {
    let id = target.id;
    this.setState({ id: id });
  };

  getProps = (id, prop) => {
    if (id) {
      if ( prop === 'age') { 
        return patients[id].age;
      }
      if ( prop === 'gender') { 
        return patients[id].gender;
      }
      if ( prop === 'injury') { 
        return patients[id].injury;
      }
    }
    else {
      return '';
    }
  }


  // !VA From 104 List Building
  render() {
    const renderedPatients = patients.map(( {id, first}) => {
      const active = id == this.state.id ? 'active' : '';
      return <div className={`ui link list ${active}`} id={`${id}`} key={id} >{first}</div>
    });
    return(
      <div className="ui container">
         <div className="ui segment">
          <div 
            onClick={ (e) => this.onNameClick(e.target)}
          >
            {renderedPatients}
          </div>
          <div className="ui card">
            <Data age={ this.getProps(this.state.id, 'age')} gender={ this.getProps(this.state.id, 'gender')} injury={this.getProps(this.state.id, 'injury')} />

          </div>
        </div>
      </div>
    );
  }

}
export default App;
