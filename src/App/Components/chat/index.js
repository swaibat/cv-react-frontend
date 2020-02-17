/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { getChat, createChat } from '../../../redux/actions/chat.action';
import constants from '../../../redux/constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getTokenData, { token } from '../../../helper';
import { faCog, faPen, faPaperPlane, faImage, faPaperclip, faGrin } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import _ from 'lodash';
import agentImg from '../../../assets/images/user.svg';

/* detect url in a message and add a link tag */
function detectURL(message) {
	var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
	return message.replace(urlRegex, function(urlMatch) {
		return '<a href="' + urlMatch + '">' + urlMatch + '</a>';
	});
}

class ChatWidget extends React.Component {
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
			ReceiverId: '1',
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
		return (
			<div className='accordion chat-modal' id='chatModel'>
				<div className='card border-0 chat-card shadow-sm'>
					<div
						className='card-header collapsed cursor-pointer p-2 chat-modal-header '
						id='headingThree'
						data-toggle='collapse'
						data-target='#collapseThree'
						aria-expanded='false'
						aria-controls='collapseThree'
					>
						<div className='d-flex align-items-center'>
							<img height='40' width='40' className='mr-2' src={agentImg} alt='agent' />
							<div className='d-flex flex-fill justify-content-between'>
								<div>
									<p className='mb-0 p-0'>admin ug</p>
									<small className='mt-n1'>customer support</small>
								</div>
								<div>
									<span className='badge badge-success'>online</span>
								</div>
							</div>
						</div>
					</div>
					<div id='collapseThree' className='collapse' aria-labelledby='headingThree' data-parent='#chatModel'>
						<div>
							<div className='card-body py-1'>
								<div className='p-0 mb-auto chat-window w-100 overflow-y-auto chat-container' id='chat'>
									{!_.isEmpty(data) &&
										data[ReceiverId] &&
										data[ReceiverId].map((chat, index) => {
											const { ReceiverId } = chat;
											const sent = ReceiverId === userId;
											return (
												<div key={index} className={!sent ? 'd-flex flex-row-reverse' : 'd-flex'}>
													{sent && <img className='mr-3 rounded-circle' height='45' src={agentImg} alt='user' />}
													<div className='media my-2 mw-85'>
														<div className={`media-body text-white p-2 rounded chat-bubble ${!sent ? 'bg-primary text-white send' : 'receive'}`}>{chat.message}</div>
													</div>
												</div>
											);
										})}
									{!_.isEmpty(data) || (data[ReceiverId] && <p> no chat history with this user </p>)}
								</div>
							</div>
							<div className='card-footer  px-2 py-1 bg-white border-0'>
								<small>shau is typing . . .</small>
								<form className='input-group d-flex align-items-end py-2' onSubmit={this.handleSubmit}>
									<div className='input-group-append'>
										<span className='input-group-text bg-white text-primary border-0 cursor-pointer' onClick={this.handleEmojiModal}>
											<FontAwesomeIcon className='chat-icon' icon={faGrin} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatWidget);
