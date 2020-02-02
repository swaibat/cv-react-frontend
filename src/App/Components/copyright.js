import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Copyrigt extends Component {
	render() {
		return (
			<div className='cv-copyright p-2 px-3 d-flex justify-content-between align-items-center'>
				<span>
					Copyright Â© 2020 <a href='/'>biz.ug</a>
				</span>
				<span>
					<button className='btn btn-secondary mx-2'>
						<FontAwesomeIcon icon={faPlus} />
					</button>
					<button className='btn btn-secondary mx-2'>
						<FontAwesomeIcon icon={faPlus} />
					</button>
					<button className='btn btn-secondary mx-2'>
						<FontAwesomeIcon icon={faPlus} />
					</button>
				</span>
			</div>
		);
	}
}

export default Copyrigt;
