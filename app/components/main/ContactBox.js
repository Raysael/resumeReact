import React from 'react';

class ContactBox extends React.Component {
	render() {
		let contactBoxWebsite = {icon: 'images/contactBoxWebsite.png', title: 'Skype:', info: 'jewelrykas'}
    let contactBoxPhone = {icon: 'images/contactBoxPhone.png', title: 'Mobile:', info: '+380636190055'}
    let contactBoxEmail = {icon: 'images/contactBoxEmail.png', title: 'Email:', info: 'kasjewelfr@gmail.com'}

		let contactBoxs = [contactBoxWebsite, contactBoxPhone, contactBoxEmail]
		
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
              <div className="contact-box__website-box">
                <div className="contact-box__sphere_small"><img className="contact-box__icon" src={contactBoxs[0].icon} /></div>
                <div className="contact-box__info">
                  <h4 className="contact-box__title">{contactBoxs[0].title}</h4>
                  <p className="contact-box__website">{contactBoxs[0].info}</p>
                </div>
              </div>
              <div className="contact-box__phone-box">
                <div className="contact-box__sphere_small"><img className="contact-box__icon" src={contactBoxs[1].icon} /></div>
                <div className="contact-box__info">
                  <h4 className="contact-box__title">{contactBoxs[1].title}</h4>
                  <p className="contact-box__phone">{contactBoxs[1].info}</p>
                </div>
              </div>
              <div className="contact-box__email-box">
                <div className="contact-box__sphere_small"><img className="contact-box__icon" src={contactBoxs[2].icon} /></div>
                <div className="contact-box__info">
                  <h4 className="contact-box__title">{contactBoxs[2].title}</h4>
                  <p className="contact-box__email">{contactBoxs[2].info}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
		)
	}
}

module.exports = ContactBox;