import React from 'react';

class EnemyUI extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: this.props.pokedata };
	}
	render() {
		let sprite = this.props.pokedata.sprites.front_default,
			name = this.state.data.name;

		name = name.charAt(0).toUpperCase() + name.substr(1);
		return (
			<div className="wrapper -top">
				<div className="poke-ui">
					<div className="poke-name">{ name }</div>
					<div className="poke-level">&nbsp;47</div>
					<div className="poke-hp"></div>
				</div>
				<div className="poke-sprite-wrapper">
				<img src={ sprite } className="poke-sprite" />
				</div>
			</div>
		)
	}
}

export default EnemyUI;