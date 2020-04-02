/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Sidenav from '../navigation/sidenav';
import AdminNav from '../navigation/admin.nav.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import EmailSettings from './email.settings';
import ProductSettings from './product.settings';
import ThemeSettings from './theme.settings';
import GeneralSettings from './general.settings';
import MessageSettings from './settings.messages';
import local from '../../../shared/redux/locations/actions';
import constants from '../../../shared/redux/constants';
import Setting from './redux/actions';
import { connect } from 'react-redux';

class Settings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: '',
			location: '',
		};
		this.handleClick = this.handleClick.bind(this);
	}
	async componentDidMount() {
		this.props.init();
		this.props.settings();
		this.props.local();
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.payload !== this.props.payload) {
			this.setState({ data: nextProps.payload.data });
		} else if (nextProps.localPayload !== this.props.localPayload) {
			this.setState({ location: nextProps.localPayload });
		}
	}
	handleClick(e) {
		e.preventDefault();
		this.setState({ currencySymbol: e.target.id, flag: e.target.name });
	}
	handleInput = e => {
		const target = e.target;
		const value =
			target.type === 'radio' ? (target.id.match('code') ? 'code' : 'symbol') : target.checked;
		const name = target.id.match('-') ? target.id.split('-')[0] : target.id;
		this.setState({ [name]: value });
	};
	handleSubmit = async e => {
		e.preventDefault();
		this.setState({ saved: true });
		const {
			currencies,
			currencyFlagDisplay,
			autoCurrency,
			autoProductApproval,
			currencyDisplayBy,
			alpha2Code,
		} = this.state;
		this.props.update({
			currency: currencies && currencies[0].code,
			currencyCountry: alpha2Code,
			currencyFlagDisplay,
			autoCurrency,
			autoProductApproval,
			currencyDisplayBy,
		});
	};
	render() {
		const { data } = this.state;
		return (
			<>
				<div className='row mt-4'>
					<div className='col-1'>
						<div
							className='nav flex-column settings-nav nav-pills'
							id='v-pills-tab'
							role='tablist'
							aria-orientation='vertical'
						>
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
								Products
							</a>
						</div>
					</div>

					<div className='col-11'>
						{data && (
							<div className='tab-content' id='v-pills-tabContent'>
								{/* general settings */}
								<GeneralSettings data={this} />
								{/* general settings */}
								<ThemeSettings data={this} />
								{/* email settings */}
								<EmailSettings data={this} />
								{/* general settings */}
								<MessageSettings {...this.props} />
								{/* general settings */}
								<ProductSettings {...this} set={this} />
							</div>
						)}
					</div>
				</div>
			</>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.SETTINGS_PENDING,
				pending: true,
			}),

		settings: async () => dispatch(await Setting.getSettings()),
		update: async (data, token) => dispatch(await Setting.updateSettings(data, token)),
		local: async () => dispatch(await local()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.GetSettings.payload,
		pending: state.GetSettings.pending,
		error: state.GetSettings.error,
		updatePayload: state.updateSettings.payload,
		updatePending: state.updateSettings.pending,
		updateError: state.updateSettings.error,
		localPayload: state.getIp.payload,
		localPending: state.getIp.pending,
		localError: state.getIp.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
