import api from '../Api';
var CronJob = require('cron').CronJob;
var job = new CronJob(
	'59 23 * * *',
	async () => {
		const currency = await api.getCurrency();
		await api.updateCurrency(currency.data);
	},
	null,
	true,
	'Africa/Kigali',
);
export default job;
