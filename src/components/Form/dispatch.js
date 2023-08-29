import { useDispatch, useSelector } from 'react-redux';
import {
	setFieldValidation, setFieldValue, setFieldErrorMessage, setIsSubmitting,
} from '../../store/formSlice';
import { validationField } from './utils';
import { validationForm } from '../../validation/validation';

export function useFormDispatch() {
	const dispatch = useDispatch();
	const formState = useSelector((state) => state.form);

	const handleChange = (e) => {
		const { name, value, checked } = e.target;
		const fieldValue = e.target.type === 'checkbox' ? checked : value;
		dispatch(setFieldValue({ fieldName: name, value: fieldValue }));
	};

	const handleFocus = (e) => {
		const { name } = e.target;
		dispatch(setFieldValidation({ fieldName: name, isValid: true }));
	};

	const handleBlur = async (e) => {
		const { name, value } = e.target;
		const validationCheck = await validationField(name, value);
		dispatch(setFieldValidation({ fieldName: name, isValid: validationCheck }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const fieldNames = ['name', 'tel', 'email', 'message', 'agreement'];
		const validationFields = {};
		fieldNames.forEach((fieldName) => {
			validationFields[fieldName] = formState.fields[fieldName].value;
		});

		validationForm.validate(validationFields, { abortEarly: false })
			.then(() => {
				dispatch(setIsSubmitting(true));
				setTimeout(() => {
					dispatch(setIsSubmitting(false));
				}, 1000);
			})
			.catch((errors) => {
				const errorMessages = {};

				errors.inner.forEach((error) => {
					errorMessages[error.path] = error.message;
				});
				dispatch(setFieldErrorMessage({ errorMessages }));
			});
	};

	return {
		handleChange,
		handleFocus,
		handleBlur,
		handleSubmit,
	};
}
