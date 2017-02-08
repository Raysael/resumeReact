import React from 'react';
import ContentTop from './_contentTop.js';
import ContentMidle from './_contentMidle.js';

class ContentBlockThird extends React.Component {
	render() {
		let boxTop = {icon: 'images/arrow.png', iconBack: 'images/gear.svg', iconBack: 'images/gear.svg', titleBig: 'Responsibilities'}
		let boxMidle = {type: 'list', arr: [['Develop usable websites based on web standards, flexibility and accessibility.', 'Use Avocode and Photoshop for website mockups.', 'Develop layout web applications with Pug and React.js.']]}
		let boxBottom = {list1: ['Write simple plugins and animations in JavaScript.', 'Use BEM methodology for making source code more readable and understandable.']}

		let content = [boxBottom]
		
		return (
			<div className="container main__container container_third">
                {<ContentTop icon={boxTop.icon} iconBack={boxTop.iconBack} titleBig={boxTop.titleBig} />} 
                {<ContentMidle arr={boxMidle.arr} type={boxMidle.type} />} 
          <div className="container__block container__block_bottom container__block_lists hide_size">
            <ul className="container__list">
               {content[0].list1.map((item, index) => <li key={index} className="list__item">{item}</li>)}
            </ul>
          </div>
          <input className="container-button__checkbox hide" type="checkbox" id="checkbox_3" />
          <label htmlFor="checkbox_3">
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

module.exports = ContentBlockThird;