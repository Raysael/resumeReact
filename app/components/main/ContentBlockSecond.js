import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ContentTop from './_contentTop.js';
import ContentMidle from './_contentMidle.js';
import ContentBottom from './_contentBottom.js';
import ButtonReadMore from './_buttonReadMore.js';

class ContentBlockSecond extends React.Component {
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
		let boxTop = {icon: 'images/arrow.png', iconBack: 'images/gear.svg', titleBig: 'SUMMARY'}
		let boxMidle = {type: 'text', text: ' I\'m a creative front-end developer with over one year of experience. I\'m eager to learn and use new technologies as they emerge.'}
		let boxBottom = {type: 'text', text: 'Reliable and dedicated with the ability to learn quickly and work in a fast paced environment.'}

		let content = []
		let contentBottomBlock;
		let cliker = this._toggleShowBottom.bind(this)
		if(this.state.showBottom) {
			contentBottomBlock = <ContentBottom type={boxBottom.type} text={boxBottom.text} />
		}
		return (
			<div className="container main__container container_second">
	        	{<ContentTop icon={boxTop.icon} iconBack={boxTop.iconBack} titleBig={boxTop.titleBig} />} 
	        	{<ContentMidle type={boxMidle.type} text={boxMidle.text} />}
          		<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
            {contentBottomBlock}
            </ReactCSSTransitionGroup>
			<input className="container-button__checkbox hide" type="checkbox" id="checkbox_2" />
          	{<ButtonReadMore number='2' cliker={cliker}/>}
        </div>
		)
	}
}

module.exports = ContentBlockSecond;