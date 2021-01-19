import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
	state = {
		username: 'alineayumi'
	}

	usernameChangedHandler = (event) => {
		this.setState({
			username: event.target.value
		})
	}

	render() {
		const style = {
			backgroundColor: 'white',
			border: '2px dashed black',
			padding: '8px'
		}

		return (
			<div>
				<h1 style={style}>Assignment 1</h1>
				<UserInput
					changed={this.usernameChangedHandler}
					name={this.state.username}/>
				<UserOutput username={this.state.username}/>
			</div>
		);
	}
}

export default App;
