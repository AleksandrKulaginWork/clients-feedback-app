import { useSelector } from 'react-redux';
import style from './style.module.css';
import iconButton from '../../assets/image-form/icon-button.svg';
import iconHeader from '../../assets/image-form/icon-header.svg';
import { useFormDispatch } from './dispatch';
import { FormField } from '../FormField/index';

export function Form() {
	const {
		name, tel, email, message, agreement,
	} = useSelector((state) => state.form.fields);

	const {
		handleSubmit,
	} = useFormDispatch();

	return (
		<div className={style.sectioForm}>
			<div className={style.bodyForm}>
				<div className={style.header}>
					<img src={iconHeader} alt="icon-header" />
					<h1>Свяжитесь с нами</h1>
				</div>

				<p className={style.announcement}>Отправьте нам сообщение и мы ответим в ближайшее время</p>

				<form onSubmit={handleSubmit} className={style.form} noValidate>
					<div className={style.blockInput}>
						<FormField
							value={name.value}
							placeholder="Ваше имя*"
							type="text"
							name="name"
							errorMessage={name.errorMessage}
							isValid={name.isValid}
						/>
						<FormField
							value={tel.value}
							placeholder="Телефон"
							type="tel"
							name="tel"
							errorMessage={tel.errorMessage}
							isValid={tel.isValid}
						/>
						<FormField
							value={email.value}
							placeholder="Электронная почта*"
							type="email"
							name="email"
							errorMessage={email.errorMessage}
							isValid={email.isValid}
						/>
						<FormField
							isTextArea
							name="message"
							value={message.value}
							placeholder="Текст сообщения*"
							errorMessage={message.errorMessage}
							isValid={message.isValid}
						/>
					</div>

					<div className={style.description}>*обязательные поля</div>

					<FormField
						className={style.checkbox}
						checked={agreement.value}
						type="checkbox"
						name="agreement"
						errorMessage={agreement.errorMessage}
						isValid={agreement.isValid}
					/>

					<button className={style.button} type="submit">
						<img src={iconButton} alt="iconButton" />
						<span>Отправить сообщение</span>
					</button>
				</form>
			</div>
		</div>
	);
}
