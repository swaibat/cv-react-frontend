/* eslint-disable react/react-in-jsx-scope */
// /* eslint-disable jsx-a11y/img-redundant-alt */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable no-unused-expressions */
import React from 'react';
import { connect } from 'react-redux';
import { getChat, createChat } from '../../../redux/actions/chat.action';
import constants from '../../../redux/constants/index';
import Sidenav from './components/sidenav';
import AdminNav from './components/admin.nav.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getTokenData, { token } from '../../../helper';
import { faCog, faPen, faPaperPlane, faImage, faPaperclip, faGrin } from '@fortawesome/free-solid-svg-icons';
import image from '../../../assets/images/user.svg';
import ReactTooltip from 'react-tooltip';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import _ from 'lodash';

/* detect url in a message and add a link tag */
function detectURL(message) {
	var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
	return message.replace(urlRegex, function(urlMatch) {
		return '<a href="' + urlMatch + '">' + urlMatch + '</a>';
	});
}

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: null,
			totalPages: null,
			data: {},
			messages: [],
			message: '',
			isTyping: false,
			emojiModalOpen: false,
			ReceiverId: '2',
			userId: getTokenData().id,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.typing = this.typing.bind(this);
		this.resetTyping = this.resetTyping.bind(this);
		this.onEmojiClick = this.onEmojiClick.bind(this);
		this.handleEmojiModal = this.handleEmojiModal.bind(this);
	}

	componentDidMount() {
		this.props.get(token);
	}
	handleChange(event) {
		this.setState({ message: event.target.value });
		event.target.value.length > 0 ? this.setState({ isTyping: true }) : this.setState({ isTyping: false });
	}
	handleSubmit(event) {
		event.preventDefault();
		const { ReceiverId, message, fullNames } = this.state;
		this.props.create({ ReceiverId, message }, token);
		this.setState({ data: { ...this.state.data, [ReceiverId]: [...this.state.messages, { ReceiverId, fullNames, message }] } });
		this.setState({ message: '' });
	}
	onEmojiClick(event, emojiObject) {
		this.setState({ message: this.state.message + emojiObject.emoji });
	}
	/* hide the writing indicator */
	resetTyping(writer) {
		let stateTyping = this.state.isTyping;
		stateTyping[writer] = false;
		this.setState({ isTyping: stateTyping });
	}
	/* updates the writing indicator if not already displayed */
	typing(writer) {
		if (!this.state.isTyping[writer]) {
			let stateTyping = this.state.isTyping;
			stateTyping[writer] = true;
			this.setState({ isTyping: stateTyping });
		}
	}

	handleEmojiModal(event) {
		event.preventDefault();
		this.setState({ emojiModalOpen: !this.state.emojiModalOpen });
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.payload !== this.props.payload) {
			this.setState({ data: nextProps.payload.data });
		}
	}

	render() {
		const { data, ReceiverId, emojiModalOpen, userId } = this.state;
		console.log(this.state);
		return (
			<>
				<Sidenav />
				<div className='header-bg' />
				<main className='content-wrapper d-flex flex-column align-items-center min-h-display'>
					<AdminNav />
					<div className='container-fluid mt-n2'>
						<h5 className='cv-title title-light'>Chat</h5>
						<div className='w-100 bg-white px-3 pt-0 mt-4 rounded'>
							<div className='row'>
								<div className='col-md-3 border-right p-1'>
									<nav className='max-vh-80 overflow-y-scroll'>
										<div className='list-group'>
											<a href='#' className='list-group-item border-0 rounded list-group-item-action'>
												<div className='media d-flex align-items-center'>
													<img className='mr-3 rounded-circle' height='50' src={image} alt='Generic placeholder image' />
													<div className='media-body text-truncate'>
														<h5 className='mb-1 front-weight-bolder'>Media heading</h5>
													</div>
												</div>
											</a>
											<a href='#' className='list-group-item border-bottom border-0 rounded list-group-item-action'>
												<div className='input-group input-group-sm'>
													<input type='text' className='form-control' aria-label='Amount (to the nearest dollar)' />
													<div className='input-group-append'>
														<span className='input-group-text'>0</span>
													</div>
												</div>
											</a>
											{Object.entries(data).map((user, index) => {
												const chatHistory = user[1][0];
												if (chatHistory) {
													const { receiver, sender } = chatHistory;
													const displayName = (sender.id !== userId && sender.firstName) || (receiver.id !== userId && receiver.firstName);
													return (
														<li
															key={index}
															id={user[0]}
															onClick={() => this.setState({ messages: user[1], ReceiverId: user[0], fullNames: 'admin admin' })}
															className='list-group-item border-0 rounded list-group-item-action'
														>
															<div className='media align-items-center'>
																<img className='mr-3 rounded-circle' height='40' src={image} alt={chatHistory.fullNames} />
																<div className='media-body text-truncate'>
																	<p className='mb-1 front-weight-bolder'>{displayName}</p>
																	<span className='text-secondary'>{user[1][user[1].length - 1].message}</span>
																</div>
																<div className='d-flex flex-column justify-content-end align-items-end'>
																	<small>2 days ago</small>
																	<span className='badge badge-primary badge-pill'>2</span>
																</div>
															</div>
														</li>
													);
												} else {
													return <li className='list-group-item border-0 rounded list-group-item-action'>no users</li>;
												}
											})}
										</div>
									</nav>
								</div>
								<div className='col-md-9 p-0'>
									<ul className='nav shadow-xs mb-3'>
										<li className='nav-item d-flex align-items-center px-2'>
											<img className='rounded-circle' height='40' src={image} alt='image' />
											<a className='nav-link d-flex flex-column' href='#'>
												<span>John Doe</span>
												<small className='text-secondary font-weight-light'>active 56 minutes ago</small>
											</a>
										</li>
										<ul className='nav-item ml-auto d-flex align-items-center'>
											<li className='nav-item'>
												<a className='nav-link' data-tip='write to user' href='#'>
													<FontAwesomeIcon className='' icon={faPen} />
												</a>
											</li>
											<li className='nav-item'>
												<a className='nav-link' data-tip='chat settings' href='#'>
													<FontAwesomeIcon className='' icon={faCog} />
												</a>
											</li>
										</ul>
									</ul>
									<div className='d-flex flex-column align-items-start mb-auto mx-2'>
										<div className='p-2 mb-auto vh-71 w-100 overflow-y-auto chat-container' id='chat'>
											{!_.isEmpty(data) &&
												data[ReceiverId].map((chat, index) => {
													const { ReceiverId } = chat;
													const sent = ReceiverId === userId;
													return (
														<div key={index} className={!sent ? 'd-flex flex-row-reverse' : 'd-flex'}>
															{sent && <img className='mr-3 rounded-circle' height='45' src={image} alt='user' />}
															<div className='media my-2 mw-85'>
																<div className={`media-body text-white p-2 rounded chat-bubble ${!sent ? 'bg-primary text-white send' : 'receive'}`}>{chat.message}</div>
															</div>
														</div>
													);
												})}
										</div>
										{emojiModalOpen && (
											<span className='position-absolute'>
												<button type='button' className='bg-light border-0' onClick={this.handleEmojiModal}>
													x
												</button>
												<Picker onEmojiClick={this.onEmojiClick} skinTone={SKIN_TONE_MEDIUM_DARK} />
											</span>
										)}
										<div className='w-100'>
											<small>shau is typing . . .</small>
											<form className='input-group d-flex align-items-end py-2' onSubmit={this.handleSubmit}>
												<div className='input-group-append'>
													<span className='input-group-text bg-white text-primary border-0 cursor-pointer' onClick={this.handleEmojiModal}>
														<FontAwesomeIcon className='chat-icon' icon={faGrin} />
													</span>
													<span className='input-group-text bg-white text-primary border-0'>
														<FontAwesomeIcon className='chat-icon' icon={faImage} />
													</span>
												</div>
												<input type='text' className='form-control rounded-left' min='1' value={this.state.message} onChange={this.handleChange} required />
												<div className='input-group-append'>
													<button className='input-group-text bg-white text-primary'>
														<span>
															<FontAwesomeIcon className='' icon={faPaperPlane} />
														</span>
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.PAGES_PENDING,
				pending: true,
			}),

		get: async token => dispatch(await getChat(token)),
		create: async (data, token) => dispatch(await createChat(data, token)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.GetChat.payload,
		pending: state.GetChat.pending,
		error: state.GetChat.error,
		createPayload: state.PostChat.payload,
		createPending: state.PostChat.pending,
		createError: state.PostChat.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
