import React from 'react';

class ContentTop extends React.Component {
	render() {
		return(
			<div className="container__block container__block_top">
	            <div className="container__sphere">
		            <div className="container__icon_front"><img className="icon container__icon" src={this.props.icon} /></div>
		            <div className="container__icon_back"><img className="icon container__icon" src={this.props.iconBack} /></div>
	            </div>
	            <h1 className="container__title">{this.props.titleBig}</h1>
	        </div>
		)
	}
}

module.exports = ContentTop;