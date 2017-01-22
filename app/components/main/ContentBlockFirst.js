import React from 'react';

class ContentBlockFirst extends React.Component {
	render() {
		let boxTop = {icon: 'images/arrow.png', title: 'ABOUT  Me'}
		let boxMidle = {text: 'I know how funny joke.'}
		let boxBottom = {title: 'Objective', text: 'I want to work front-end developer.'}

		let content = [boxTop, boxMidle, boxBottom]
		
		return (
			<div className="container main__container container_first">
        		 <div className="container__block container__block_top">
		            <div className="container__sphere"><img className="icon container__icon" src={content[0].icon} /></div>
		            <h1 className="container__title">{content[0].title}</h1>
		          </div>
		          <div className="container__block container__block_midle">
		            <p className="container__text">{content[1].text}</p>
		          </div>
		          <div className="container__block container__block_bottom">
		            <h2 className="container__subtitle container__subtitle_bold">{content[2].title}</h2>
		            <p className="container__text container__text_small">{content[2].text}</p>
		          </div>
        	</div>
		)
	}
}

module.exports = ContentBlockFirst;