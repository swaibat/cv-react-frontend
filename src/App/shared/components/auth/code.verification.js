/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import message from '../../assets/images/message.svg';
import $ from 'jquery';

class Code extends Component {
	componentDidMount() {
		var vcode = (function() {
			var $inputs = $('#vcode').find('input');
			$inputs.on('keyup', processInput);
			function processInput(e) {
				var x = e.charCode || e.keyCode;
				if ((x === 8 || x === 46) && this.value.length === 0) {
					var indexNum = $inputs.index(this);
					if (indexNum !== 0) {
						$inputs.eq($inputs.index(this) - 1).focus();
					}
				}

				if (ignoreChar(e)) return false;
				else if (this.value.length === this.maxLength) {
					$(this)
						.next('input')
						.focus();
				}
			}
			function ignoreChar(e) {
				var x = e.charCode || e.keyCode;
				if (x === 37 || x === 38 || x === 39 || x === 40) return true;
				else return false;
			}
		})();
	}
	render() {
		const { data } = this.props;
		return (
			<div className='col-7 m-auto'>
				<img height='100' className='m-auto' src={message} alt='sms' />
				<form
					className='font-weight-light rounded-sm text-center mt-3 mb-5'
					onSubmit={data.handleVerify}
				>
					<div className='py-3'>
						<label htmlhtmlFor='vcode1'>Enter 6-digit verification code</label>
						<div className='vcode d-flex justify-content-center' id='vcode'>
							<input
								name='code1'
								type='phone'
								pattern='[0-9]+'
								className='vcode-input form-control form-control-lg mx-2'
								maxlength='1'
								id='vcode1'
								onChange={data.handleInput}
								required
							/>
							<input
								name='code2'
								type='phone'
								pattern='[0-9]+'
								className='vcode-input form-control form-control-lg mx-2'
								maxlength='1'
								onChange={data.handleInput}
								required
							/>
							<input
								name='code3'
								type='phone'
								pattern='[0-9]+'
								className='vcode-input form-control form-control-lg mx-2'
								maxlength='1'
								onChange={data.handleInput}
								required
							/>
							<input
								name='code4'
								type='phone'
								pattern='[0-9]+'
								className='vcode-input form-control form-control-lg mx-2'
								maxlength='1'
								onChange={data.handleInput}
								required
							/>
							<input
								name='code5'
								type='phone'
								pattern='[0-9]+'
								className='vcode-input form-control form-control-lg mx-2'
								maxlength='1'
								onChange={data.handleInput}
								required
							/>
							<input
								name='code6'
								type='phone'
								pattern='[0-9]+'
								className='vcode-input form-control form-control-lg mx-2'
								maxlength='1'
								onChange={data.handleInput}
								required
							/>
						</div>
					</div>
					<button type='submit' className='btn btn-sm btn-primary mt-3 px-4'>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Code;
