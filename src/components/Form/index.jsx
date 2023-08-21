import { useSelector } from 'react-redux';
import style from './style.module.css';
import iconButton from '../../assets/image-form/icon-button.svg';
import iconHeader from '../../assets/image-form/icon-header.svg';
import { useFormDispatch } from './dispatch';
import { InputField } from '../InputFields/index';

export function Form() {
	const {
		name, tel, email, message, agreement,
	} = useSelector((state) => state.form.fields);
	const {
		isSubmitting,
	} = useSelector((state) => state.form);

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

				<form onSubmit={handleSubmit} className={style.form}>
					<div className={style.blockInput}>
						<InputField
							key="01"
							value={name.value}
							placeholder="Ваше имя*"
							type="text"
							name="name"
							errorMessage={name.errorMessage}
						/>
						<InputField
							key="02"
							value={tel.value}
							placeholder="Телефон"
							type="tel"
							name="tel"
							errorMessage={tel.errorMessage}
						/>
						<InputField
							key="03"
							value={email.value}
							placeholder="Электронная почта*"
							type="email"
							name="email"
							errorMessage={email.errorMessage}
						/>
						<InputField
							key="04"
							isTextArea
							value={message.value}
							placeholder="Текст сообщения*"
							errorMessage={message.errorMessage}
						/>
					</div>

					<div className={style.description}>*обязательные поля</div>

					<InputField
						key="05"
						className={style.checkbox}
						isCheckBox
						checked={agreement.value}
						type="checkbox"
						name="name"
						errorMessage={agreement.errorMessage}
					/>

					<button className={style.button} type="submit" disabled={isSubmitting}>
						<img src={iconButton} alt="iconButton" />
						<span>Отправить сообщение</span>
					</button>
				</form>
			</div>
		</div>
	);
}
