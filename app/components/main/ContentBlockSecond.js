import React from 'react';

class ContentBlockSecond extends React.Component {
	render() {
		let boxTop = {icon: 'images/arrow.png', iconBack: 'images/gear.svg', titleBig: 'SUMMARY'}
		let boxMidle = {text: ' I\'m a creative front-end developer with over one year of experience. I\'m eager to learn and use new technologies as they emerge.'}
		let boxBottom = {text: 'Reliable and dedicated with the ability to learn quickly and work in a fast paced environment.'}

		let content = [boxTop, boxMidle, boxBottom]
		
		return (
			<div className="container main__container container_second">
          <div className="container__block container__block_top">
            <div className="container__sphere">
              <div className="container__icon_front"><img className="icon container__icon" src={content[0].icon} /></div>
              <div className="container__icon_back"><img className="icon container__icon" src={content[0].iconBack} /></div>
            </div>
            <h1 className="container__title">{content[0].titleBig}</h1>
          </div>
          <div className="container__block container__block_midle">
            <p className="container__text">{content[1].text}</p>
          </div>
          <div className="container__block container__block_bottom hide_size">
            <p className="container__text">{content[2].text}</p>
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