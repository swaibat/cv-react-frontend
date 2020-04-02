import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Favourite from '../favourite/favourite.component';
import ChatWidget from '../chat';
import getTokenData from '../../../shared/helper';
import ContactBg from './map.svg';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
				{getTokenData().id !== 1 && <ChatWidget />}
				{/* <Favourite data={this.props.data} /> */}
				<div className='bg-light p-3 d-flex justify-content-center'>
					<div className='container row '>
						<div className='col-md-4 d-flex align-items-center'>
							<span className='offers-footer-icon mr-2'>
								<ion-icon src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M476.158,286.938l-13.259-53.035c3.625-0.77,6.345-3.986,6.345-7.839v-8.551c0-18.566-15.105-33.67-33.67-33.67h-60.392 v-17.637c0-9.136-7.432-16.568-16.568-16.568H246.32l68.24-27.296c4.111-1.644,6.11-6.31,4.466-10.421 c-1.644-4.11-6.307-6.111-10.421-4.466l-55.874,22.349c17.026-10.924,33.871-22.947,40.284-31.355 c12.485-16.369,9.323-39.843-7.046-52.328c-16.369-12.486-39.843-9.323-52.328,7.046c-9.122,11.962-21.158,45.573-28.948,69.258 c-7.79-23.683-19.826-57.296-28.948-69.258c-12.484-16.369-35.959-19.53-52.328-7.046c-16.369,12.484-19.53,35.958-7.046,52.328 c6.413,8.409,23.257,20.431,40.284,31.355l-55.874-22.349c-4.113-1.647-8.777,0.355-10.421,4.466 c-1.645,4.111,0.355,8.777,4.466,10.421l68.24,27.296H50.772c-9.136,0-16.568,7.432-16.568,16.568v145.37 c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017v-145.37c0-0.295,0.239-0.534,0.534-0.534h307.841 c0.295,0,0.534,0.239,0.534,0.534v145.372c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017v-9.088h94.566 c0.009,0,0.016,0.002,0.025,0.002s0.017-0.001,0.026-0.001c11.636,0.009,21.516,7.647,24.908,18.171h-24.928 c-4.427,0-8.017,3.589-8.017,8.017v17.102c0,13.851,11.268,25.119,25.119,25.119h9.086v35.273h-20.962 c-6.886-19.882-25.787-34.205-47.982-34.205s-41.097,14.322-47.982,34.205h-3.86V345.78c0-4.427-3.589-8.017-8.017-8.017 c-4.427,0-8.017,3.589-8.017,8.017v60.392H192.817c-6.886-19.882-25.787-34.205-47.982-34.205s-41.097,14.322-47.982,34.205 H50.772c-0.295,0-0.534-0.239-0.534-0.534v-17.637h34.739c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H8.017 c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h26.188v17.637c0,9.136,7.432,16.568,16.568,16.568h43.304 c-0.002,0.178-0.014,0.355-0.014,0.534c0,27.995,22.777,50.772,50.772,50.772s50.772-22.777,50.772-50.772 c0-0.18-0.012-0.356-0.014-0.534h180.67c-0.002,0.178-0.014,0.355-0.014,0.534c0,27.995,22.777,50.772,50.772,50.772 c27.995,0,50.772-22.777,50.772-50.772c0-0.18-0.012-0.356-0.014-0.534h26.203c4.427,0,8.017-3.589,8.017-8.017v-85.511 C512,307.564,496.423,290.022,476.158,286.938z M172.9,121.059c-31.623-19.651-41.003-28.692-43.78-32.334 c-7.123-9.339-5.319-22.732,4.021-29.855c3.85-2.936,8.388-4.355,12.893-4.355c6.422,0,12.776,2.886,16.963,8.376 c7.755,10.168,19.9,44.391,27.918,69.052C185.504,128.757,179.284,125.028,172.9,121.059z M218.473,131.942 c8.018-24.66,20.163-58.882,27.917-69.052c7.123-9.339,20.516-11.142,29.855-4.02c9.34,7.123,11.143,20.516,4.021,29.855 c-2.777,3.641-12.157,12.683-43.778,32.333C230.105,125.026,223.885,128.756,218.473,131.942z M375.182,199.875h60.392 c9.725,0,17.637,7.912,17.637,17.637v0.534h-78.029V199.875z M375.182,286.456V234.08h71.235l13.094,52.376H375.182z M144.835,457.479c-19.155,0-34.739-15.584-34.739-34.739s15.584-34.739,34.739-34.739c19.155,0,34.739,15.584,34.739,34.739 S163.99,457.479,144.835,457.479z M427.023,457.479c-19.155,0-34.739-15.584-34.739-34.739s15.584-34.739,34.739-34.739 c19.155,0,34.739,15.584,34.739,34.739S446.178,457.479,427.023,457.479z M495.967,354.865h-9.086 c-5.01,0-9.086-4.076-9.086-9.086v-9.086h18.171V354.865z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M144.835,406.172c-9.136,0-16.568,7.432-16.568,16.568s7.432,16.568,16.568,16.568c9.136,0,16.568-7.432,16.568-16.568 S153.971,406.172,144.835,406.172z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M427.023,406.172c-9.136,0-16.568,7.432-16.568,16.568s7.432,16.568,16.568,16.568c9.136,0,16.568-7.432,16.568-16.568 S436.159,406.172,427.023,406.172z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M332.96,371.967H213.244c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H332.96 c4.427,0,8.017-3.589,8.017-8.017S337.388,371.967,332.96,371.967z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M127.733,337.763H25.119c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h102.614 c4.427,0,8.017-3.589,8.017-8.017S132.16,337.763,127.733,337.763z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M127.733,218.046H93.528c-4.427,0-8.017,3.589-8.017,8.017v68.409c0,4.427,3.589,8.017,8.017,8.017 s8.017-3.589,8.017-8.017v-26.188h17.637c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017h-17.637V234.08h26.188 c4.427,0,8.017-3.589,8.017-8.017C135.749,221.636,132.16,218.046,127.733,218.046z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M190.822,272.043c8.023-5.255,13.337-14.317,13.337-24.602c0-16.209-13.186-29.395-29.395-29.395h-21.378 c-4.427,0-8.017,3.589-8.017,8.017v68.409c0,4.427,3.589,8.017,8.017,8.017s8.017-3.589,8.017-8.017v-17.637h13.346l14.722,22.083 c1.545,2.317,4.086,3.571,6.677,3.571c1.529,0,3.073-0.436,4.439-1.348c3.685-2.455,4.68-7.433,2.223-11.116L190.822,272.043z M174.764,260.802h-13.361V234.08h13.361c7.368,0,13.361,5.993,13.361,13.361C188.125,254.809,182.132,260.802,174.764,260.802z' /%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M256,286.456h-26.188v-18.198c0.177,0.012,0.354,0.027,0.534,0.027h17.102c4.427,0,8.017-3.589,8.017-8.017 s-3.589-8.017-8.017-8.017h-17.102c-0.181,0-0.357,0.015-0.534,0.027V234.08H256c4.427,0,8.017-3.589,8.017-8.017 c0-4.427-3.589-8.017-8.017-8.017h-34.205c-4.427,0-8.017,3.589-8.017,8.017v68.409c0,4.427,3.589,8.017,8.017,8.017H256 c4.427,0,8.017-3.589,8.017-8.017S260.427,286.456,256,286.456z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M315.858,286.456H289.67v-18.171h9.086c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017h-9.086V234.08h26.188 c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017h-34.205c-4.427,0-8.017,3.589-8.017,8.017v68.409 c0,4.427,3.589,8.017,8.017,8.017h34.205c4.427,0,8.017-3.589,8.017-8.017S320.285,286.456,315.858,286.456z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A" />
							</span>
							<span>
								<h5>Free shipping</h5>
								<span>free shipping for all orders above 4 $25</span>
							</span>
						</div>
						<div className='col-md-4 d-flex align-items-center'>
							<span className='offers-footer-icon mr-2'>
								<ion-icon src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M256,0C131.935,0,31,100.935,31,225c0,13.749,0,120.108,0,122c0,24.813,20.187,45,45,45h17.58 c6.192,17.458,22.865,30,42.42,30c24.813,0,45-20.187,45-45V255c0-24.813-20.187-45-45-45c-19.555,0-36.228,12.542-42.42,30H76 c-5.259,0-10.305,0.915-15,2.58V225c0-107.523,87.477-195,195-195s195,87.477,195,195v17.58c-4.695-1.665-9.741-2.58-15-2.58 h-17.58c-6.192-17.458-22.865-30-42.42-30c-24.813,0-45,20.187-45,45v122c0,24.813,20.187,45,45,45 c4.541,0,8.925-0.682,13.061-1.939C383.45,438.523,366.272,452,346,452h-47.58c-6.192-17.458-22.865-30-42.42-30 c-24.813,0-45,20.187-45,45s20.187,45,45,45c19.555,0,36.228-12.542,42.42-30H346c41.355,0,75-33.645,75-75v-15h15 c24.813,0,45-20.187,45-45c0-1.864,0-108.262,0-122C481,100.935,380.065,0,256,0z M121,255c0-8.271,6.729-15,15-15s15,6.729,15,15 v122c0,8.271-6.729,15-15,15s-15-6.729-15-15V255z M76,270h15v92H76c-8.271,0-15-6.729-15-15v-62C61,276.729,67.729,270,76,270z M256,482c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S264.271,482,256,482z M391,377c0,8.271-6.729,15-15,15 s-15-6.729-15-15V255c0-8.271,6.729-15,15-15s15,6.729,15,15V377z M451,347c0,8.271-6.729,15-15,15h-15v-92h15 c8.271,0,15,6.729,15,15V347z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E" />
							</span>
							<span>
								<h5>24/7 Live Support</h5>
								<span>free shipping for all orders above 4 $25</span>
							</span>
						</div>
						<div className='col-md-4 d-flex align-items-center'>
							<span className='offers-footer-icon mr-2'>
								<ion-icon src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M496,319.996c-8.832,0-16,7.168-16,16v112H32v-192h176c8.832,0,16-7.168,16-16c0-8.832-7.168-16-16-16H32v-64h176 c8.832,0,16-7.168,16-16c0-8.832-7.168-16-16-16H32c-17.664,0-32,14.336-32,32v288c0,17.664,14.336,32,32,32h448 c17.664,0,32-14.336,32-32v-112C512,327.164,504.832,319.996,496,319.996z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M144,319.996H80c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h64c8.832,0,16-7.168,16-16 C160,327.164,152.832,319.996,144,319.996z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M502.304,81.276l-112-48c-4.064-1.696-8.576-1.696-12.64,0l-112,48c-5.856,2.528-9.664,8.32-9.664,14.72v64 c0,88.032,32.544,139.488,120.032,189.888c2.464,1.408,5.216,2.112,7.968,2.112s5.504-0.704,7.968-2.112 C479.456,299.612,512,248.156,512,159.996v-64C512,89.596,508.192,83.804,502.304,81.276z M480,159.996 c0,73.888-24.448,114.56-96,157.44c-71.552-42.976-96-83.648-96-157.44v-53.44l96-41.152l96,41.152V159.996z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M442.016,131.484c-6.88-5.44-16.928-4.384-22.496,2.496l-50.304,62.912l-19.904-29.76 c-4.96-7.36-14.912-9.312-22.176-4.448c-7.328,4.896-9.344,14.848-4.448,22.176l32,48c2.848,4.256,7.52,6.88,12.64,7.136 c0.224,0,0.48,0,0.672,0c4.832,0,9.44-2.176,12.512-6.016l64-80C450.016,147.068,448.928,137.02,442.016,131.484z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A" />
							</span>
							<span>
								<h5>Secure Payments</h5>
								<span>free shipping for all orders above 4 $25</span>
							</span>
						</div>
					</div>
				</div>
				<footer className='footer bg-dark pt-0'>
					<div className='container py-3'>
						<div className='row d-flex justify-content-between py-2'>
							<div
								className='col-md-3 col-6'
								style={{ backgroundImage: `url(${ContactBg})`, backgroundSize: 'contain' }}
							>
								<p className='cv-title'>Contact</p>
								<ul className='nav flex-column '>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											+(256)-758-307272
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											admin@biz.ug
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											zainab aziz emporium
										</a>
									</li>
									<li className='footer-social-icons'>
										<a className='btn p-1' href='/'>
											<ion-icon src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 504 504' style='enable-background:new 0 0 504 504;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M377.6,0H126C56.8,0,0,56.8,0,126.4V378c0,69.2,56.8,126,126,126h251.6c69.6,0,126.4-56.8,126.4-126.4V126.4 C504,56.8,447.2,0,377.6,0z M324,409.2c-11.2,0-72.8-1.6-88.8-1.6c-15.6,0-98-25.2-98-114.8c0-16,0-32,0-48 c0-14.8-0.4-29.6-0.4-44.4c0-4.4,0-8.4,0-12.8c0-22.4-2-48,5.2-69.6c5.6-16.4,18.8-22.4,35.2-22.4c39.6,0,42,40.4,42.4,80.4H276 h58c18,0,31.6,18.4,31.6,46c0,27.6-29.2,34-44.4,34H218.4c-0.4,16-1.2,30.8-1.2,39.2c0,17.6,6.8,36.8,50.4,36.8h61.2 c15.2,0,38,10.8,38,42.8C367.2,406.8,335.2,409.2,324,409.2z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A" />
										</a>
										<a href='/' className='btn p-1'>
											<ion-icon src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 504 504' style='enable-background:new 0 0 504 504;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpolygon points='219.6,202.4 219.6,294.4 304.4,248.8 '/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M377.6,0H126C56.8,0,0,56.8,0,126.4V378c0,69.2,56.8,126,126,126h251.6c69.6,0,126.4-56.8,126.4-126.4V126.4 C504,56.8,447.2,0,377.6,0z M408,264.4c0,26.4-2.4,53.2-2.4,53.2s-2.8,22.4-12,32.4c-12,13.2-25.2,13.2-31.2,14 c-44,3.2-110,3.6-110,3.6s-82-1.2-107.2-3.6c-6.8-1.2-22.8-0.8-34.8-14c-9.6-10-12-32.4-12-32.4S96,290.8,96,264.4v-24.8 c0-26.4,2.4-53.2,2.4-53.2s2.8-22.4,12-32.4c12-13.2,25.2-13.6,31.2-14.4C186,136.4,252,136,252,136s66,0.4,110,3.6 c6,0.8,19.6,1.2,31.6,14c9.6,10,12,32.8,12,32.8s2.4,26.8,2.4,53.2V264.4z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A" />
										</a>
										<a href='/' className='btn p-1'>
											<ion-icon src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 504 504' style='enable-background:new 0 0 504 504;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpolygon points='219.6,202.4 219.6,294.4 304.4,248.8 '/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M377.6,0H126C56.8,0,0,56.8,0,126.4V378c0,69.2,56.8,126,126,126h251.6c69.6,0,126.4-56.8,126.4-126.4V126.4 C504,56.8,447.2,0,377.6,0z M408,264.4c0,26.4-2.4,53.2-2.4,53.2s-2.8,22.4-12,32.4c-12,13.2-25.2,13.2-31.2,14 c-44,3.2-110,3.6-110,3.6s-82-1.2-107.2-3.6c-6.8-1.2-22.8-0.8-34.8-14c-9.6-10-12-32.4-12-32.4S96,290.8,96,264.4v-24.8 c0-26.4,2.4-53.2,2.4-53.2s2.8-22.4,12-32.4c12-13.2,25.2-13.6,31.2-14.4C186,136.4,252,136,252,136s66,0.4,110,3.6 c6,0.8,19.6,1.2,31.6,14c9.6,10,12,32.8,12,32.8s2.4,26.8,2.4,53.2V264.4z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A" />
										</a>
										<a href='/' className='btn p-1'>
											<ion-icon src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 504 504' style='enable-background:new 0 0 504 504;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M377.6,0H126C56.8,0,0,56.8,0,126.4V378c0,69.2,56.8,126,126,126h251.6c69.6,0,126.4-56.8,126.4-126.4V126.4 C504,56.8,447.2,0,377.6,0z M319.6,252H272v156h-60V252h-32v-64h28v-27.2c0-25.6,12.8-66,66.8-66H324V148h-34.8 c-5.6,0-13.2,3.6-13.2,16v24h49.2L319.6,252z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A" />
										</a>
									</li>
								</ul>
							</div>
							<div className='col-md-3 col-6'>
								<p className='cv-title'>policies & info</p>
								<ul className='nav flex-column'>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											Terms Conditions
										</a>
									</li>
									<li className='nav-item '>
										<a className='nav-link p-1' href='/'>
											Policy for Sellers
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											Policy for buyers
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											Wholesale Policy
										</a>
									</li>
								</ul>
							</div>
							<div className='col-md-3  col-6'>
								<p className='cv-title'>policies & info</p>
								<ul className='nav flex-column'>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											Seller Login
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											Seller Sign up
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											Seller Handbook
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											Panel Seller FAQs
										</a>
									</li>
								</ul>
							</div>
							<div className='col-md-3  col-6'>
								<p className='cv-title'>subscribe</p>
								<ul className='nav flex-column'>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											subscribe to our newsletter for the latest updates
										</a>
									</li>
									<li className='nav-item'>
										<input type='text' className='form-control' />
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='cv-copyright p-2 px-3 d-flex justify-content-between align-items-center'>
						<span>
							Copyright © 2020 <a href='/'>biz.ug</a>
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
				</footer>
			</>
		);
	}
}

export default Footer;
