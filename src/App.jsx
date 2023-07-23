import Router from "./shared/Router";
import {QueryClient, QueryClientProvider} from 'react-query'
import GlobalStyle from "./styles/GlobalStyle";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client = {queryClient}>
      <GlobalStyle/>
      <Router/>
    </QueryClientProvider>
  );
}

export default App;
