import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles/app.scss';

import PlayerUI from './components/player-ui/PlayerUI.js';
import EnemyUI from './components/enemy-ui/EnemyUI.js';
import UserInterface from './components/userInterface/UserInterface.js';

import Abra from "./poke-data/abra.json";
console.log(Abra);

function App () {
	const [pokeOne, setPokeOne] = useState(Abra);
	const [pokeTwo, setPokeTwo] = useState(Abra);

	let result;
	if (!(pokeOne.sprites && pokeTwo.sprites)) {
		result = <div>Loading ...</div>
	} else {
		result = (
			<div>
				<EnemyUI pokedata={ pokeTwo } />
				<PlayerUI pokedata={ pokeOne } />
			</div>
		);
	}
	return result;
}

export default App;