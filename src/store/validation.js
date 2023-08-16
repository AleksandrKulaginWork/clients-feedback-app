import * as yup from 'yup';

export const validationForm = yup.object().shape({
	name: yup
		.string()
		.required('Введите имя')
		.min(2, 'Имя должно состоять как минимум из 2 символов')
		.max(100, 'Имя не должно превышать 100 символов'),
	tel: yup
		.string()
		.required('Введите номер телефона')
		.matches(/^\+?[0-9]{7,15}$/, 'Введите корректный номер телефона'),
	email: yup
		.string()
		.required('Введите адрес электронной почты')
		.matches(/^[A-Za-z0-9+_.-]+@(.+)$/, 'Введите корректный адрес электронной почты'),
	message: yup
		.string()
		.required('Введите сообщение')
		.max(1000, 'Текст сообщения не должен превышать 1000 символов'),
	agreement: yup
		.boolean()
		.oneOf([true], 'Вы должны согласиться'),
});
