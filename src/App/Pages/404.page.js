import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import Header from './../Components/Header';
import Footer from './../Components/Footer';
import NotFoundImg from '../../assets/images/404-page.svg';

class NotFound extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<div className='d-flex flex-wrap align-content-center justify-content-center w-100 mainContainer'>
					<div className='container min-vh-80'>
						<div className='row'>
							<div className='col-md-6 col-lg-6 mx-auto text-center'>
								<img className='mt-3' src={NotFoundImg} alt='not found' />
								<p className='text-secondary font-size-normal mt-3'>
									{' '}
									We cannot find the page you are looking for.
								</p>
								<Link
									onClick={() => window.history.go(-1)}
									className='btn btn-primary text-decoration-none text-capitalize'
								>
									<FontAwesomeIcon className='mr-2' icon={faHandPointLeft} />
									Back to Previous Page
								</Link>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default NotFound;
