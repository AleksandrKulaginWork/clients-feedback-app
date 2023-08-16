import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reducers';

export const store = configureStore({
	reducer: {
		form: formReducer,
	},
});
