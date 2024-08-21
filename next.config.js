const withOffline = require('next-offline');

const nextConfig = {
	poweredByHeader: false,
	swcMinify: true,
	reactStrictMode: true,
	basePath: "/shenciao",
};

module.exports = withOffline(nextConfig);

