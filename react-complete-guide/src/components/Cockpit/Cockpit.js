import React, { useEffect }from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		// http request ...
	});

	let btnClass = '';
	let assignedClasses = [];

	if (props.showPersons) {
		btnClass = classes.Red;
	}
	if (props.persons.length <= 2) {
		assignedClasses.push(classes.red);
	}
	if (props.persons.length <= 1) {
		assignedClasses.push(classes.bold);
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button className={btnClass} onClick={props.onClick}>Toggle Persons</button>
		</div>
	);
};

export default cockpit;