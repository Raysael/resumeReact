import React from 'react';

class ContentBlockFourth extends React.Component {
	render() {
		let boxTop = {icon: 'images/arrow.png',title: 'experience'}
		let boxMidle = {list: ['Responsive markup', 'OOP Javascript', 'Writing Ajax requests', 'Working with CSS animation', 'Working with SVG']}

		let content = [boxTop, boxMidle]
		
		return (
			<div className="container main__container container_second">
		          <div className="container__block container__block_top">
					<div className="container__sphere"><img className="icon container__icon" src={content[0].icon} /></div>
		            <h1 className="container__title">{content[0].title}</h1>
		          </div>
		          <div className="container__block container__block_midle container__block_lists">
		          	<ul className="container__list">
              			{content[1].list.map(item => <li className="list__item list__item_br">{item}</li>)}
            		</ul>
		          </div>
        	</div>
		)
	}
}

module.exports = ContentBlockFourth;