import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
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
		let btnClass = '';

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <ErrorBoundary key={person.id}>
							<Person
								click={() => this.deleteNameHandler(index)}
								name={person.name}
								age={person.age}
								changed={(event) => this.nameChangedHandler(event, person.id)} />
							</ErrorBoundary>
					})}
				</div>
			);
			btnClass = classes.Red;
		}

		let assignedClasses = [];
		if (this.state.persons.length <= 2) {
						assignedClasses.push(classes.red);
		}
		if (this.state.persons.length <= 1) {
						assignedClasses.push(classes.bold);
		}

		return (
					<div className={classes.App}>
						<h1>Hi, I'm a React App</h1>
						<p className={assignedClasses.join(' ')}>This is really working!</p>
						<button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
						{persons}
					</div>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
	}
}

export default App;
