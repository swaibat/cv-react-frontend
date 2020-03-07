import React, { Component } from 'react';
import img from '../../../shared/assets/images/img.png';

class Plugin extends Component {
	render() {
		return (
			<>
				<div className='w-100 bg-white p-3 mt-4 rounded'>
					<div className='media w-100 p-3  border-bottom'>
						<img
							height='90'
							width='100'
							className='align-self-start rounded'
							src={img}
							alt='pluginImg'
						/>
						<div className='media-body px-3 border-right'>
							<h5 className='mb-1'>Stripe Plugin</h5>
							<p className='mb-1'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to
							</p>
						</div>
						<div className='align-self-center px-3'>
							<button className='btn btn-success btn-sm '>Activated</button>
						</div>
					</div>
					<div className='media border-bottom w-100 p-3'>
						<img
							height='90'
							width='100'
							className='align-self-start rounded'
							src={img}
							alt='pluginImg'
						/>
						<div className='media-body px-3 border-right'>
							<h5 className='mb-1'>Paypal Plugin</h5>
							<p className='mb-1'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to
							</p>
						</div>
						<div className='align-self-center px-3'>
							<button className='btn btn-outline-secondary btn-sm '>Activate</button>
						</div>
					</div>
					<div className='media border-bottom w-100 p-3 '>
						<img
							height='90'
							width='100'
							className='align-self-start rounded'
							src={img}
							alt='pluginImg'
						/>
						<div className='media-body px-3 border-right'>
							<h5 className='mb-1'>Client-Info Plugin</h5>
							<p className='mb-1'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to
							</p>
						</div>
						<div className='align-self-center px-3'>
							<button className='btn btn-success btn-sm '>Activated</button>
						</div>
					</div>
					<div className='media border-bottom w-100 p-3'>
						<img
							height='90'
							width='100'
							className='align-self-start rounded'
							src={img}
							alt='pluginImg'
						/>
						<div className='media-body px-3 border-right'>
							<h5 className='mb-1'>flags Plugin</h5>
							<p className='mb-1'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an
								unknown printer took a galley of type and scrambled it to
							</p>
						</div>
						<div className='align-self-center px-3'>
							<button className='btn btn-outline-secondary btn-sm'>Activate</button>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Plugin;
