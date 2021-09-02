import { Component, useState } from 'react'

import RippleButton from './components/ripple'

class App extends Component {
	render() {

		return (
			<div>
				<RippleButton onClick={e => console.log(e)} color="#FFC300">Click me</RippleButton>
				<RippleButton onClick={e => console.log(e)} color="#FF5733">Click me</RippleButton>
			</div>

		)
	}
}

export default App