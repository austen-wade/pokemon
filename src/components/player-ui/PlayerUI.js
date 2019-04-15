import React from 'react';
import UserInterface from '../userInterface/UserInterface';

function PlayerUI (props) {
	let sprite = props.pokedata.sprites.back_default,
		name = props.pokedata.name;

	// name = name.charAt(0).toUpperCase() + name.substr(1);

	return (
		<div className="wrapper -bottom">
			<div className="poke-sprite-wrapper">
				<img src={ sprite } className="poke-sprite" />
			</div>
			<div className="poke-ui">
				<div className="poke-name">{ name.toUpperCase() }</div>
				<div className="poke-level">{ 1 }</div>
				<div className="poke-hp-bar">
					HP: <progress value={ 168 } max="169"></progress>
				</div>
				<div className="poke-hp-text">168 / 169</div>
				<div className="poke-xp"></div>
			</div>
			<UserInterface />
		</div>
	)
}

export default PlayerUI;