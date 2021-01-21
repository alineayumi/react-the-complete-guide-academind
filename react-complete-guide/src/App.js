import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
	state = {
		persons: [
			{ id: 'jdsn', name: 'Max', age: 28 },
			{ id: 'slac', name: 'Manu', age: 29 },
			{ id: 'adnc', name: 'Stephanie', age: 26 }
		],
		otherState: 'some other value',
		showPersons: false
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = { ...this.state.persons[personIndex] };
		// or
		// const person = Object.assign({}, this.state.persons[personIndex]);
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({ persons: persons });
	}

	deleteNameHandler = (personIndex) => {
		const persons = [...this.state.persons];
		// const persons = this.state.persons.slice(); make a copy of the list
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	}

	render() {

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person
							click={() => this.deleteNameHandler(index)}
							name={person.name}
							age={person.age}
							key={person.id}
							changed={(event) => this.nameChangedHandler(event, person.id)} />
					})}
				</div>
			);
		}

		let classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red');
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold');
		}

		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p className={classes.join(' ')}>This is really working!</p>
				<button onClick={this.togglePersonsHandler}>Toggle Persons</button>
				{persons}
			</div>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
	}
}

export default App;
