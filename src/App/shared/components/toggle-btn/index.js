import React, { Component } from 'react';

class Toggle extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const { name } = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.props.data.setState({ [name]: value });
	}

	render() {
		const { label, name } = this.props;
		return (
			<div className='d-flex mt-4'>
				<label>{label}</label>
				<span className='ml-3 mt-1 checks-btns'>
					<div className='button b2' id='button-10'>
						<input type='checkbox' name={name} onChange={this.handleChange} className='checkbox' />
						<div className='knobs'>
							<span>YES</span>
						</div>
						<div className='layer'></div>
					</div>
				</span>
			</div>
		);
	}
}

export default Toggle;
