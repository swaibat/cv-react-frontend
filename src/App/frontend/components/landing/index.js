import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Slider from '../heroslider';

class Landing extends React.Component {
	render() {
		document.title = 'Home';
		return (
			<>
				<Header />
				<Slider />
				<main className='d-flex flex-column align-items-center'>
					<div className='container p-1 p-md-2 min-vh-80 d-flex w-100 row justify-content-center align-items-center '>
						<div className='d-flex icons-lg text-secondary align-items-center justify-content-between mt-n6 bg-white w-100 rounded p-3 z-ndex-1 font-weight-light'>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2'>
								<ion-icon name='car-sport-outline' />
								<p className='mb-0'>vehicles</p>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2'>
								<ion-icon name='home-outline' />
								<p className='mb-0'>property</p>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2'>
								<ion-icon name='game-controller-outline' />
								<p className='mb-0'>electronics</p>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2'>
								<ion-icon src="data:image/svg+xml,%3Csvg height='512' viewBox='0 0 512 512' width='512' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Smartphone'%3E%3Cpath d='m352 8h-192a40.045 40.045 0 0 0 -40 40v416a40.045 40.045 0 0 0 40 40h192a40.045 40.045 0 0 0 40-40v-416a40.045 40.045 0 0 0 -40-40zm-41.758 16-4.8 24h-98.883l-4.8-24zm65.758 440a24.027 24.027 0 0 1 -24 24h-192a24.027 24.027 0 0 1 -24-24v-416a24.027 24.027 0 0 1 24-24h25.441l6.714 33.569a8 8 0 0 0 7.845 6.431h112a8 8 0 0 0 7.845-6.431l6.714-33.569h25.441a24.027 24.027 0 0 1 24 24z'/%3E%3Cpath d='m208 456h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16z'/%3E%3Cpath d='m240 456h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16z'/%3E%3C/g%3E%3C/svg%3E" />
								<p className='mb-0'>Phones & Tablets</p>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2'>
								<ion-icon src="data:image/svg+xml,%3Csvg id='Outline' height='512' viewBox='0 0 512 512' width='512' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='336' cy='320' r='8'/%3E%3Ccircle cx='184' cy='320' r='8'/%3E%3Cpath d='m368.038 284.143c-9.311-12.258-16.038-21.115-16.038-28.143 0-14.334 9.965-32.619 19.6-50.3 10.4-19.08 20.221-37.1 20.4-53.614.138-12.994-12.426-41.878-16.17-50.19l-7.871-78.696a8 8 0 0 0 -7.959-7.2h-16a8 8 0 0 0 -7.96 7.2l-7.326 73.257c-16.759 2.106-31.494 11.051-44.687 19.06-10.573 6.421-20.558 12.483-28.027 12.483s-17.455-6.062-28.027-12.479c-13.193-8.009-27.929-16.954-44.687-19.06l-7.326-73.261a8 8 0 0 0 -7.96-7.2h-16a8 8 0 0 0 -7.96 7.2l-7.87 78.7c-3.744 8.312-16.308 37.2-16.17 50.19.176 16.512 10 34.534 20.4 53.614 9.638 17.682 19.6 35.967 19.6 50.3 0 7.25-6.084 16.149-14.5 28.468-21.509 31.451-57.5 84.099-57.5 203.528a8 8 0 0 0 8 8h328a8 8 0 0 0 8-8c0-119.651-40.04-172.363-63.962-203.857zm-213.592-86.1c-9-16.52-18.313-33.6-18.446-46.127-.08-7.484 8.886-30.582 15.278-44.594a8.007 8.007 0 0 0 .682-2.525l7.28-72.797h1.52l7.28 72.8a8 8 0 0 0 7.96 7.2c15.34 0 29.742 8.743 43.67 17.2 12.54 7.61 24.384 14.8 36.33 14.8s23.79-7.19 36.329-14.8c13.928-8.455 28.33-17.2 43.67-17.2a8 8 0 0 0 7.96-7.2l7.28-72.8h1.52l7.28 72.8a8.013 8.013 0 0 0 .682 2.526c6.392 14 15.358 37.1 15.279 44.593-.134 12.525-9.444 29.607-18.447 46.127-6.132 11.25-12.38 22.721-16.56 33.958h-169.987c-4.18-11.241-10.428-22.712-16.56-33.962zm20.908 49.957h161.291a52.616 52.616 0 0 0 -.646 8 29.593 29.593 0 0 0 1.143 8h-162.2a31.97 31.97 0 0 0 1.058-8 52.616 52.616 0 0 0 -.646-8zm208.566 232c-.808-48.856-9.034-92.9-24.508-131.01a8 8 0 1 0 -14.82 6.018c14.7 36.2 22.533 78.223 23.333 124.99h-216.154c.812-46.566 8.734-88.548 23.6-124.882l.007-.018c.01-.023.018-.046.027-.068a8 8 0 1 0 -14.8-6.062c-15.672 38.272-24 82.324-24.825 131.032h-31.723c1.553-108.833 34.67-157.281 54.646-186.5 3.337-4.882 6.356-9.308 8.914-13.5h177.559c2.89 4.29 6.32 8.817 10.12 13.821 22.168 29.179 58.917 77.554 60.641 186.179z'/%3E%3C/svg%3E" />
								<p className='mb-0'>Fashions</p>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2'>
								<ion-icon name='gift-outline' />
								<p className='mb-0'>Gifts & Toys</p>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2'>
								<ion-icon src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512.001 512.001' style='enable-background:new 0 0 512.001 512.001;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M479.655,29.8C459.804,10.604,433.664,0.033,406.05,0.033c-27.613,0-53.754,10.572-73.606,29.768l-1.332,1.289 c-32.313,31.247-41.37,79.665-22.533,120.481l33.357,72.28v243.452c0,24.629,20.036,44.665,44.665,44.665h34.655 c24.628,0,44.664-20.036,44.664-44.665V223.957l35.107-71.241C521.437,111.297,512.849,61.9,479.655,29.8z M445.922,467.302 c0,13.601-11.066,24.668-24.667,24.668h-34.655c-13.602,0-24.668-11.066-24.668-24.668v-152.31h44.015v64.446 c0,5.521,4.476,9.999,9.999,9.999c5.522,0,9.999-4.477,9.999-9.999v-64.446h19.976V467.302z M361.932,294.995v-63.583H377.1 c0.015,0,0.029,0.002,0.043,0.002c0.016,0,0.032-0.002,0.047-0.002h56.386c0.016,0,0.032,0.002,0.047,0.002 c0.015,0,0.029-0.002,0.043-0.002h12.255v63.583H361.932z M483.088,143.878l-33.281,67.537h-4.392l8.058-48.35 c0.908-5.446-2.772-10.599-8.219-11.507c-5.446-0.906-10.599,2.772-11.507,8.22l-8.606,51.637h-11.215v-49.994 c0-5.521-4.476-9.999-9.999-9.999c-5.522,0-9.999,4.477-9.999,9.999v49.994h-8.303l-8.607-51.638 c-0.907-5.445-6.06-9.125-11.507-8.219c-5.447,0.908-9.127,6.06-8.219,11.508l8.059,48.349h-7.132l-31.485-68.223 c-15.278-33.107-7.933-72.38,18.28-97.727l1.332-1.289c33.479-32.372,85.928-32.372,119.406,0 C492.678,70.213,499.645,110.28,483.088,143.878z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M133.983,320.093v-44.095c0-8.182-4.944-15.223-11.998-18.316v-61.783c0-11.077-6.065-21.207-15.829-26.44L74.16,152.315 c-9.384-5.027-20.439-4.767-29.575,0.704c-9.135,5.467-14.588,15.088-14.588,25.735v78.927 c-7.054,3.093-11.998,10.134-11.998,18.316v44.095C7.907,321.099,0,329.636,0,339.989v141.982 c0,16.54,13.456,29.996,29.996,29.996h91.988c16.54,0,29.996-13.456,29.996-29.996V339.989 C151.981,329.637,144.074,321.1,133.983,320.093z M49.994,178.754c0-5.115,3.401-7.703,4.862-8.579 c1.462-0.875,5.35-2.649,9.858-0.234l31.996,17.144c3.255,1.744,5.276,5.121,5.276,8.813v60.101H49.994V178.754z M37.995,275.998 h2h71.991h2v43.994h-75.99V275.998z M131.983,481.972c0,5.513-4.485,9.999-9.999,9.999h-17.998v-75.99 c0-5.521-4.476-9.999-9.999-9.999c-5.522,0-9.999,4.477-9.999,9.999v75.99H29.996c-5.513,0-9.999-4.485-9.999-9.999V339.99 h111.986V481.972z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M101.057,370.916c-1.86-1.86-4.429-2.93-7.069-2.93c-2.63,0-5.209,1.069-7.069,2.93c-1.86,1.86-2.93,4.439-2.93,7.069 c0,2.63,1.07,5.209,2.93,7.068c1.86,1.86,4.439,2.931,7.069,2.931c2.64,0,5.209-1.07,7.069-2.931 c1.86-1.859,2.93-4.438,2.93-7.068C103.987,375.355,102.917,372.775,101.057,370.916z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M293.963,246.002h-45.994v-97.988h17.01c5.522,0,9.999-4.477,9.999-9.999s-4.476-9.999-9.999-9.999h-17.01v-11.998h17.01 c5.522,0,9.999-4.477,9.999-9.999s-4.476-9.999-9.999-9.999h-17.01V84.022h17.01c5.522,0,9.999-4.477,9.999-9.999 s-4.476-9.999-9.999-9.999h-17.01V52.026h17.01c5.522,0,9.999-4.477,9.999-9.999s-4.476-9.999-9.999-9.999h-17.01V20.03h17.01 c5.522,0,9.999-4.477,9.999-9.999s-4.476-9.999-9.999-9.999h-54.016c-5.522,0-9.999,4.477-9.999,9.999s4.476,9.999,9.999,9.999 h17.009v11.998h-17.01c-5.522,0-9.999,4.477-9.999,9.999s4.476,9.999,9.999,9.999h17.01v11.998h-17.01 c-5.522,0-9.999,4.477-9.999,9.999s4.476,9.999,9.999,9.999h17.01v11.998h-17.01c-5.522,0-9.999,4.477-9.999,9.999 s4.476,9.999,9.999,9.999h17.01v11.998h-17.01c-5.522,0-9.999,4.477-9.999,9.999s4.476,9.999,9.999,9.999h17.01v97.988h-45.994 c-5.522,0-9.999,4.477-9.999,9.999v111.689c0,49.181,13.474,97.406,38.966,139.462c1.813,2.99,5.054,4.815,8.551,4.815h36.949 c3.497,0,6.739-1.826,8.551-4.815c25.492-42.057,38.966-90.282,38.966-139.462V256 C303.961,250.478,299.485,246.002,293.963,246.002z M283.964,367.689c0,43.657-11.473,86.506-33.225,124.281h-25.54 c-21.751-37.776-33.224-80.624-33.224-124.281v-57.696h60.253c5.522,0,9.999-4.477,9.999-9.999s-4.476-9.999-9.999-9.999h-60.253 v-23.997h91.988V367.689z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M423.016,407.361c-1.86-1.86-4.439-2.93-7.069-2.93c-2.63,0-5.209,1.069-7.069,2.93c-1.86,1.86-2.93,4.438-2.93,7.069 c0,2.63,1.07,5.209,2.93,7.068c1.86,1.87,4.439,2.931,7.069,2.931c2.63,0,5.209-1.061,7.069-2.931 c1.86-1.859,2.93-4.429,2.93-7.068C425.946,411.799,424.876,409.221,423.016,407.361z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A" />
								<p className='mb-0'>Health & Beaty</p>
							</div>
						</div>
						<div className='h-50 w-100 py-3'>
							<h5 className='cv-title ml-2'>Similar adverts</h5>
							<div className='m-0 mt-3 row'>
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
									<a
										href='/products/techno spark 4'
										className='card text-secondary w-100 bg-white border-0 shadow-xs'
									>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													focusable='false'
													width='1em'
													height='1em'
													preserveAspectRatio='xMidYMid meet'
													viewBox='0 0 24 24'
												>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
									<a
										href='/products/techno spark 4'
										className='card text-secondary w-100 bg-white border-0 shadow-xs'
									>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													focusable='false'
													width='1em'
													height='1em'
													preserveAspectRatio='xMidYMid meet'
													viewBox='0 0 24 24'
												>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
									<a
										href='/products/techno spark 4'
										className='card text-secondary w-100 bg-white border-0 shadow-xs'
									>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													focusable='false'
													width='1em'
													height='1em'
													preserveAspectRatio='xMidYMid meet'
													viewBox='0 0 24 24'
												>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
									<a
										href='/products/techno spark 4'
										className='card text-secondary w-100 bg-white border-0 shadow-xs'
									>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													focusable='false'
													width='1em'
													height='1em'
													preserveAspectRatio='xMidYMid meet'
													viewBox='0 0 24 24'
												>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className='h-50 w-100 py-3'>
							<h5 className='cv-title ml-2'>Similar adverts</h5>
							<div className='m-0 mt-3 row'>
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
									<a
										href='/products/techno spark 4'
										className='card text-secondary w-100 bg-white border-0 shadow-xs'
									>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													focusable='false'
													width='1em'
													height='1em'
													preserveAspectRatio='xMidYMid meet'
													viewBox='0 0 24 24'
												>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
									<a
										href='/products/techno spark 4'
										className='card text-secondary w-100 bg-white border-0 shadow-xs'
									>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													focusable='false'
													width='1em'
													height='1em'
													preserveAspectRatio='xMidYMid meet'
													viewBox='0 0 24 24'
												>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
									<a
										href='/products/techno spark 4'
										className='card text-secondary w-100 bg-white border-0 shadow-xs'
									>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													focusable='false'
													width='1em'
													height='1em'
													preserveAspectRatio='xMidYMid meet'
													viewBox='0 0 24 24'
												>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
									<a
										href='/products/techno spark 4'
										className='card text-secondary w-100 bg-white border-0 shadow-xs'
									>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													focusable='false'
													width='1em'
													height='1em'
													preserveAspectRatio='xMidYMid meet'
													viewBox='0 0 24 24'
												>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
									<a
										href='/products/techno spark 4'
										className='card text-secondary w-100 bg-white border-0 shadow-xs'
									>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													focusable='false'
													width='1em'
													height='1em'
													preserveAspectRatio='xMidYMid meet'
													viewBox='0 0 24 24'
												>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
									<a
										href='/products/techno spark 4'
										className='card text-secondary w-100 bg-white border-0 shadow-xs'
									>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													focusable='false'
													width='1em'
													height='1em'
													preserveAspectRatio='xMidYMid meet'
													viewBox='0 0 24 24'
												>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
									<a
										href='/products/techno spark 4'
										className='card text-secondary w-100 bg-white border-0 shadow-xs'
									>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													focusable='false'
													width='1em'
													height='1em'
													preserveAspectRatio='xMidYMid meet'
													viewBox='0 0 24 24'
												>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
									<a
										href='/products/techno spark 4'
										className='card text-secondary w-100 bg-white border-0 shadow-xs'
									>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													focusable='false'
													width='1em'
													height='1em'
													preserveAspectRatio='xMidYMid meet'
													viewBox='0 0 24 24'
												>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='w-100 p-3 bg-white my-3 text-center'>load more</div>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</>
		);
	}
}

export default Landing;
