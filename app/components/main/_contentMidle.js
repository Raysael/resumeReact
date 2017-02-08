import React from 'react';

class ContentMidle extends React.Component {
	_getContentMidle(type) {
		switch (type) {
			case 'list':
				return <div className="container__block container__block_lists">
					{this.props.arr.map((item, i) => <ul key={i} className="container__list">
						{item.map((item, index) => <li key={index} className="list__item">{item}</li>)}
					</ul>)}
				</div>
				break;
			case 'text':
		        return <div>
		        <p className="container__text">{this.props.text}</p>
		        </div>
				break;
			case 'article':
		        return <div>
			        	<h3 className="container__subtitle">{this.props.subtitle}</h3>
						<p className="container__text">{this.props.text}</p>
					</div>
				break;
			default:
				// statements_def
				break;
		}
		}
	render() {
		return(
			<div className="container__block container__block_midle">
	           {this._getContentMidle(this.props.type)}
	        </div>
		)
	}
}

module.exports = ContentMidle;
// <ul className="container__list">
// 						{this.props.list1.map((item, index) => <li key={index} className="list__item">{item}</li>)}
// 					</ul>
// 					<ul className="container__list">
// 						{this.props.list2.map((item, index) => <li key={index} className="list__item">{item}</li>)}
// 					</ul>