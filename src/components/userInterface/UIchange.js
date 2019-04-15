import React from "react";

let dialogMessage = "It's not very effective ..."; // state-ish
let showAbilities = true; // state
let showSelectMenu = true; // state

let selectOptions = [
	{
		key: "fight",
		text: "FIGHT",
		selected: true
	},
	{
		key: "pkmn",
		text: (
			<span>
				<sup>P</sup>
				<sub>K</sub>
				<sup>M</sup>
				<sub>N</sub>
			</span>
		),
		selected: false
	},
	{
		key: "item",
		text: "ITEM",
		selected: false
	},
	{
		key: "run",
		text: "RUN",
		selected: false
	}
];

let abilityOptions = [];

function UserInterface () {
	var mapOptions = function( inOptions, classname ) {
		let options = inOptions.map(item => (
			<div
				key={ item.key }
				className={
					item.selected
						? "option -active"
						: "option"
					}>
				{ item.text }
			</div>
		));
		
		return <div className={ classname }>{ options }</div>
	}

	let abilitiesMenu, selectMenu;

	if ( showAbilities ) {
		abilitiesMenu = mapOptions( abilityOptions, 'ability-menu' );
	}
	if ( showSelectMenu ) {
		selectMenu = mapOptions( selectOptions, 'select-menu' );
	}
	return (

		<div className="menu-wrapper">
			<div className="dialog">
				<div className="dialog-message">
					{ dialogMessage }
				</div>
				{ abilitiesMenu }
				{ selectMenu }
			</div>
		</div>
	)
}

export default UserInterface;