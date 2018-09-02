import React from 'react';

import './app.scss';
import PlayerUI from './components/player-ui/PlayerUI.js';
import EnemyUI from './components/enemy-ui/EnemyUI.js';
import UserInterface from './components/userInterface/UserInterface.js';

import randomInt from './util/randomInt';

const API = 'https://pokeapi.co/api/v2/pokemon/';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pokeDataOne: {},
			pokeDataTwo: {}
		};
	}
	componentDidMount() {
		fetch(API + randomInt( 1, 151 ))
			.then(response => response.json())
			.then(data => this.setState({ pokeDataOne: data }));
		fetch(API + randomInt( 1, 151 ))
			.then(response => response.json())
			.then(data => this.setState({ pokeDataTwo: data }));
	}
	render() {
		let loading = true;

		if ( this.state.pokeDataOne['sprites'] && this.state.pokeDataTwo['sprites'] ) {
			loading = false;
		}

		let result;
		if ( loading ) {
			result = (
				<div>Loading data from&nbsp;
					<a href="https://pokeapi.co/">https://pokeapi.co/</a>
					&nbsp;...</div>
			)
		} else {
			result = (
				<div>
					<PlayerUI pokedata={ this.state.pokeDataOne } />
					<EnemyUI pokedata={ this.state.pokeDataTwo } />
					<UserInterface pokedata={ this.state.pokeDataOne } />
				</div>
			);
		}

		return result;
	}
}

export default App;