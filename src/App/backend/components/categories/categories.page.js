/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categorys from './redux/actions';
import AddCategory from './category.add';
import DeleteCategory from './category.delete';
import EditCategory from './category.edit';

function Categories() {
	const [edit, setEdit] = useState({});
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	useMemo(async () => {
		dispatch(await Categorys.getCategories());
		setLoading(false);
	}, [dispatch]);
	const handleChange = ({ target }) => setEdit({ ...edit, name: target.value });
	const categories = useSelector(({ GetCategories }) => GetCategories.payload);
	return (
		<div className='card mt-4'>
			<div className='card-header'>
				<h6 className='mb-0'>Add Update Delete Category</h6>
			</div>
			<div className='card-body'>
				<AddCategory />
				<div className='card'>
					<div className='card-header'>Featured</div>
					<ul className='list-group list-group-flush' id='accordion'>
						{categories &&
							categories.map(category => (
								<>
									<li className='list-group-item d-flex' id='heading-1'>
										{edit.id && edit.id === category.id ? (
											<input
												id={category.id}
												onChange={handleChange}
												className='form-control mr-2'
												value={edit.name}
											/>
										) : (
											category.name
										)}
										<div className='ml-auto d-flex'>
											<a
												className='btn btn-outline-primary mr-3'
												role='button'
												data-toggle='collapse'
												href={`#collapse-${category.id}`}
												aria-expanded='true'
												aria-controls={`collapse-${category.id}`}
											>
												sub categories{' '}
												<span className='badge badge-primary ml-2'>{category.sub.length}</span>
											</a>
											<EditCategory category={category} edit={edit} setEdit={setEdit} />
											<DeleteCategory id={category.id} />
										</div>
									</li>
									{category.sub.length ? (
										<div
											id={`collapse-${category.id}`}
											className='collapse p-3 rounded bg-light'
											data-parent='#accordion'
											aria-labelledby={`heading-${category.id}`}
										>
											{category.sub.map(sub => (
												<p className='bg-light'>{sub.name}</p>
											))}
										</div>
									) : null}
								</>
							))}
						{loading && (
							<div className='p-5 m-auto'>
								<div className='spinner-border p-4 text-primary' role='status'>
									<span className='sr-only'>Loading...</span>
								</div>
							</div>
						)}
						{!navigator.onLine && (
							<div className='p-5 m-auto'>
								<h4>Your Offline</h4>
							</div>
						)}
					</ul>
				</div>
			</div>
			<div className='card-footer'></div>
		</div>
	);
}

export default Categories;
