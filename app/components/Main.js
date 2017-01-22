import React from 'react';
import ContentBlockFirst from './main/ContentBlockFirst.js';
import ContentBlockSecond from './main/ContentBlockSecond.js';
import ContentBlockThird from './main/ContentBlockThird.js';
import ContentBlockFourth from './main/ContentBlockFourth.js';
import ContactBox from './main/ContactBox.js';

class Main extends React.Component {
	render() {
		return (
			<main className="main">
				<ContentBlockFirst />
				<ContentBlockSecond />
				<ContentBlockThird />
				<ContentBlockFourth />
				<ContactBox />
			</main>
		)
	}
}

module.exports = Main;
