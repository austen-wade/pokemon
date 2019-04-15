import React from 'react';

function EnemyUI (props) {
	let sprite = props.pokedata.sprites.front_default,
		name = props.pokedata.name;

	// name = name.charAt(0).toUpperCase() + name.substr(1);

	return (
		<div className="wrapper -top">
			<div className="poke-ui">
				<div className="poke-name">{ name.toUpperCase() }</div>
				<div className="poke-level">&nbsp;47</div>
				<div className="poke-hp-bar">
					HP: <progress value="22" max="100"></progress>
				</div>
			</div>
			<div className="poke-sprite-wrapper">
			<img src={ sprite } className="poke-sprite" />
			</div>
		</div>
	)
}

export default EnemyUI;