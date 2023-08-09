import style from './style.module.css';
import iconButton from '../../assets/image-form/icon-button.svg';
import iconHeader from '../../assets/image-form/icon-header.svg';

export function Form({
	handleSubmit,
	username,
	telephone,
	password,
	message,
}) {
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
						<input value={username} placeholder="Ваше имя*" type="text" name="username" required />
						<input value={telephone} placeholder="Телефон" type="tel" name="telephone" />
						<input value={password} placeholder="Электронная почта*" type="password" name="password" required />
						<textarea value={message} placeholder="Текст сообщения*" />
					</div>
					<div className={style.description}>*обязательные поля</div>
					<label className={style.checkbox} htmlFor="myCheckbox">
						<input type="checkbox" id="myCheckbox" name="myCheckbox" />
						<p>
							Я согласен(-на) с
							<span> правилами </span>
							о обработке моих персональных данных
						</p>
					</label>

					<button className={style.button} type="submit">
						<img src={iconButton} alt="iconButton" />
						<span>Отправить сообщение</span>
					</button>
				</form>
			</div>
		</div>
	);
}
