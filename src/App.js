// Components
import Home from "./components/Home";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
