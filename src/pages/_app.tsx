import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import AppProvider from '../contexts/apiContext/AppProvider';
import ModalContextProvider from '../contexts/modalContext/ModalProvider';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <ModalContextProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </ModalContextProvider>
    </AppProvider>
  );
};

export default MyApp;
