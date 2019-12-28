import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='d-flex flex-wrap align-content-center justify-content-center w-100 mainContainer'>
					<div className='container min-vh-80'>
						<div className='row'>
							<div className='col-md-6 col-lg-6 mx-auto text-center'>
								<p className='text-secondary font-size-normal mt-3'> We cannot find the page you are looking for.</p>
								<Link to='/' className='text-decoration-none'>
									Back to Homepage
								</Link>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default NotFound;
