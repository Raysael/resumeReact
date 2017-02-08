import React from 'react';
import ContentTop from './_contentTop.js';
import ContentMidle from './_contentMidle.js';
import ContentBottom from './_contentBottom.js';
import ButtonReadMore from './_buttonReadMore.js';

class ContentBlockFourth extends React.Component {
	render() {
		let boxTop = {icon: 'images/arrow.png', iconBack: 'images/gear.svg', titleBig: 'Education'}
		let boxMidle = {type: 'article', subtitle: 'Course Front-end pro', text: 'September 2016 - January 2017	Hillel IT School, Odessa'}
		let boxBottom = {type: 'article', subtitle: 'Diploma - Enterprise economy', text: 'September 2011 - June 2015	ONAFT (Odessa National Academy Food Technologies)'}

		let content = []
		
		return (
			<div className="container main__container container_fourth">
                {<ContentTop icon={boxTop.icon} iconBack={boxTop.iconBack} titleBig={boxTop.titleBig} />} 
                {<ContentMidle type={boxMidle.type} subtitle={boxMidle.subtitle} text={boxMidle.text} />}
                {<ContentBottom type={boxBottom.type} subtitle={boxBottom.subtitle} text={boxBottom.text} />}
          <input className="container-button__checkbox hide" type="checkbox" id="checkbox_4" />
          {<ButtonReadMore number='4' />}
        </div>
		)
	}
}

module.exports = ContentBlockFourth;