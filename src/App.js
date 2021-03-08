import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const  App = props =>  {
    const [ personsState, setPersonsState] = useState({
        persons: [
            {
                name: 'Trevor', age: 27,
            },
            {
                name: 'Gabi', age: 25,
            },
            {
                name: 'Greg', age: 26,
            }
        ]
    });

    const [otherState, setOtherState] = useState('some other value');


    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {
                    name: 'Trevorius', age: 27,
                },
                {
                    name: 'Gabi', age: 50,
                },
                {
                    name: 'Greg', age: 26,
                }
            ]
        });

        console.log(personsState);
    }
    return (
        <div className="App">
            <h1>Hi I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    );
}

export default App;
