import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Category from './redux/actions';

const AddCategory = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState('');
	const [loading, setLoading] = useState(false);
	const handleChange = async ({ target }) => setValue(target.value);
	const handleSubmit = async e => {
		e.preventDefault();
		// setLoading(true);
		dispatch(await Category.createCategory({ name: value }));
		dispatch(await Category.getCategories());
		// setLoading(false);
		// setValue('');
	};
	return (
		<div className='card mb-3'>
			<div className='card-body'>
				<form className='form-inline' onSubmit={handleSubmit}>
					<div className='form-group flex-fill'>
						<input
							type='text'
							name='name'
							onChange={handleChange}
							className='form-control flex-fill'
							placeholder='Add category'
							required
							value={value}
						/>
					</div>
					<button type='submit' className='btn btn-primary ml-2'>
						{loading ? <div className='spinner-border spinner-border-sm' /> : 'add'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddCategory;
