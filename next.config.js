const withOffline = require('next-offline');

const nextConfig = {
	poweredByHeader: false,
	swcMinify: true,
	output: "export",
	images: {
		unoptimized: true,
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.bib/,
			type: 'asset/source',
		})
		return config
	}
};

module.exports = withOffline(nextConfig);

