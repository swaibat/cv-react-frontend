export default [
	{
		title: 'Dashboard',
		path: '/admin/dashboard',
		icon: 'home',
	},
	{
		title: 'Categories',
		path: '/admin/category',
		icon: 'folder-open',
	},
	{
		title: 'Pages',
		path: '/admin/pages',
		icon: 'documents',
		sub: [
			{
				title: 'Webpages',
				path: '/admin/webpages',
				icon: '',
			},
			{
				title: 'Vendors pages',
				path: '/admin/vendorspages',
				icon: '',
			},
		],
	},
	{
		title: 'Products',
		path: '/admin/products',
		icon: 'fast-food',
	},
	{
		title: 'Users',
		path: '/admin/users',
		icon: 'people',
	},
	{
		title: 'Apps',
		path: '/admin/apps',
		icon: 'apps',
		sub: [
			{
				title: 'chat',
				path: '/admin/chat',
				icon: '',
			},
			{
				title: 'comments',
				path: '/admin/comments',
				icon: '',
			},
			{
				title: 'notifications',
				path: '/admin/apps',
				icon: '',
			},
		],
	},
	{
		title: 'Settings',
		path: '/admin/settings',
		icon: 'cog',
		sub: [
			{
				title: 'Website',
				path: '/admin/website',
				icon: '',
			},
			{
				title: 'Payments',
				path: '/admin/payments',
				icon: '',
			},
			{
				title: 'Intergrations',
				path: '/admin/intergrations',
				icon: '',
			},
		],
	},
];
