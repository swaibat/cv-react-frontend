import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Category from './redux/actions';

const EditCategory = ({ category, edit, setEdit }) => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const handleSubmit = async e => {
		setLoading(true);
		dispatch(await Category.updateCategory(edit, category.id));
		dispatch(await Category.getCategories());
		setEdit({});
		setLoading(false);
	};
	const handleEdit = async () => {
		setEdit(category);
	};
	return (
		<>
			{edit.id !== category.id ? (
				<button onClick={handleEdit} className='btn btn-secondary'>
					update
				</button>
			) : (
				<button onClick={handleSubmit} className='btn btn-success'>
					{loading ? <div className='spinner-border spinner-border-sm' /> : 'Save'}
				</button>
			)}
		</>
	);
};

export default EditCategory;
