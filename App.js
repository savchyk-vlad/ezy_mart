import { Navigation } from './src/containers/Core'
import AuthenticationProvider from './src/providers/auth/AuthenticationProvider'
import 'react-native-gesture-handler';

const App = () => {
  return (
    <AuthenticationProvider>
      <Navigation />
    </AuthenticationProvider>

  );
};

export default App;
