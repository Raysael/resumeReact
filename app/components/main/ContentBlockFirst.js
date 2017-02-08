import React from 'react';
import ContentTop from './_contentTop.js';
import ContentMidle from './_contentMidle.js';

class ContentBlockFirst extends React.Component {
	render() {
		let boxTop = {icon: 'images/arrow.png', iconBack: 'images/gear.svg', titleBig: 'skills'}
		let boxMidle = {type: 'list', arr: [['HTML5/CSS3', 'Javascript', 'JQuery', 'ReactJS'], ['Sass/Scss', 'Pug', 'Gulp/Webpack', 'GitHub']]}
		let boxBottom = {list1: ['Bootstrap', 'Wordpress', 'Avocode', 'Photoshop'], list2: ['OOP JS', 'Ajax request', 'API', 'BEM'], type: 'list'}

		let content = [boxBottom]
		
		return (
		<div className="container main__container container_first">
            {<ContentTop icon={boxTop.icon} iconBack={boxTop.iconBack} titleBig={boxTop.titleBig} />} 
            {<ContentMidle arr={boxMidle.arr} type={boxMidle.type} />} 
          <div className="container__block container__block_bottom container__block_lists hide_size">
            <ul className="container__list">
                {content[0].list1.map((item, index) => <li key={index} className="list__item">{item}</li>)}
            </ul>
            <ul className="container__list">
                {content[0].list2.map((item, index) => <li key={index} className="list__item">{item}</li>)}
            </ul>
          </div>
          <input className="container-button__checkbox hide" type="checkbox" id="checkbox_1" />
          <label htmlFor="checkbox_1">
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

module.exports = ContentBlockFirst;