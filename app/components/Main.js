import React from 'react';
import ContentBlockFirst from './main/ContentBlockFirst.js';
import ContentBlockSecond from './main/ContentBlockSecond.js';
import ContactBox from './main/ContactBox.js';
import ContentBlockThird from './main/ContentBlockThird.js';
import ContentBlockFourth from './main/ContentBlockFourth.js';

class Main extends React.Component {
	render() {
		return (
			<main className="main">
				<ContentBlockFirst />
				<ContentBlockSecond />
				<ContactBox />
				<ContentBlockThird />
				<ContentBlockFourth />
			</main>
		)
	}
}

module.exports = Main;
