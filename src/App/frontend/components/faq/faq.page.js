import React, { Component } from 'react';
import Faqs from '../../../backend/components/faq/redux/actions';
import constants from '../../../shared/redux/constants';
import { connect } from 'react-redux';
import Bread from '../breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { withRouter } from 'react-router-dom';

class Faq extends Component {
	componentDidMount() {
		this.props.init();
		this.props.faq();
	}

	render() {
		const { payload } = this.props;
		return (
			<>
				<Header />
				<div className='container min-vh-85'>
					<Bread data={payload && this.props.match.params} />
					<main className=''>
						<div className='accordion' id='accordionExample'>
							{payload &&
								payload.data.map((faq, index) => {
									return (
										<div className='card mb-3 overflow-hidden rounded border shadow-xs bg-white'>
											<div className='card-header border-bottom bg-white' id='headingOne'>
												<button
													className='btn btn-link text-secondary w-100 text-left d-flex'
													type='button'
													data-toggle='collapse'
													data-target={`#faq${index}`}
													aria-expanded='true'
													aria-controls={`faq${index}`}
												>
													{faq.question}
													<span className='ml-auto'>
														<FontAwesomeIcon className='mr-1' icon={faChevronDown} />
													</span>
												</button>
											</div>

											<div
												id={`faq${index}`}
												className='collapse'
												aria-labelledby='headingOne'
												data-parent='#accordionExample'
											>
												<div className='card-body'>{faq.answer}</div>
											</div>
										</div>
									);
								})}
						</div>
					</main>
				</div>
				<Footer />
			</>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.FAQ_PENDING,
				pending: true,
			}),

		faq: async () => dispatch(await Faqs.GetFaq()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.GetFaq.payload,
		pending: state.GetFaq.pending,
		error: state.GetFaq.error,
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Faq));
