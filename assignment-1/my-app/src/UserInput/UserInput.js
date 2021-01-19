import React from 'react';
import './UserInput.css'

const userInput = (props) => {
	return (
		<input 
			className="UserInput" 
			onChange={props.changed} 
			value={props.name} 
			type="text"/>
	);
}

export default userInput