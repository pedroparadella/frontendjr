import { DataProvider } from '../provider/dataProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<DataProvider>
			<Component {...pageProps} />
		</DataProvider>
	);
}

export default MyApp;
