import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			panicked: false,
		}

		this.squeelAudio = new Audio(wreee);
		this.exclaimAudio = new Audio(exclaim);
	}

	throwAFit = () => {
		this.setState({ panicked: true })
		setTimeout(() => this.props.alterEnvironment('inhospitable'), 1000)
	}

	relax = () => {
		setTimeout(() => {
			this.setState({ panicked: false })
			this.props.alterEnvironment('docile')
		}, 2000);
	}

	exclaim = () => {
		if (this.state.panicked) return
		this.exclaimAudio.play()
		this.squeelAudio.play()
		this.throwAFit()
		this.relax()

	}

	panic = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

	render() {
		return (
			<div id="galaxy-s-note" onClick={this.exclaim}>
				{(this.state.panicked) ? this.panic() : null}
			</div>
		)
	}
}
