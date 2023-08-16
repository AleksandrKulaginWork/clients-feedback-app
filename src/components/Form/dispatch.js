// import { useDispatch } from 'react-redux';
// import { setFieldValidation, setFieldValue } from '../../store/reducers';

// export function useFormDispatch() {
// 	const dispatch = useDispatch();

// 	const handleNameChange = (e) => {
// 		const { value, name } = e.target;
// 		dispatch(setFieldValue({ fieldName: name, value }));
// 		dispatch(setFieldValidation({ fieldName: name, isValid: value !== '' }));
// 	};

// 	const handleTelChange = (e) => {
// 		const { value, name } = e.target;
// 		const isValidTel = /^[0-9+\-() ]*$/.test(value);
// 		dispatch(setFieldValue({ fieldName: name, value }));
// 		dispatch(setFieldValidation({ fieldName: 'tel', isValid: isValidTel }));
// 	};

// 	// const handleEmailChange = (e) => {
// 	// 	const input = e.target.value;
// 	// };
// 	return {
// 		handleNameChange,
// 		handleTelChange,
// 	};
// }
