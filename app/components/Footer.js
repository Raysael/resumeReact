import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
        <div className="footer__photo"></div>
        <div className="footer__shadow"></div>
        <div className="footer__copyright">
          <p className="footer__text">&copy; 2016-2017 ANDRII STIAHAILO SOME RIGHTS RESERVED</p>
        </div>
      </footer>
		)
	}
}

module.exports = Footer;