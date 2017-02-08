import React from 'react';
import ContentTop from './_contentTop.js';
import ContentMidle from './_contentMidle.js';

class ContentBlockFourth extends React.Component {
	render() {
		let boxTop = {icon: 'images/arrow.png', iconBack: 'images/gear.svg', titleBig: 'Education'}
		let boxMidle = {type: 'article', subtitle: 'Course Front-end pro', text: 'September 2016 - January 2017	Hillel IT School, Odessa'}
		let boxBottom = {subtitle: 'Diploma - Enterprise economy', text: 'September 2011 - June 2015	ONAFT (Odessa National Academy Food Technologies)'}

		let content = [boxBottom]
		
		return (
			<div className="container main__container container_fourth">
                {<ContentTop icon={boxTop.icon} iconBack={boxTop.iconBack} titleBig={boxTop.titleBig} />} 
                {<ContentMidle type={boxMidle.type} subtitle={boxMidle.subtitle} text={boxMidle.text} />}
          <div className="container__block container__block_bottom hide_size">
            <h3 className="container__subtitle">{content[0].subtitle}</h3>
            <p className="container__text">{content[0].text}</p>
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