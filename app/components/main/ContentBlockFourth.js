import React from 'react';

class ContentBlockFourth extends React.Component {
	render() {
		let boxTop = {icon: 'images/arrow.png', iconBack: 'images/gear.svg', titleBig: 'Education'}
		let boxMidle = {subtitle: 'Course Front-end pro', text: 'September 2016 - January 2017	Hillel IT School, Odessa'}
		let boxBottom = {subtitle: 'Diploma - Enterprise economy', text: 'September 2011 - June 2015	ONAFT (Odessa National Academy Food Technologies)'}

		let content = [boxTop, boxMidle, boxBottom]
		
		return (
			<div className="container main__container container_fourth">
          <div className="container__block container__block_top">
            <div className="container__sphere">
              <div className="container__icon_front"><img className="icon container__icon" src={content[0].icon} /></div>
              <div className="container__icon_back"><img className="icon container__icon" src={content[0].iconBack} /></div>
            </div>
            <h1 className="container__title">{content[0].titleBig}</h1>
          </div>
          <div className="container__block container__block_midle">
            <h3 className="container__subtitle">{content[1].subtitle}</h3>
            <p className="container__text">{content[1].text}</p>
          </div>
          <div className="container__block container__block_bottom hide_size">
            <h3 className="container__subtitle">{content[2].subtitle}</h3>
            <p className="container__text">{content[2].text}</p>
          </div>
          <input className="container-button__checkbox hide" type="checkbox" id="checkbox_4" />
          <label htmlFor="checkbox_4">
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
        </div>
		)
	}
}

module.exports = ContentBlockFourth;