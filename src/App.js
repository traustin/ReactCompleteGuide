import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
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
        ],
        otherState: 'some other value'
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {
                    name: newName, age: 27,
                },
                {
                    name: 'Gabi', age: 50,
                },
                {
                    name: 'Greg', age: 26,
                }
            ]
        });
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {
                    name: 'Trevor', age: 27,
                },
                {
                    name: event.target.value, age: 50,
                },
                {
                    name: 'Greg', age: 26,
                }
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hi I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={() => this.switchNameHandler('Trevorius')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={() => this.switchNameHandler('Trev!')}
                    changed={this.nameChangedHandler}
                >
                    My Hobbies: Racing
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        );
        // return React.createElement('div', {className: 'App'},
        //     React.createElement('h1', null, 'Hi I am a React App!!!'));
    }
}

export default App;
