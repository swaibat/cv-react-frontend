/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Sidenav from './components/sidenav';
import AdminNav from './components/admin.nav.component';

class Dashboard extends Component {
	render() {
		return (
			<>
				<Sidenav />
				<div className='header-bg' />
				<main className='content-wrapper d-flex flex-column align-items-center min-h-display'>
					<AdminNav />
					<div className='container-fluid mt-4'>
						<div className='row'>
							<div className='col-md-6 h-15'>
								<div className='bg-white p-5 d-flex  h-100 rounded shadow-xs mb-3'>hello</div>
							</div>
							<div className='col-md-6 pl-0'>
								<div className='row'>
									<div className='col-md-6'>
										<div className='bg-white p-5 rounded shadow-xs mb-3'>hello</div>
									</div>
									<div className='col-md-6 pl-0'>
										<div className='bg-white p-5 rounded shadow-xs mb-3'>hello</div>
									</div>
									<div className='col-md-6'>
										<div className='bg-white p-5 rounded shadow-xs mb-3'>hello</div>
									</div>
									<div className='col-md-6 pl-0'>
										<div className='bg-white p-5 rounded shadow-xs mb-3'>hello</div>
									</div>
								</div>
							</div>
							<div className='col-md-8 dash-card'>
								<div className='bg-white p-5 d-flex flex-fill h-100 rounded shadow-xs'>hello</div>
							</div>
							<div className='col-md-4 pl-0 dash-card'>
								<div className='bg-white p-5 d-flex flex-fill h-100 rounded shadow-xs'>hello</div>
							</div>
						</div>
					</div>
				</main>
			</>
		);
	}
}

export default Dashboard;
