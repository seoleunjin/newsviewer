import Layout from '@/layouts/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
