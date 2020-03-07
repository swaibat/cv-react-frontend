import React from 'react';
import Category from '../../backend/components/categories/redux/actions';

export const getc = (data, value) => {
	if (!value) return 'Not found';
	const cat = data.find(e => e.id === JSON.parse(value));
	if (!cat) return 'Not found';
	if (cat.sub.length === 0) return false;
	return data
		.find(e => e.id === JSON.parse(value))
		.sub.map((e, i) => (
			<option key={i} value={e.id}>
				{e.name}
			</option>
		));
};

export const getSub = (data, value) => {
	if (!value) return 'Not found';
	const cat = data.find(e => e.id === JSON.parse(value));
	if (!cat) return 'Not found';
	if (cat.sub.length === 0) return false;
	return data
		.find(e => e.id === JSON.parse(value))
		.sub.map((e, i) => ({ label: e.name, value: e.id }));
};

export const getCategory = async value => {
	if (!value) return 'Not found';
	const categories = await Category.category();
	const cat = categories.payload.data.find(e => e.id === JSON.parse(value));
	if (!cat) return 'Not found';
	return cat;
};

export const years = () => {
	const years = [];
	for (let year = new Date().getFullYear() - 30; year < new Date().getFullYear() + 1; year++) {
		years.push({ id: year, name: year });
	}
	return years;
};
