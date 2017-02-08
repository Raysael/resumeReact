import React from 'react';

class Contact extends React.Component {
	render() {
		return(
			<div className={"contact-box__" + this.props.name + "-box"}>
                <div className="contact-box__sphere_small"><img className="contact-box__icon" src={this.props.icon} /></div>
                <div className="contact-box__info">
	                <h4 className="contact-box__title">{this.props.title}</h4>
	                <p className={"contact-box__" + this.props.name}>{this.props.info}</p>
                </div>
            </div>
		)
	}
}

module.exports = Contact;