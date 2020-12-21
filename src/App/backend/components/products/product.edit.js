/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { useState, useMemo } from 'react';
import Products from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Category from '../categories/redux/actions';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
	const dispatch = useDispatch();
	const [values, setValues] = useState({});
	const [loading, setLoading] = useState(false);
	const { id } = useParams();
	const formData = new FormData();
	useMemo(async () => {
		dispatch(await Category.getCategories());
	}, [dispatch]);

	useMemo(async () => {
		dispatch(await Products.getSingleProduct(id));
	}, [dispatch, id]);

	// const categories = useSelector(({ GetCategories }) => GetCategories.payload);
	// const handleChange = async ({ target }) => {
	// 	if (target.name.match('images')) {
	// 		for (let i = 0; i < target.files.length; i++) {
	// 			formData.append('images', target.files[i]);
	// 		}
	// 	} else {
	// 		setValues({ ...values, [target.name]: target.value });
	// 	}
	// };
	// const handleSubmit = async e => {
	// 	e.preventDefault();
	// 	Object.entries(values).map(el => formData.append(el[0], el[1]));
	// 	setLoading(true);
	// 	dispatch(await Products.createProduct(formData));
	// 	setLoading(false);
	// };
	// useSelector(({ singleItem }) => setValues(singleItem.payload));
	return (
		<div className='card mt-4'>
			<div className='card-header'>
				<h5 className='mb-0'>Create product</h5>
			</div>
			{/* {values ? (
				<div className='card-body'>
					<form onSubmit={handleSubmit}>
						<div className='form-group'>
							<label htmlFor='name'>
								Title
								<small className='form-text text-muted'>
									Add a title that describes this item. Titles can be up to 150 characters long. We
									recommend using under 65 characters.
								</small>
							</label>
							<input
								type='text'
								className='form-control'
								id='name'
								name='name'
								// value={values.name}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<label>
								Description
								<small className='form-text text-muted'>
									Add details about this item, including any unique features which help people
									understand its benefits.
								</small>
							</label>
							<textarea
								className='form-control'
								rows='5'
								name='description'
								onChange={handleChange}
							></textarea>
						</div>
						<div className='form-row'>
							<label>
								Price
								<small className='form-text text-muted'>
									Choose a currency and add the full price of the item as shown on your website. If
									you want to create different options of your item, you'll need to add the price of
									each one in the Variants section.
								</small>
							</label>
							<div className='col-2'>
								<select name='currency' className='form-control' onChange={handleChange}>
									<option value='USD'>USD</option>
									<option value='UGX'>UGX</option>
								</select>
							</div>
							<div className='col'>
								<input
									type='number'
									placeholder='00.0'
									name='price'
									className='form-control'
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className=' form-row'>
							<div className='form-group w-100'>
								<label>
									Category
									<small className='form-text text-muted'>Select Product Category</small>
								</label>
								<div className='col-6'>
									<select name='CategoryId' className='form-control' onChange={handleChange}>
										{categories &&
											categories.map(category => (
												<option value={category.id}>{category.name}</option>
											))}
									</select>
								</div>
							</div>
						</div>
						<div className='custom-control custom-checkbox my-3 mr-sm-2 '>
							<input type='checkbox' className='custom-control-input' id='customControlInline' />
							<label className='custom-control-label' htmlFor='customControlInline'>
								Add discrount to the Product
							</label>
						</div>
						<div className='form-group'>
							<label>
								Condition
								<small className='form-text text-muted'>Add the status of the product.</small>
							</label>
							<select name='condition' className='form-control' onChange={handleChange}>
								<option value='new'>New</option>
								<option value='Refurbished'>Refurbished</option>
								<option value='Used'>Used</option>
							</select>
						</div>
						<div className='form-group'>
							<label htmlFor='name'>
								Add Files
								<small className='form-text text-muted'>
									Add a up to 10 images to your product to attract attention of your customers
								</small>
							</label>
							<input
								type='file'
								className='form-control'
								onChange={handleChange}
								id='images'
								name='images'
								multiple
							/>
						</div>
						<button type='submit' className='btn btn-primary'>
							{loading ? 'loading ...' : 'Submit'}
						</button>
					</form>
				</div>
			) : (
				''
			)} */}
		</div>
	);
};

export default UpdateProduct;
