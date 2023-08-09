import style from './style.module.css';
import imageChildren from '../../assets/image-form/image-children.png';
import Circle from '../../assets/image-form/Group 882.png';
import { Form } from '../Form';

export function FormSection() {
	return (
		<div className={style.formSection}>
			<div className={style.sectionImage}>
				<img src={imageChildren} alt="children" />
				<img className={style.circle} src={Circle} alt="Fill the form" />
			</div>
			<Form />
		</div>
	);
}
