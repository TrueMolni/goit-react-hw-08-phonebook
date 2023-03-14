import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import AuthLayout from 'components/AuthLayout';
import App from 'components/App';
import { store, persistor } from './redux/store';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthLayout>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </AuthLayout>
    </PersistGate>
  </Provider>
);
