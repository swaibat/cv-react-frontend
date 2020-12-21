import React, { useState } from 'react';

const Variables = () => {
	const [shareholders, setShareholders] = useState([{ name: 'Charles' }, { name: 'David' }]);
	const handleClick = () => {
		setShareholders([...shareholders, { name: 'come' }]);
	};

	return (
		<div className='form-group'>
			{shareholders.map((shareholder, idx) => (
				<div class='input-group my-3'>
					<select
						class='custom-select'
						id='inputGroupSelect04'
						aria-label='Example select with button addon'
					>
						<option selected>Choose...</option>
						<option value='1'>Size</option>
						<option value='2'>Color</option>
						<option value='3'>Material</option>
					</select>
					<select
						class='custom-select'
						id='inputGroupSelect04'
						aria-label='Example select with button addon'
					>
						<option selected>Choose...</option>
						<option value='1'>One</option>
						<option value='2'>Two</option>
						<option value='3'>Three</option>
					</select>
					<div class='input-group-append'>
						<button class='btn btn-outline-secondary' type='button'>
							Button
						</button>
					</div>
				</div>
			))}
			<button type='button' onClick={handleClick} className='btn btn-outline-primary btn-sm'>
				Add Variable
			</button>
		</div>
	);
};

export default Variables;
