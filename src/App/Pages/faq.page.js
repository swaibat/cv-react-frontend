import React, { Component } from 'react';
import { GetFaq } from '../../redux/actions//faq.action';
import constants from '../../redux/constants/index';
import { connect } from 'react-redux';
import Bread from '../Components/breadcrumb';

class Items extends Component {
	componentDidMount() {
		this.props.init();
		this.props.items();
	}

	render() {
		const { payload } = this.props;
		return (
			<div className='container min-vh-80'>
				<Bread data={payload && this.props.match.params} />
				<main className=''>
					<div class='accordion' id='accordionExample'>
						<div class='card'>
							<div class='card-header' id='headingOne'>
								<h2 class='mb-0'>
									<button class='btn btn-link' type='button' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
										Collapsible Group Item #1
									</button>
								</h2>
							</div>

							<div id='collapseOne' class='collapse show' aria-labelledby='headingOne' data-parent='#accordionExample'>
								<div class='card-body'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
							</div>
						</div>
						<div class='card'>
							<div class='card-header' id='headingTwo'>
								<h2 class='mb-0'>
									<button class='btn btn-link collapsed' type='button' data-toggle='collapse' data-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
										Collapsible Group Item #2
									</button>
								</h2>
							</div>
							<div id='collapseTwo' class='collapse' aria-labelledby='headingTwo' data-parent='#accordionExample'>
								<div class='card-body'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
							</div>
						</div>
						<div class='card bg-white'>
							<div class='card-header' id='headingThree'>
								<h2 class='mb-0'>
									<button class='btn btn-link collapsed' type='button' data-toggle='collapse' data-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
										Collapsible Group Item #3
									</button>
								</h2>
							</div>
							<div id='collapseThree' class='collapse' aria-labelledby='headingThree' data-parent='#accordionExample'>
								<div class='card-body'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
							</div>
						</div>
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

		items: async () => dispatch(await GetFaq()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.GetFaq.payload,
		pending: state.GetFaq.pending,
		error: state.GetFaq.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
