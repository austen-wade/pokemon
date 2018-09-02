import React from 'react';
import './style.scss';

class EnemyUI extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: this.props.pokedata };
	}
	render() {
		let sprite;

		if ( this.props.pokedata['sprites'] ) {
			sprite = this.props.pokedata['sprites']['front_default'];
		}
		return (
			<div className="top-wrap">
				<div className="poke-ui">
					<div className="poke-name">Ivysaur</div>
					<div className="poke-level">47</div>
					<div className="poke-hp"></div>
				</div>
				<div className="poke-sprite-wrapper">
				<img src={ this.state.data['sprites']['front_default'] } className="poke-sprite" />
				</div>
			</div>
		)
	}
}

export default EnemyUI;