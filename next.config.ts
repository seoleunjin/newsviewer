import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import withBundleAnalyzer from '@next/bundle-analyzer';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
		minimumCacheTTL: 60,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};

// 플러그인 합성
const withPlugins = (config: NextConfig) =>
	withVanillaExtract(
		withBundleAnalyzer({
			enabled: process.env.ANALYZE === 'true',
		})(config),
	);

export default withPlugins(nextConfig);
