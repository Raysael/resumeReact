import React from 'react';

class ContentBlockThird extends React.Component {
	render() {
		let boxTop = {icon: 'images/arrow.png',title: 'skills'}
		let boxMidle = {list1: ['HTML5/CSS3', 'Javascript', 'JQuery', 'ReactJS'], list2: ['Bootstrap', 'Pug', 'Gulp/Webpack', 'GitHub']}
		let boxBottom = {list1: ['Sass/Scss', 'Wordpress', 'Avocode', 'Photoshop'], list2: ['Friendly', 'Creative', 'Team Player', 'Self Learner']}

		let content = [boxTop, boxMidle, boxBottom]
		
		return (
			<div className="container main__container container_third">
          <div className="container__block container__block_top">
            <div className="container__sphere"><img className="icon container__icon" src={content[0].icon} /></div>
            <h1 className="container__title">{content[0].title}</h1>
          </div>
          <div className="container__block container__block_midle container__block_lists">
            <ul className="container__list">
              {content[1].list1.map(item => <li className="list__item">{item}</li>)}
            </ul>
            <ul className="container__list">
              {content[1].list2.map(item => <li className="list__item">{item}</li>)}
            </ul>
          </div>
          <div className="container__block container__block_bottom container__block_lists">
            <ul className="container__list">
              {content[2].list1.map(item => <li className="list__item">{item}</li>)}
            </ul>
            <ul className="container__list">
              {content[2].list2.map(item => <li className="list__item">{item}</li>)}
            </ul>
          </div>
        </div>
		)
	}
}

module.exports = ContentBlockThird;