import { useFormDispatch } from '../Form/dispatch';
import style from './style.module.css';

export function InputField({
	value, placeholder, type, name, errorMessage, isTextArea, isCheckBox, checked,
}) {
	const {
		handleChange, handleFocus, handleBlur,
	} = useFormDispatch();

	if (isTextArea) {
		return (
			<>
				<textarea
					value={value}
					placeholder={placeholder}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				{ errorMessage ? <div className={style.error}>{errorMessage}</div> : null}
			</>
		);
	}

	if (isCheckBox) {
		return (
			<label htmlFor="myCheckbox">
				<input
					id="myCheckbox"
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
