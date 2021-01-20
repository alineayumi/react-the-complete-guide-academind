import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {
	state = {
		text : '',
		textLen : 0,
		chars : []
	}

	inputTextHandler = (event) => {
		const text = event.target.value;
		const textLen = text.length;
		const chars = text.split('');
		this.setState({
			text: text,
			textLen: textLen,
			chars: chars
		});
	}

	deleteCharHandler = (charIndex) => {
		const chars = [...this.state.chars];
		chars.splice(charIndex, 1);
		const updatedText = chars.join('');
		this.setState({
			chars: chars,
			text: updatedText,
			textLen: updatedText.length
		});
	}

	render() {
		let chars = null;

		if (this.state.textLen > 0) {
			chars = (
				<div>
					{
						this.state.chars.map((char, index) => {
							return <Char
							 	char={char}
								key={index}
								click={() => this.deleteCharHandler(index)} />
						})
					}
				</div>
			);
		}

		return(
			<div>
				<input type="text" onChange={this.inputTextHandler} value={this.state.text}></input>
				<p>{this.state.textLen}</p>
				<Validation
					textLen={this.state.textLen}/>
				{chars}
			</div>
		);
	}
}

export default App;
