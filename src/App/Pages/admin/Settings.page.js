/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Sidenav from './components/sidenav';
import AdminNav from './components/admin.nav.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import EmailSettings from './components/email.settings';
import ProductSettings from './components/product.settings';
import ThemeSettings from './components/theme.settings';
import GeneralSettings from './general.settings';

class Dashboard extends Component {
	render() {
		console.log('this.props', this.state);
		return (
			<>
				<Sidenav />
				<div className='header-bg' />
				<main className='content-wrapper d-flex flex-column align-items-center min-h-display'>
					<AdminNav />
					<div className='container-fluid mt-n2'>
						<h5 className='cv-title title-light'>Settings</h5>
						<div className='row mt-4'>
							<div className='col-1'>
								<div className='nav flex-column settings-nav nav-pills' id='v-pills-tab' role='tablist' aria-orientation='vertical'>
									<a
										className='nav-link shadow-xs d-flex flex-column active'
										id='v-pills-home-tab'
										data-toggle='pill'
										href='#v-pills-home'
										role='tab'
										aria-controls='v-pills-home'
										aria-selected='true'
									>
										<FontAwesomeIcon className='m-auto' icon={faCogs} />
										General
									</a>
									<a
										className='nav-link shadow-xs d-flex flex-column '
										id='v-pills-profile-tab'
										data-toggle='pill'
										href='#v-pills-profile'
										role='tab'
										aria-controls='v-pills-profile'
										aria-selected='false'
									>
										<FontAwesomeIcon className='m-auto' icon={faCogs} />
										themes
									</a>
									<a
										className='nav-link shadow-xs d-flex flex-column text-truncate '
										id='v-pills-messages-tab'
										data-toggle='pill'
										href='#v-pills-messages'
										role='tab'
										aria-controls='v-pills-messages'
										aria-selected='false'
									>
										<FontAwesomeIcon className='m-auto' icon={faCogs} />
										Notifys
									</a>
									<a
										className='nav-link shadow-xs d-flex flex-column '
										id='v-pills-settings-tab'
										data-toggle='pill'
										href='#v-pills-settings'
										role='tab'
										aria-controls='v-pills-settings'
										aria-selected='false'
									>
										<FontAwesomeIcon className='m-auto' icon={faCogs} />
										messages
									</a>
									<a
										className='nav-link shadow-xs d-flex flex-column '
										id='v-pills-products-tab'
										data-toggle='pill'
										href='#v-pills-products'
										role='tab'
										aria-controls='v-pills-products'
										aria-selected='false'
									>
										<FontAwesomeIcon className='m-auto' icon={faCogs} />
										others
									</a>
								</div>
							</div>
							<div className='col-11'>
								<div className='tab-content' id='v-pills-tabContent'>
									{/* general settings */}
									<GeneralSettings />
									{/* general settings */}
									<ThemeSettings />
									{/* email settings */}
									<EmailSettings />
									{/* general settings */}
									<div className='tab-pane bg-white rounded p-3 fade shadow-xs' id='v-pills-settings' role='tabpanel' aria-labelledby='v-pills-settings-tab'>
										Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est
										eu aliqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum
										enim et cillum eu deserunt excepteur ea incididunt minim occaecat.
									</div>

									{/* general settings */}
									<ProductSettings />
								</div>
							</div>
						</div>
					</div>
				</main>
			</>
		);
	}
}

export default Dashboard;
