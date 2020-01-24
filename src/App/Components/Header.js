/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBell, faHeart } from '@fortawesome/free-solid-svg-icons';
import Category from './categories.nav';
import { Link } from 'react-router-dom';
import token from '../../helper';
import Logout from './logout.component';

class Header extends Component {
	render() {
		return (
			<>
				<nav className='navbar navbar-expand-lg navbar-sm-dark  navbar-light bg-white'>
					<a className='navbar-brand p-0' href='/'>
						<svg xmlns='http://www.w3.org/2000/svg' width='148' height='43' viewBox='0 0 148 43'>
							<defs>
								<clipPath id='a'>
									<rect width='148' height='43' />
								</clipPath>
							</defs>
							<path d='M-.067,0H103.178V7a4.915,4.915,0,0,1-4.825,5H4.758C2.093,12-1.9,11.348-1.9,8.587Z' transform='translate(31.311 28)' fill='#8e04b7' />
							<g clip-path='url(#a)'>
								<path d='M100.892,43h0Z' fill='#fff' />
								<g transform='translate(1.255 -7)'>
									<text transform='translate(33.745 44)' fill='#eaeaea' font-size='9' font-family='ArialRoundedMTBold, Arial Rounded MT Bold'>
										<tspan x='0' y='0'>
											Your business is live
										</tspan>
									</text>
									<text transform='translate(31.745 33)' fill='#ccc' font-size='35' font-family='ArialRoundedMTBold, Arial Rounded MT Bold'>
										<tspan x='0' y='0'>
											biz.
										</tspan>
										<tspan y='0' font-size='26'>
											UG
										</tspan>
									</text>
									<g transform='translate(0 9.388)'>
										<path
											d='M30.954,23.129,23.723,16.32h0a7.52,7.52,0,0,1,.186,1.666v4.259a10.379,10.379,0,0,1-1.805,5.82,4.97,4.97,0,0,0,4.963,3.9,5.51,5.51,0,0,0,5.075-3.193,4.956,4.956,0,0,0-1.187-5.638Zm0,0'
											transform='translate(3.157 5.15)'
											fill='#8e04b7'
										/>
										<path
											d='M8.662,17.985a7.286,7.286,0,0,1,.2-1.673l-.011.009L1.616,23.129A4.956,4.956,0,0,0,.429,28.764,5.509,5.509,0,0,0,5.5,31.959a4.97,4.97,0,0,0,4.963-3.9,10.379,10.379,0,0,1-1.805-5.82Zm0,0'
											transform='translate(-0.01 5.15)'
											fill='#8e04b7'
										/>
										<path
											d='M19.22,5.4l.6-1.328a3.86,3.86,0,0,1,3.538-2.2h0a1.024,1.024,0,0,0,.717-.287A.9.9,0,0,0,24.355.9a.99.99,0,0,0-1.03-.9,5.849,5.849,0,0,0-5.33,3.333l-.826,1.815H17.5a5.952,5.952,0,0,1,1.717.252Zm0,0'
											transform='translate(2.279 0)'
											fill='#8e04b7'
										/>
										<path
											d='M9.017,1.873h0a3.86,3.86,0,0,1,3.54,2.2L13.162,5.4a5.95,5.95,0,0,1,1.713-.25h.336l-.826-1.815A5.849,5.849,0,0,0,9.054,0a.99.99,0,0,0-1.03.9.9.9,0,0,0,.276.686,1.024,1.024,0,0,0,.717.287Zm0,0'
											transform='translate(1.059 0)'
											fill='#8e04b7'
										/>
										<path d='M10.515,25.072H22.18a8.5,8.5,0,0,0,.459-2.139H10.056a8.511,8.511,0,0,0,.459,2.139Zm0,0' transform='translate(1.511 3.96)' fill='#8e04b7' />
										<path d='M10.029,18.921H22.667V21.06H10.029Zm0,0' transform='translate(1.51 3.268)' fill='#8e04b7' />
										<path
											d='M10.1,17.049H22.586a5.9,5.9,0,0,0-2.454-3.829,3.329,3.329,0,0,0,1.282-3.844A3.644,3.644,0,0,0,17.942,7.02h-3.2a3.644,3.644,0,0,0-3.472,2.356,3.329,3.329,0,0,0,1.282,3.844A5.9,5.9,0,0,0,10.1,17.049Zm0,0'
											transform='translate(1.514 1.649)'
											fill='#8e04b7'
										/>
										<path
											d='M12.271,28.112l3.243,3.524a1.035,1.035,0,0,0,1.5,0l3.243-3.524a9.062,9.062,0,0,0,.909-1.167H11.362a9.022,9.022,0,0,0,.909,1.167Zm0,0'
											transform='translate(1.592 5.15)'
											fill='#8e04b7'
										/>
									</g>
								</g>
							</g>
						</svg>
					</a>
					<button
						className='navbar-toggler rounded-sm'
						type='button'
						data-toggle='collapse'
						data-target='#navbarCollapse'
						aria-controls='navbarCollapse'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse ' id='navbarCollapse'>
						<div className='ml-auto mt-2 mt-md-0'>
							<button className='btn text-primary mx-4 my-sm-0 p-0' type='submit'>
								<span className='notificationIcon'>
									<FontAwesomeIcon icon={faBell} />
								</span>
								<span className='badge badge-pill bg-light mt-2 ml-n2 position-absolute border shadow-xs'>3</span>
							</button>
							<button className='btn text-primary mx-3 my-sm-0 p-0' type='submit'>
								<span className='notificationIcon'>
									<FontAwesomeIcon icon={faHeart} />
								</span>
								<span className='badge badge-pill bg-light mt-2 ml-n1 position-absolute border shadow-sm'>0</span>
							</button>
							<button className='btn btn-primary my-2 mx-4 my-sm-0 btn-sm' type='submit'>
								<span className='mr-2'>
									<FontAwesomeIcon icon={faPlus} />
								</span>
								Advert
							</button>
							{token() ? (
								<Logout />
							) : (
								<div className='btn-group' role='group' aria-label='Basic example'>
									<a href='/verify' type='button' className='btn btn-sm btn-primary btn-outline-light'>
										signup
									</a>
									<Link type='button' className='btn btn-sm btn-outline-primary' to='/login'>
										Login
									</Link>
								</div>
							)}
						</div>
					</div>
				</nav>
				<Category />
			</>
		);
	}
}

export default Header;
