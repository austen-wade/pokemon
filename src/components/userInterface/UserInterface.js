import React from 'react';

import './style.scss';

class UserInterface extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dialogMessage: "It's not very effective ...",
			showAbilities: false,
			showSelectMenu: true,
			selectOptions: [
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
					selected: false,
				},
				{
					key: "item",
					text: "ITEM",
					selected: false,
				},
				{
					key: "run",
					text: "RUN",
					selected: false,
				},
			],
			abilityOptions: []
		};

		this.keyPressed = this.keyPressed.bind(this);
		this.mapOptions = this.mapOptions.bind(this);
	}
	keyPressed(e) {
		let stateClone = Object.assign({}, this.state),
			newOptions = stateClone.selectOptions,
			activeItem;

		this.state.selectOptions.forEach(item => {
			if (item.selected) {
				activeItem = item;
			}
		});

		let moveTo = function(target) {
			if (activeItem.key === target) return newOptions;
			return newOptions.map(el => {
				if (el.key == activeItem.key) {
					return {
						key: el.key,
						text: el.text,
						selected: false
					}
				}
				if (el.key == target) {
					return {
						key: el.key,
						text: el.text,
						selected: true
					}
				}
				else {
					return el;
				}
			});
		}

		let nextItem = activeItem.key;
		switch (e.key) {
			case 'ArrowUp':
				nextItem = activeItem.key == 'item' ? 'fight' : nextItem;
				nextItem = activeItem.key == 'run' ? 'pkmn' : nextItem;
				break;
		
			case 'ArrowRight':
				nextItem = activeItem.key == 'fight' ? 'pkmn' : nextItem;
				nextItem = activeItem.key == 'item' ? 'run' : nextItem;
				break;

			case 'ArrowDown':
				nextItem = activeItem.key == 'fight' ? 'item' : nextItem;
				nextItem = activeItem.key == 'pkmn' ? 'run' : nextItem;
				break;

			case 'ArrowLeft':
				nextItem = activeItem.key == 'pkmn' ? 'fight' : nextItem;
				nextItem = activeItem.key == 'run' ? 'item' : nextItem;
				break;

			case 'Enter':
				console.log( "Enter:", activeItem.key );
		}
		stateClone.selectOptions = moveTo(nextItem);
		this.setState(stateClone);
	}
	componentDidMount() {
		document.addEventListener('keyup', this.keyPressed, false);
	}
	componentWillMount() {
		document.removeEventListener('keyup', this.keyPressed, false);
	}
	mapOptions( inOptions, classname ) {
		let options = inOptions.map(item => (
			<div key={ item.key } className={ item.selected ? "option -active" : "option" }>
				{ item.text }
			</div>
		));

		return (
			<div className={ classname }>{ options }</div>
		)
	}
	render() {
		let abilitiesMenu = "",
			selectMenu = "";

		if ( this.state.showAbilities ) {
			abilitiesMenu = this.mapOptions( this.state.abilityOptions, 'ability-menu' );
		}
		if ( this.state.showSelectMenu ) {
			selectMenu = this.mapOptions( this.state.selectOptions, 'select-menu' );
		}
		return (
			<div className="menu-wrapper">
				<div className="dialog">
					<div className="dialog-message">
						{ this.state.dialogMessage }
					</div>
					{ abilitiesMenu }
					{ selectMenu }
				</div>
			</div>
		)
	}
}

export default UserInterface;