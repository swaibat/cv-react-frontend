import React from 'react';
import ReactApexChart from 'react-apexcharts';

class DonutChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [44, 55, 41],
			chartOptions: {
				labels: ['Apple', 'Mango', 'Orange'],
			},
			options: {
				chart: {
					type: 'donut',
				},
				responsive: [
					{
						breakpoint: 20,
						options: {
							chart: {
								width: 500,
							},
							legend: {
								position: 'bottom',
							},
						},
					},
				],
			},
		};
	}

	render() {
		return (
			<div>
				<div id='chart'>
					<ReactApexChart
						height='200'
						options={this.state.options}
						series={this.state.series}
						type='donut'
					/>
				</div>
			</div>
		);
	}
}

export default DonutChart;
