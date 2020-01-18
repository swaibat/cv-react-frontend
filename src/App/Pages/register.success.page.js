/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faCheck, faDesktop, faLayerGroup, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class registerSuccess extends Component {
	render() {
		return (
			<div className='card text-center bg-transparent border-0'>
				<div className='card-header bg-white rounded'>
					<p className='card-text'>Registration successful</p>
				</div>
				<div className='card-body text-left'>
					<div className='bd-example bd-example-tabs'>
						<div className='row'>
							<div className='col-2 ml-0 pl-0'>
								<div className='nav flex-column nav-pills' id='v-pills-tab' role='tablist' aria-orientation='vertical'>
									<Link className='nav-link text-center bg-white d-flex flex-column mb-3' id='v-pills-home-tab' href='#h' role='tab' aria-controls='v-pills-home' aria-selected='false'>
										<FontAwesomeIcon className='m-auto' icon={faLock} />
										Verify
									</Link>
									<Link className='nav-link text-center bg-white d-flex flex-column mb-3' id='v-pills-home-tab' href='#h' role='tab' aria-controls='v-pills-home' aria-selected='false'>
										<FontAwesomeIcon className='m-auto' icon={faUser} />
										Profile
									</Link>
									<Link className='nav-link text-center active d-flex flex-column' id='v-pills-home-tab' data-toggle='pill' href='#v-pills-home' role='tab' aria-controls='v-pills-home' aria-selected='true'>
										<FontAwesomeIcon className='m-auto' icon={faCheck} />
										complete
									</Link>
								</div>
							</div>
							<div className='col-10 bg-white p-4 rounded'>
								<div className='tab-content' id='v-pills-tabContent'>
									<div className='tab-pane fade show active' id='v-pills-home' role='tabpanel' aria-labelledby='v-pills-home-tab'>
										<h5 className='cv-title ml-2'>Useful Links</h5>
										<div className='d-flex justify-content-between my-4'>
											<button className='btn btn-outline-primary'>
												<FontAwesomeIcon className='mr-2' icon={faThLarge} />
												Visit dashboard
											</button>
											<button className='btn btn-outline-primary  ml-3'>
												<FontAwesomeIcon className='mr-2' icon={faDesktop} />
												Setup your website
											</button>
											<button className='btn btn btn-outline-primary'>
												<FontAwesomeIcon className='mr-2' icon={faLayerGroup} />
												Explorer products
											</button>
										</div>
										<h5 className='cv-title ml-2'>Youtube tutorials</h5>
										<div className='media tut-media shadow-x rounded p-2 border mt-3'>
											<iframe width='100' height='70' className='rounded align-self-center mr-3' src='https://www.youtube.com/embed/XysRGYNtpgI' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
											<div className='media-body ml-2 text-truncate'>
												<h5 className='mt-0 font-weight-bold'>Media heading</h5>
												Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
											</div>
										</div>
										<div className='media tut-media shadow-x rounded p-2 border mt-3'>
											<iframe width='100' height='70' className='rounded align-self-center mr-3' src='https://www.youtube.com/embed/XysRGYNtpgI' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
											<div className='media-body ml-2 text-truncate'>
												<h5 className='mt-0 font-weight-bold'>Media heading</h5>
												Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
											</div>
										</div>
										<div className='media tut-media shadow-x rounded p-2 border mt-3'>
											<iframe width='100' height='70' className='rounded align-self-center mr-3' src='https://www.youtube.com/embed/XysRGYNtpgI' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
											<div className='media-body ml-2 text-truncate'>
												<h5 className='mt-0 font-weight-bold'>Media heading</h5>
												Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default registerSuccess;
