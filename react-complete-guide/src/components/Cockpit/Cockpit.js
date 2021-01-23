import React, { useEffect, useRef }from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
	const toggleButtonRef = useRef(null);

	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		// http request ...
		// const timer = setTimeout(() => {
		// 	alert('save data to cloud');
		// }, 1000);
		toggleButtonRef.current.click();
		return () => {
			// clearTimeout(timer);
			console.log('[Cockpit.js] cleanup work in useEffect');
		}
	}, []);

	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');
	});

	let btnClass = '';
	let assignedClasses = [];

	if (props.showPersons) {
		btnClass = classes.Red;
	}
	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red);
	}
	if (props.personsLength <= 1) {
		assignedClasses.push(classes.bold);
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button className={btnClass} 
				onClick={props.onClick}
				ref={toggleButtonRef}>
					Toggle Persons
			</button>
			<AuthContext.Consumer>
				{(context) => <button onClick={context.login}>Log In</button>}
			</AuthContext.Consumer>
		</div>
	);
};

export default React.memo(cockpit);