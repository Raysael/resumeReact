import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Header />
				<Main />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(
	<App/>, document.getElementById('app')
)
