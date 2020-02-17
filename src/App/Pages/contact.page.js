import React, { Component } from 'react';
import Header from './../Components/Header';
import Footer from './../Components/Footer';

class NotFound extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<div className='d-flex flex-wrap align-content-center justify-content-center w-100 mainContainer'>
					<div className='container min-vh-80'>
						<div className='row mt-5'>
							<div className='col-md-12 m-auto'>
								<div className='row bg-white p-3 rounded'>
									<div className='col-md-6 text-center'>
										<div id='map' className='contact-map rounded'></div>
									</div>
									<div className='col-md-6 bg-white'>
										<div className='card border-0 h-auto'>
											<div className='card-body'>
												<form>
													<div className='form-group'>
														<label htmlFor='exampleFormControlInput1'>Email address</label>
														<input type='email' className='form-control' id='exampleFormControlInput1' placeholder='name@example.com' />
													</div>
													<div className='form-group'>
														<label htmlFor='exampleFormControlInput1'>Subject</label>
														<input type='email' className='form-control' id='exampleFormControlInput1' placeholder='enter subject' />
													</div>
													<div className='form-group'>
														<label htmlFor='exampleFormControlTextarea1'>Enter message</label>
														<textarea className='form-control' id='exampleFormControlTextarea1' rows='5' />
													</div>
													<input type='submit' className='btn btn-primary' value='Send' />
												</form>
											</div>
										</div>
									</div>
								</div>
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
