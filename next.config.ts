import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'cdn.mos.cms.futurecdn.net',
			'media.zennfs.com',
			'image.cnbcfm.com',
			's3.amazonaws.com',
			'assets2.cbsnewsstatic.com',
			'cdn.cnn.com',
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: /\.[ts]sx?$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};

export default withVanillaExtract(nextConfig);
