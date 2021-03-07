import React from 'react';
import {axios} from './axios';
const { useState, useEffect } = React;

const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
    // !VA Step 1:Initialize state. users is the array in state to which the API data will be written. setUsers is the setter that will write the API data to state.
    const [users, setUsers] = useState([]);
    
    // !VA Step 2: make the async call to the API with axios
    useEffect(() => {
        // !VA Define the function that will retrieve the data from the API
        const fetchUsers = async () => {
            const { data } = await axios.get(URL);
            // !VA Write the returned data to state using the useState function's setter
            setUsers(data);
        };
        // !VA Invoke the fetch function
        fetchUsers();
    }, []);
     
    // !VA Map over the user array that is currently stored in state and build the list to output to JSX 
    const renderedUsers = users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
    });
    
    return (
        <ul>
            {renderedUsers}
        </ul>
    );
}

export default App;
