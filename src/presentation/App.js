import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterConfig } from './routes';
function App() {
  const theme = useSelector((state) => state.theme.theme);
  const theming = createTheme(theme);

  return (
    <ThemeProvider theme={theming}>
      <Router>
        <RouterConfig />
      </Router>
    </ThemeProvider>
  );
}

export default App;
