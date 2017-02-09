import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ContentTop from './_contentTop.js';
import ContentMidle from './_contentMidle.js';
import ContentBottom from './_contentBottom.js';
import ButtonReadMore from './_buttonReadMore.js';
class ContentBlockFirst extends React.Component {
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
		let boxTop = {icon: 'images/arrow.png', iconBack: 'images/gear.svg', titleBig: 'skills'}
		let boxMidle = {type: 'list', arr: [['HTML5/CSS3', 'Javascript', 'JQuery', 'ReactJS'], ['Sass/Scss', 'Pug', 'Gulp/Webpack', 'GitHub']]}
		let boxBottom = {type: 'list', arr: [['Bootstrap', 'Wordpress', 'Avocode', 'Photoshop'], ['OOP JS', 'Ajax request', 'API', 'BEM']]}

		let content = []
		let contentBottomBlock;
		let cliker = this._toggleShowBottom.bind(this)
		if(this.state.showBottom) {
			contentBottomBlock = <ContentBottom arr={boxBottom.arr} type={boxBottom.type} />
		}
		
		return (
		<div className="container main__container container_first">
            {<ContentTop icon={boxTop.icon} iconBack={boxTop.iconBack} titleBig={boxTop.titleBig} />} 
            {<ContentMidle arr={boxMidle.arr} type={boxMidle.type} />}
            <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
            {contentBottomBlock}
            </ReactCSSTransitionGroup>
            <input className="container-button__checkbox hide" type="checkbox" id="checkbox_1" />
            {<ButtonReadMore number='1' cliker={cliker}/>}
        </div>
		)
	}
}

module.exports = ContentBlockFirst;