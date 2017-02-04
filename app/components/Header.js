import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
        <div className="header__skew-blok skew-blok skew-blok_right">
          <div className="skew-blok__skew-elem skew-blok__skew-elem_big-right">
            <div className="skew-blok__skew-elem skew-blok__skew-elem_small-right"></div>
          </div>
        </div>
        <div className="header__skew-blok skew-blok skew-blok_left">
          <div className="skew-blok__skew-elem skew-blok__skew-elem_big-left"></div>
          <div className="skew-blok__skew-elem skew-blok__skew-elem_small-left"></div>
        </div>
        <div className="row header__row">
          <h1 className="header__title">ANDRII STIAHAILO</h1>
          <h2 className="header__subtitle">FRONT-END DEVELOPER</h2>
        </div>
      </header>
		)
	}
}

module.exports = Header;
