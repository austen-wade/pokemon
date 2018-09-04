import React from 'react';

import './styles/app.scss';

import PlayerUI from './components/player-ui/PlayerUI.js';
import EnemyUI from './components/enemy-ui/EnemyUI.js';
import UserInterface from './components/userInterface/UserInterface.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pokeDataOne: {},
			pokeDataTwo: {}
		};
	}
	componentDidMount() {
		fetch('./poke-data/bulbasaur.json')
			.then(response => response.json())
			.then(data => this.setState({ pokeDataOne: data }));
		fetch('./poke-data/abra.json')
			.then(response => response.json())
			.then(data => this.setState({ pokeDataTwo: data }));
	}
	render() {
		let result;
		if (!(this.state.pokeDataOne.sprites && this.state.pokeDataTwo.sprites)) {
			result = <div>Loading ...</div>
		} else {
			result = (
				<div>
					<EnemyUI pokedata={ this.state.pokeDataTwo } />
					<PlayerUI pokedata={ this.state.pokeDataOne } />
				</div>
			);
		}
		return result;
	}
}

export default App;