import ImageChildren from '../../assets/image-form/image-children.png';
import CircleImage from '../../assets/image-form/Group 882.png';
import { Form } from '../Form';
import { ContainerSection, ImageSection, Circle } from './style';

export function FormSection() {
	return (
		<ContainerSection>
			<ImageSection>
				<img src={ImageChildren} alt="children" />
				<Circle src={CircleImage} alt="Fill the form" />
			</ImageSection>
			<Form />
		</ContainerSection>
	);
}
