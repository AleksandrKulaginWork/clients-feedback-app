import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	fields: {
		name: { value: '', isValid: false },
		tel: { value: '', isValid: false },
		email: { value: '', isValid: false },
		message: { value: '', isValid: false },
		agreement: { value: false, isValid: false },
	},
	isSubmitting: false,
};

const createForm = createSlice({
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
	},
});

export const { setFieldValue, setFieldValidation, isFormValid } = createForm.actions;
export default createForm.reducer;
