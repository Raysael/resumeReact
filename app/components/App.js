import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Main from './Main.js';

class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Header />
				<Main />
				<footer className="footer">
        			<div className="footer__photo"></div>
      			</footer>
			</div>
		)
	}
}

ReactDOM.render(
	<App/>, document.getElementById('app')
)
