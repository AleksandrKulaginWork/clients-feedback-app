import { useSelector } from 'react-redux';
import './style.css';
import iconButton from '../../assets/image-form/icon-button.svg';
import iconHeader from '../../assets/image-form/icon-header.svg';
import { useFormDispatch } from './dispatch';
import { FormField } from '../FormField/index';
import {
	Announcement,
	Button, Description,
	FormBody, FormContainer,
	FormHeader, FormMain,
	InputItems, Span, Title,
} from './style';

export function Form() {
	const {
		name, tel, email, message, agreement,
	} = useSelector((state) => state.form.fields);

	const {
		handleSubmit,
	} = useFormDispatch();

	return (
		<FormContainer>
			<FormBody>
				<FormHeader>
					<img src={iconHeader} alt="icon-header" />
					<Title>Свяжитесь с нами</Title>
				</FormHeader>

				<Announcement>Отправьте нам сообщение и мы ответим в ближайшее время</Announcement>

				<FormMain onSubmit={handleSubmit} noValidate>
					<InputItems>
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
					</InputItems>

					<Description>*обязательные поля</Description>

					<FormField
						checked={agreement.value}
						type="checkbox"
						name="agreement"
						errorMessage={agreement.errorMessage}
						isValid={agreement.isValid}
					/>

					<Button type="submit">
						<img src={iconButton} alt="iconButton" />
						<Span>Отправить сообщение</Span>
					</Button>
				</FormMain>
			</FormBody>
		</FormContainer>
	);
}
