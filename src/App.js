import React, { Component } from 'react';
import Contacts from './components/contacts';

class App extends Component {
	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then((data) => {
			this.setState({ contacts: data })
		})
		.catch(console.log)
	}

	state = {
		contacts: []
	}

	render() {
		return (
			<Contacts contacts={this.state.contacts} />
		);
	}
}

export default App;
