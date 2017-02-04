import React from 'react';

class ContentBlockFirst extends React.Component {
	render() {
		let boxTop = {icon: 'images/arrow.png', iconBack: 'images/gear.svg', titleBig: 'skills'}
		let boxMidle = {list1: ['HTML5/CSS3', 'Javascript', 'JQuery', 'ReactJS'], list2: ['Sass/Scss', 'Pug', 'Gulp/Webpack', 'GitHub']}
		let boxBottom = {list1: ['Bootstrap', 'Wordpress', 'Avocode', 'Photoshop'], list2: ['OOP JS', 'Ajax request', 'API', 'BEM']}

		let content = [boxTop, boxMidle, boxBottom]
		
		return (
		<div className="container main__container container_first">
          <div className="container__block container__block_top">
            <div className="container__sphere">
              <div className="container__icon_front"><img className="icon container__icon" src={content[0].icon} /></div>
              <div className="container__icon_back"><img className="icon container__icon" src={content[0].iconBack} /></div>
            </div>
            <h1 className="container__title">{content[0].titleBig}</h1>
          </div>
          <div className="container__block container__block_midle container__block_lists">
            <ul className="container__list">
              {content[1].list1.map(item => <li className="list__item">{item}</li>)}
            </ul>
            <ul className="container__list">
              {content[1].list2.map(item => <li className="list__item">{item}</li>)}
            </ul>
          </div>
          <div className="container__block container__block_bottom container__block_lists hide_size">
            <ul className="container__list">
              {content[2].list1.map(item => <li className="list__item">{item}</li>)}
            </ul>
            <ul className="container__list">
              {content[2].list2.map(item => <li className="list__item">{item}</li>)}
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