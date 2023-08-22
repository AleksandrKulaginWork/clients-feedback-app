import { useFormDispatch } from '../Form/dispatch';
import style from './style.module.css';

export function FormField({
	value, placeholder, type, name, errorMessage, isTextArea, checked,
}) {
	const {
		handleChange, handleFocus, handleBlur,
	} = useFormDispatch();

	const isCheckBox = type === 'checkbox';

	if (isTextArea) {
		return (
			<>
				<textarea
					value={value}
					name={name}
					placeholder={placeholder}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				{ errorMessage ? <div className={style.errorTextarea}>{errorMessage}</div> : null}
			</>
		);
	}

	if (isCheckBox) {
		return (
			<label className={style.checkbox} htmlFor="agreement">
				<input
					id="agreement"
					checked={checked}
					type={type}
					name={name}
					onChange={handleChange}
					onFocus={handleFocus}
				/>
				<p>
					Я согласен(-на) с
					<span> правилами </span>
					о обработке моих персональных данных
				</p>
			</label>
		);
	}

	return (
		<>
			<input
				value={value}
				placeholder={placeholder}
				type={type}
				name={name}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
			{ errorMessage ? <div className={style.error}>{errorMessage}</div> : null}
		</>
	);
}
