import React from 'react';

class ContentBottom extends React.Component {
	_getContentBottom(type) {
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
			<div className="container__block container__block_bottom hide_size">
	           {this._getContentBottom(this.props.type)}
	        </div>
		)
	}
}

module.exports = ContentBottom;