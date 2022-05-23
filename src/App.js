import './App.css';
import { GlobalProvider } from './services/privider/GlobalProvider';
import Login from './pages/login/Login';

function App() {
  return (
    <GlobalProvider>
      <Login />
    </GlobalProvider>
  );
}

export default App;
