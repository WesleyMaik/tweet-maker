//Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './page/App';
import { Provider } from 'react-redux';
import { store } from './store';

//Style
import './style/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
