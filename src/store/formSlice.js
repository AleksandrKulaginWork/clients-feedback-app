import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	fields: {
		name: { value: '', isValid: false, errorMessage: '' },
		tel: { value: '', isValid: false, errorMessage: '' },
		email: { value: '', isValid: false, errorMessage: '' },
		message: { value: '', isValid: false, errorMessage: '' },
		agreement: { value: false, isValid: false },
	},
	isSubmitting: false,
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setFieldValue: (state, action) => {
			const { fieldName, value } = action.payload;
			state.fields[fieldName].value = value;
		},
		setFieldValidation: (state, action) => {
			const { fieldName, isValid } = action.payload;
			state.fields[fieldName].isValid = isValid;
		},
		isFormValid: (state, action) => {
			state.isSubmitting = action.payload;
		},
		setFieldErrorMessage: (state, action) => {
			const { fieldName, errorMessage } = action.payload;
			state.fields[fieldName].errorMessage = errorMessage;
		},
	},
});

export const {
	setFieldValue, setFieldValidation, isFormValid, setFieldErrorMessage,
} = formSlice.actions;
export default formSlice.reducer;
