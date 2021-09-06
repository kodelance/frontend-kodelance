import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../application/store';
import { RouterConfig } from './routes';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouterConfig />
      </Router>
    </Provider>
  );
}

export default App;
