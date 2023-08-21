import { useDispatch, useSelector } from 'react-redux';
import {
	setFieldValidation, setFieldValue, isFormValid, setFieldErrorMessage,
} from '../../store/formSlice';
import { validationField } from './utils';
import { validationForm } from '../../validation/validation';

export function useFormDispatch() {
	const dispatch = useDispatch();
	const formState = useSelector((state) => state.form);

	const handleChange = (e) => {
		const { name, value, checked } = e.target;
		const fieldValue = e.target.type === 'checkbox' ? checked : value;
		dispatch(setFieldValue({ fieldName: name, fieldValue }));
	};

	const handleFocus = (e) => {
		const { name } = e.target;
		dispatch(setFieldValidation({ fieldName: name, isValid: true }));
	};

	const handleBlur = async (e) => {
		const { name, value } = e.target;
		const validationCheck = await validationField(name, value);
		dispatch(setFieldValidation({ fieldName: name, validationCheck }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const fieldNames = ['name', 'tel', 'email', 'message', 'agreement'];
		const validationFields = {};
		fieldNames.forEach((fieldName) => {
			validationFields[fieldName] = formState.fields[fieldName].value;
		});

		try {
			await validationForm.validate(validationFields, { abortEarly: false });
			dispatch(isFormValid(true));
		} catch (err) {
			dispatch(isFormValid(false));
			if ('inner' in err) {
				const fieldName = err.path;
				const errorMessage = err.message;
				dispatch(setFieldErrorMessage({ fieldName, errorMessage }));
				dispatch(setFieldValidation({ fieldName, isValid: false }));
			}
		}
	};

	return {
		handleChange,
		handleFocus,
		handleBlur,
		handleSubmit,
	};
}
