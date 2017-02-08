import React from 'react';
import ContentTop from './_contentTop.js';
import ContentMidle from './_contentMidle.js';
import ContentBottom from './_contentBottom.js';
import ButtonReadMore from './_buttonReadMore.js';

class ContentBlockThird extends React.Component {
	render() {
		let boxTop = {icon: 'images/arrow.png', iconBack: 'images/gear.svg', iconBack: 'images/gear.svg', titleBig: 'Responsibilities'}
		let boxMidle = {type: 'list', arr: [['Develop usable websites based on web standards, flexibility and accessibility.', 'Use Avocode and Photoshop for website mockups.', 'Develop layout web applications with Pug and React.js.']]}
		let boxBottom = {type: 'list', arr: [['Write simple plugins and animations in JavaScript.', 'Use BEM methodology for making source code more readable and understandable.']]}

		let content = []
		
		return (
			<div className="container main__container container_third">
                {<ContentTop icon={boxTop.icon} iconBack={boxTop.iconBack} titleBig={boxTop.titleBig} />} 
                {<ContentMidle arr={boxMidle.arr} type={boxMidle.type} />} 
                {<ContentBottom arr={boxBottom.arr} type={boxBottom.type} />}
            <input className="container-button__checkbox hide" type="checkbox" id="checkbox_3" />
            {<ButtonReadMore number='3' />}
        </div>
		)
	}
}

module.exports = ContentBlockThird;