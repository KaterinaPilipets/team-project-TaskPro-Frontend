import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import { Provider } from 'react-redux';
// import { store, persistor } from 'redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Provider store={store}> */}

      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter basename="/team-project-TaskPro-Frontend">
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
      {/* </Provider> */}
    </ThemeProvider>
  </React.StrictMode>
);
