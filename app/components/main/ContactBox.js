import React from 'react';
import Contact from './_contact.js';

class ContactBox extends React.Component {
	render() {
		let contactBoxWebsite = {name: 'website', icon: 'fa fa-skype', title: 'Skype:', info: 'jewelrykas'}
        let contactBoxPhone = {name: 'phone', icon: 'fa fa-mobile', title: 'Mobile:', info: '+380636190055'}
        let contactBoxGit = {name: 'git', icon: 'fa fa-github', title: 'GitHub:', info: 'https://github.com/ZeilD'}
        let contactBoxEmail = {name: 'email', icon: 'fa fa-envelope', title: 'Email:', info: 'kasjewelfr@gmail.com'}

		let contactBoxs = [contactBoxWebsite, contactBoxPhone, contactBoxGit, contactBoxEmail]
		
		return (
			<div className="contact-box_wrap">
          <div className="contact-box main__contact-box">
            <div className="contact-box__rope contact-box__rope_back"></div>
            <div className="contact-box__bubble-wrapper"></div>
            <div className="contact-box__circles-wrapper">
                <div className="contact-box__circle contact-box__circle_top"></div>
                <div className="contact-box__circle contact-box__circle_right"></div>
                <div className="contact-box__circle contact-box__circle_bottom"></div>
                <div className="contact-box__circle contact-box__circle_left"></div>
            </div>
            <div className="contact-box__sphere">
                <div className="contact-box__hole"></div>
                <div className="contact-box__rope contact-box__rope_front"></div>
                <h1 className="contact-box__title contact-box__title_big">contact me</h1>
                {
                    contactBoxs.map((contact, index) => {
                        return <Contact key={index} name={contact.name} icon={contact.icon} title={contact.title} info={contact.info}/>
                    })
                }     
            </div>
          </div>
        </div>
		)
	}
}

module.exports = ContactBox;