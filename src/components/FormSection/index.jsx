import style from './style.module.css';
import imageChildren from '../../assets/image-form/image-children.png';
import { Form } from '../Form';

export function FormSection() {
	return (
		<div className={style.formSection}>
			<div className={style.sectionImage}>
				<img src={imageChildren} alt="children" />
			</div>
			<Form />
		</div>
	);
}
