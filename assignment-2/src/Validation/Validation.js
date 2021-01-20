import React from 'react';

const validation = (props) => {
	let outputText;

	if (props.textLen < 10) {
		outputText = "Text too short";
	} else {
		outputText = "Text long enough";
	}

	return (
		<div>
			<p>{outputText}</p>
		</div>
	);
};

export default validation;