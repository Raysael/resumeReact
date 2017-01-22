import React from 'react';

class ContentBlockSecond extends React.Component {
	render() {
		let boxTop = {icon: 'images/arrow.png',title: 'Education'}
		let boxMidle = {title: 'Course Front-end pro', text: 'September 2016 – January 2017	Hillel IT School, Odessa'}
		let boxBottom = {title: 'Diploma with honors – Enterprise economy', text: 'September 2011 – June 2015	ONAFT (Odessa National Academy Food Technologies)'}

		let content = [boxTop, boxMidle, boxBottom]
		
		return (
			<div className="container main__container container_second">
		          <div className="container__block container__block_top">
					<div className="container__sphere"><img className="icon container__icon" src={content[0].icon} /></div>
		            <h1 className="container__title">{content[0].title}</h1>
		          </div>
		          <div className="container__block container__block_midle">
		            <h3 className="container__subtitle">{content[1].title}</h3>
		            <p className="container__text">{content[1].text}</p>
		          </div>
		          <div className="container__block container__block_bottom">
		            <h3 className="container__subtitle">{content[2].title}</h3>
		            <p className="container__text">{content[2].text}</p>
		          </div>
        	</div>
		)
	}
}

module.exports = ContentBlockSecond;