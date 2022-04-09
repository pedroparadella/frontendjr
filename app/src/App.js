import { ThemeProvider } from 'styled-components';
import theme from './AppTheme';
import Home from './pages/home/Home';

function App() {
  return (
  <ThemeProvider theme={theme}>
    <Home/>
  </ThemeProvider>
  );
}

export default App;
