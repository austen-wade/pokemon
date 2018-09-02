import React from 'react';

class PlayerUI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.pokedata,
			hp: this.props.stats[5].base_stat
		};
	}
	render() {
		let sprite = this.state.data.sprites.front_default,
			name = this.state.data.name;
			
		name = name.charAt(0).toUpperCase() + name.substr(1);

		return (
			<div className="bottom-wrap">
				<div className="poke-sprite-wrapper">
					<img src={ sprite } className="poke-sprite" />
				</div>
				<div className="poke-ui">
					<div className="poke-name">{ name }</div>
					<div className="poke-level">{ 1 }</div>
					<div className="poke-hp"></div>
					<div className="poke-hp-text">168 / 169</div>
					<div className="poke-xp"></div>
				</div>
			</div>
		)
	}
	componentDidUpdate() {
		console.log( this.props.pokedata );
	}
}

export default PlayerUI;