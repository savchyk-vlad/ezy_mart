import { Navigation } from './src/containers/Core'
import { AsyncStorageContextProvider } from './src/providers'

const App = () => {
  return (
    <AsyncStorageContextProvider>
      <Navigation />
    </AsyncStorageContextProvider>

  );
};

export default App;
