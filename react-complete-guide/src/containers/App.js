import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

	state = {
		persons: [
			{ id: 'jdsn', name: 'Max', age: 28 },
			{ id: 'slac', name: 'Manu', age: 29 },
			{ id: 'adnc', name: 'Stephanie', age: 26 }
		],
		otherState: 'some other value',
		showPersons: false
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps');
		console.log(state);
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}
	
	shouldComponentUpdate() {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
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
		console.log('[App.js] render');
		let persons = null;

		if (this.state.showPersons) {
			persons = <Persons
				persons={this.state.persons}
				clicked={this.deleteNameHandler}
				changed={this.nameChangedHandler} />;
		}

		return (
			<div className={classes.App}>
				<Cockpit
					title={this.props.appTitle}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					onClick={this.togglePersonsHandler} />
				{persons}
			</div>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
	}
}

export default App;
