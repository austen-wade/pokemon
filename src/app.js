import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { title: "Austen is cool" }

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ title: "Austen is alive" });
	}
	
	render() {
		return <button onClick={ this.handleClick }>{ this.state.title }</button>;
	}
}

export default App;