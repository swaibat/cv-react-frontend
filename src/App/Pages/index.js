import React, { Component } from 'react';
import AdImg from '../../assets/images/img.png';
import Banner from '../../assets/images/banner.png';
import { Icon } from '@iconify/react';
import heart from '@iconify/icons-mdi-light/heart';
import solid from '@iconify/icons-mdi/heart';

class Landing extends Component {
	render() {
		return (
			<main className='d-flex flex-column align-items-center '>
				<div className='container-fluid bg-secondary slider'>
					<h1>Main Content</h1>
				</div>
				{/* one */}

				<div className='row sponsor-container bg-warning border-primary'>
					<div className='flex-fill col-md-5 bg-secondary border'>
						<img src={AdImg} className='w-100' alt='...' />
					</div>
					<div className='col-md-7 row bg-secondary border'>
						<div class='card card-product shadow-sm  mb-4'>
							<img src={AdImg} className='img-thumbnail mx-auto' alt='...' />
							<div class='card-footer'>
								<span className='heart text-primary shadow-sm'>
									<Icon icon={solid} />
								</span>
								<p className='card-text mb-1'>hello world name of ad</p>
								<h5 className='card-text'>$650000</h5>
							</div>
						</div>
						<div class='card card-product shadow-sm  mb-4'>
							<img src={AdImg} className='img-thumbnail mx-auto' alt='...' />
							<div class='card-footer'>
								<span className='heart text-primary shadow-sm'>
									<Icon icon={heart} />
								</span>
								<p className='card-text mb-1'>hello world name of ad</p>
								<h5 className='card-text'>$650000</h5>
							</div>
						</div>
						<div class='card card-product shadow-sm  mb-4'>
							<img src={AdImg} className='img-thumbnail mx-auto' alt='...' />
							<div class='card-footer'>
								<span className='heart text-primary shadow-sm'>
									<Icon icon={heart} />
								</span>
								<p className='card-text mb-1'>hello world name of ad</p>
								<h5 className='card-text'>$650000</h5>
							</div>
						</div>
					</div>
				</div>
				{/* two */}
				<div className='product-title w-100'>
					<h4>Featured</h4>
					<ul class='nav nav-tabs' id='myTab' role='tablist'>
						<li class='nav-item'>
							<a class='nav-link active' id='home-tab' data-toggle='tab' href='#home' role='tab' aria-controls='home' aria-selected='true'>
								Home
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' id='profile-tab' data-toggle='tab' href='#profile' role='tab' aria-controls='profile' aria-selected='false'>
								Profile
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' id='contact-tab' data-toggle='tab' href='#contact' role='tab' aria-controls='contact' aria-selected='false'>
								Contact
							</a>
						</li>
					</ul>
					<div class='tab-content' id='myTabContent'>
						<div class='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
							...
						</div>
						<div class='tab-pane fade' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
							...
						</div>
						<div class='tab-pane fade' id='contact' role='tabpanel' aria-labelledby='contact-tab'>
							...
						</div>
					</div>
				</div>
				<div className='sponsor-container row  border-primary justify-content-between'>
					<div class='card card-product shadow-sm  mb-4'>
						<img src={AdImg} className='img-thumbnail mx-auto' alt='...' />
						<div class='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div class='card card-product shadow-sm  mb-4'>
						<img src={AdImg} className='img-thumbnail mx-auto' alt='...' />
						<div class='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div class='card card-product shadow-sm  mb-4'>
						<img src={AdImg} className='img-thumbnail mx-auto' alt='...' />
						<div class='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div class='card card-product shadow-sm  mb-4'>
						<img src={AdImg} className='img-thumbnail mx-auto' alt='...' />
						<div class='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div class='card card-product shadow-sm  mb-4'>
						<img src={AdImg} className='img-thumbnail mx-auto' alt='...' />
						<div class='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div class='card card-product shadow-sm  mb-4'>
						<img src={AdImg} className='img-thumbnail mx-auto' alt='...' />
						<div class='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div class='card card-product shadow-sm  mb-4'>
						<img src={AdImg} className='img-thumbnail mx-auto' alt='...' />
						<div class='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div class='card card-product shadow-sm  mb-4'>
						<img src={AdImg} className='img-thumbnail mx-auto' alt='...' />
						<div class='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div class='card card-product shadow-sm  mb-4'>
						<img src={AdImg} className='img-thumbnail mx-auto' alt='...' />
						<div class='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div class='card card-product shadow-sm  mb-4'>
						<img src={AdImg} className='img-thumbnail mx-auto' alt='...' />
						<div class='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div className='p-3 border text-center w-100 my-4'> Load more </div>
				</div>
			</main>
		);
	}
}

export default Landing;
