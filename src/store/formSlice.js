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
		setIsSubmitting: (state, action) => {
			state.isSubmitting = action.payload;
		},
		setFieldErrorMessage: (state, action) => {
			const { errorMessages } = action.payload;
			const fieldNames = Object.keys(errorMessages);

			return fieldNames.reduce((nextState, fieldName) => ({
				...nextState,
				fields: {
					...nextState.fields,
					[fieldName]: {
						...nextState.fields[fieldName],
						isValid: !errorMessages[fieldName],
						errorMessage: errorMessages[fieldName],
					},
				},
			}), state);
		},
	},
});

export const {
	setFieldValue, setFieldValidation, setIsSubmitting, setFieldErrorMessage,
} = formSlice.actions;
export default formSlice.reducer;
