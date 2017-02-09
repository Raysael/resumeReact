import React from 'react';

class Contact extends React.Component {
	render() {
		return(
			<div className={"contact-box__" + this.props.name + "-box"}>
                <div className="contact-box__sphere_small"><div className="contact-box__icon"><i className={this.props.icon} aria-hidden="true"></i></div></div>
                <div className="contact-box__info">
	                <h4 className="contact-box__title">{this.props.title}</h4>
	                <p className={"contact-box__" + this.props.name}>{this.props.info}</p>
                </div>
            </div>
		)
	}
}

module.exports = Contact;