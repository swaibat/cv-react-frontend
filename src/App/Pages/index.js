import React, { Component } from 'react';
import AdImg from '../../assets/images/img.png';
// import Banner from '../../assets/images/banner.png';
import { Icon } from '@iconify/react';
import heart from '@iconify/icons-mdi-light/heart';
import solid from '@iconify/icons-mdi/heart';

class Landing extends Component {
	render() {
		return (
			<main className='d-flex flex-column align-items-center'>
				<div className='container-fluid bg-secondary slider'>
					<h1>Main Content</h1>
				</div>
				{/* two */}
				<div className='product-title w-100'>
					<h4>Featured</h4>
				</div>
				<div className='sponsor-container d-flex w-100 row justify-content-center align-items-center'>
					<div className='p-0 flex-fill card'>
						<img src={AdImg} className='img-thumbnail' alt='...' />
						<div className='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div className='p-0 flex-fill card'>
						<img src={AdImg} className='img-thumbnail' alt='...' />
						<div className='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div className='p-0 flex-fill card'>
						<img src={AdImg} className='img-thumbnail' alt='...' />
						<div className='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={solid} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div className='p-0 flex-fill card'>
						<img src={AdImg} className='img-thumbnail' alt='...' />
						<div className='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div className='p-0 flex-fill card'>
						<img src={AdImg} className='img-thumbnail' alt='...' />
						<div className='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div className='p-0 flex-fill card'>
						<img src={AdImg} className='img-thumbnail' alt='...' />
						<div className='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div className='p-0 flex-fill card'>
						<img src={AdImg} className='img-thumbnail' alt='...' />
						<div className='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div className='p-0 flex-fill card'>
						<img src={AdImg} className='img-thumbnail' alt='...' />
						<div className='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div className='p-0 flex-fill card'>
						<img src={AdImg} className='img-thumbnail' alt='...' />
						<div className='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
					<div className='p-0 flex-fill card'>
						<img src={AdImg} className='img-thumbnail' alt='...' />
						<div className='card-footer'>
							<span className='heart text-primary shadow-sm'>
								<Icon icon={heart} />
							</span>
							<p className='card-text mb-1'>hello world name of ad</p>
							<h5 className='card-text'>$650000</h5>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default Landing;
