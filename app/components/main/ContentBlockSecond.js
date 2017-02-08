import React from 'react';
import ContentTop from './_contentTop.js';
import ContentMidle from './_contentMidle.js';

class ContentBlockSecond extends React.Component {
	render() {
		let boxTop = {icon: 'images/arrow.png', iconBack: 'images/gear.svg', titleBig: 'SUMMARY'}
		let boxMidle = {type: 'text', text: ' I\'m a creative front-end developer with over one year of experience. I\'m eager to learn and use new technologies as they emerge.'}
		let boxBottom = {text: 'Reliable and dedicated with the ability to learn quickly and work in a fast paced environment.'}

		let content = [boxBottom]
		
		return (
			<div className="container main__container container_second">
	        	{<ContentTop icon={boxTop.icon} iconBack={boxTop.iconBack} titleBig={boxTop.titleBig} />} 
	        	{<ContentMidle type={boxMidle.type} text={boxMidle.text} />}
          <div className="container__block container__block_bottom hide_size">
            <p className="container__text">{content[0].text}</p>
          </div>
			<input className="container-button__checkbox hide" type="checkbox" id="checkbox_2" />
          <label htmlFor="checkbox_2">
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

module.exports = ContentBlockSecond;