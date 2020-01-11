import React, { Component } from 'react';
import { GetFaq } from '../../redux/actions/faq.action';
import constants from '../../redux/constants/index';
import { connect } from 'react-redux';
import Bread from '../Components/breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Faq extends Component {
	componentDidMount() {
		this.props.init();
		this.props.faq();
	}

	render() {
		const { payload } = this.props;
		console.log(payload);
		return (
			<div className='container min-vh-80'>
				<Bread data={payload && this.props.match.params} />
				<main className=''>
					<div class='accordion' id='accordionExample'>
						{payload &&
							payload.data.map((faq, index) => {
								return (
									<div class='card mb-3 overflow-hidden rounded border shadow-xs bg-white'>
										<div class='card-header border-bottom bg-white' id='headingOne'>
											<button class='btn btn-link w-100 text-left d-flex' type='button' data-toggle='collapse' data-target={`#faq${index}`} aria-expanded='true' aria-controls={`faq${index}`}>
												{faq.question}
												<span className='ml-auto'>
													<FontAwesomeIcon className='mr-1' icon={faChevronDown} />
												</span>
											</button>
										</div>

										<div id={`faq${index}`} class='collapse' aria-labelledby='headingOne' data-parent='#accordionExample'>
											<div class='card-body'>{faq.answer}</div>
										</div>
									</div>
								);
							})}
					</div>
				</main>
			</div>
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

		faq: async () => dispatch(await GetFaq()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.GetFaq.payload,
		pending: state.GetFaq.pending,
		error: state.GetFaq.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Faq);
