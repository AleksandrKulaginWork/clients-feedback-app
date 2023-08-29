import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { Layout } from './components/Layout';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Layout />
		</Provider>
	</React.StrictMode>,
);

reportWebVitals();
