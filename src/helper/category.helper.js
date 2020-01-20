import React from 'react';

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

export const years = () => {
	const years = [];
	for (let year = new Date().getFullYear() - 30; year < new Date().getFullYear() + 1; year++) {
		years.push(year);
	}
	return years.reverse().map((e, index) => {
		return (
			<option key={index} value={e}>
				{e}
			</option>
		);
	});
};