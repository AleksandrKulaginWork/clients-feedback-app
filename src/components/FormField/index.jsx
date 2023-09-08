import { useFormDispatch } from '../Form/dispatch';
import {
	CheckboxInput, Input,
	Label, RemoveError,
	ShowError, Span,
	Text, Textarea,
} from './style';

export function FormField({
	value, placeholder, type, name, errorMessage, isTextArea, checked, isValid,
}) {
	const {
		handleChange, handleFocus, handleBlur,
	} = useFormDispatch();

	const isCheckBox = type === 'checkbox';

	if (isTextArea) {
		return (
			<>
				<Textarea
					value={value}
					name={name}
					placeholder={placeholder}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				{isValid ? (
					<RemoveError />
				) : (
					<ShowError>{errorMessage}</ShowError>
				)}
			</>
		);
	}

	if (isCheckBox) {
		return (
			<>
				<Label htmlFor="agreement">
					<CheckboxInput
						id="agreement"
						checked={checked}
						type={type}
						name={name}
						onChange={handleChange}
						onFocus={handleFocus}
					/>
					<Text>
						Я согласен(-на) с
						<Span> правилами </Span>
						о обработке моих персональных данных
					</Text>
				</Label>
				{isValid ? (
					<RemoveError />
				) : (
					<ShowError>{errorMessage}</ShowError>
				)}
			</>
		);
	}

	return (
		<>
			<Input
				value={value}
				placeholder={placeholder}
				type={type}
				name={name}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
			{isValid ? (
				<RemoveError />
			) : (
				<ShowError>{errorMessage}</ShowError>
			)}
		</>
	);
}
