import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Category from './redux/actions';

const DeleteCategory = ({ id }) => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const handleDelete = async () => {
		setLoading(true);
		dispatch(await Category.deleteCategory(id));
		dispatch(await Category.getCategories());
		setLoading(false);
	};
	return (
		<button onClick={handleDelete} className='btn btn-danger ml-3'>
			{loading ? <div className='spinner-border spinner-border-sm' /> : 'Delete'}
		</button>
	);
};

export default DeleteCategory;
