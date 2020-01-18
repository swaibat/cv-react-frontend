import React from 'react';
import CarBrands from './cars';

export const brands = CarBrands.map((car, index) => {
	return (
		<option key={index} value={car.brand}>
			{car.brand}
		</option>
	);
});

export const models = brand => {
	const car = CarBrands.find(car => car.brand === brand);
	if (!car) return 'Model not found';
	return car.models.map((el, index) => (
		<option key={index} value={el}>
			{el}
		</option>
	));
};
