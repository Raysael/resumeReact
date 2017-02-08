import React from 'react';
import ContentTop from './_contentTop.js';
import ContentMidle from './_contentMidle.js';
import ContentBottom from './_contentBottom.js';
import ButtonReadMore from './_buttonReadMore.js';

class ContentBlockFirst extends React.Component {
	render() {
		let boxTop = {icon: 'images/arrow.png', iconBack: 'images/gear.svg', titleBig: 'skills'}
		let boxMidle = {type: 'list', arr: [['HTML5/CSS3', 'Javascript', 'JQuery', 'ReactJS'], ['Sass/Scss', 'Pug', 'Gulp/Webpack', 'GitHub']]}
		let boxBottom = {type: 'list', arr: [['Bootstrap', 'Wordpress', 'Avocode', 'Photoshop'], ['OOP JS', 'Ajax request', 'API', 'BEM']]}

		let content = []
		
		return (
		<div className="container main__container container_first">
            {<ContentTop icon={boxTop.icon} iconBack={boxTop.iconBack} titleBig={boxTop.titleBig} />} 
            {<ContentMidle arr={boxMidle.arr} type={boxMidle.type} />} 
            {<ContentBottom arr={boxBottom.arr} type={boxBottom.type} />}
            <input className="container-button__checkbox hide" type="checkbox" id="checkbox_1" />
            {<ButtonReadMore number='1' />}
        </div>
		)
	}
}

module.exports = ContentBlockFirst;