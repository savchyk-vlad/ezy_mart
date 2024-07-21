import { Navigation } from './src/containers/Core'
import AuthenticationProvider from './src/providers/auth/AuthenticationProvider'
 
const App = () => {
  return (
    <AuthenticationProvider>
      <Navigation />
    </AuthenticationProvider>

  );
};

export default App;
