import style from './style.module.css';
import { FormSection } from '../FormSection/index';

export function Layout() {
	return (
		<div className={style.container}>
			<FormSection />
		</div>
	);
}
