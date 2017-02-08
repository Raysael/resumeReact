import React from 'react';

class ButtonReadMore extends React.Component {
	render() {
		return(
			<label htmlFor={"checkbox_" + this.props.number}>
            <div className="container-button">
              <div className="container-button__sides">
                <div className="container-button__side container-button__side_front"> 
                  <p className="container-button__text">read more</p>
                </div>
                <div className="container-button__side container-button__side_back"> 
                  <p className="container-button__text">hide</p>
                </div>
              </div>
            </div>
          </label>
		)
	}
}

module.exports = ButtonReadMore;