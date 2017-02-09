import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ContentTop from './_contentTop.js';
import ContentMidle from './_contentMidle.js';
import ContentBottom from './_contentBottom.js';
import ButtonReadMore from './_buttonReadMore.js';

class ContentBlockThird extends React.Component {
	constructor() {
		super();
		this.state = {
			showBottom: false
		}
	}
	_toggleShowBottom() {
	    this.setState({
	    	showBottom: !this.state.showBottom
	    })
  	}
	render() {
		let boxTop = {icon: 'images/arrow.png', iconBack: 'images/gear.svg', iconBack: 'images/gear.svg', titleBig: 'Responsibilities'}
		let boxMidle = {type: 'list', arr: [['Develop usable websites based on web standards, flexibility and accessibility.', 'Use Avocode and Photoshop for website mockups.', 'Develop layout web applications with Pug and React.js.']]}
		let boxBottom = {type: 'list', arr: [['Write simple plugins and animations in JavaScript.', 'Use BEM methodology for making source code more readable and understandable.']]}

		let content = []
		let contentBottomBlock;
		let cliker = this._toggleShowBottom.bind(this)
		if(this.state.showBottom) {
			contentBottomBlock = <ContentBottom arr={boxBottom.arr} type={boxBottom.type} />
		}
		return (
			<div className="container main__container container_third">
                {<ContentTop icon={boxTop.icon} iconBack={boxTop.iconBack} titleBig={boxTop.titleBig} />} 
                {<ContentMidle arr={boxMidle.arr} type={boxMidle.type} />} 
                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
            {contentBottomBlock}
            </ReactCSSTransitionGroup>
            <input className="container-button__checkbox hide" type="checkbox" id="checkbox_3" />
            {<ButtonReadMore number='3' cliker={cliker}/>}
        </div>
		)
	}
}

module.exports = ContentBlockThird;