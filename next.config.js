const withOffline = require('next-offline');

const nextConfig = {
	poweredByHeader: false,
	swcMinify: true,
	output: "export",
	basePath: "/shenciao",
	images: {
		unoptimized: true,
	},
};

module.exports = withOffline(nextConfig);

