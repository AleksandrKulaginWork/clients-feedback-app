import style from './style.module.css';
import iconHeader from '../../assets/image-form/icon-header.svg';
import imageChildren from '../../assets/image-form/image-children.png';
import { Form } from '../Form';

export function FormSection() {
	return (
		<div className={style.formSection}>
			<div className={style.sectionImage}>
				<img src={imageChildren} alt="children" />
			</div>
			<div className={style.sectionForm}>
				<div className={style.header}>
					<img src={iconHeader} alt="icon-header" />
					<h2>Свяжитесь с нами</h2>
				</div>
				<p className={style.description}>Отправьте нам сообщение и мы ответим в ближайшее время</p>
				<Form />
			</div>
		</div>
	);
}
