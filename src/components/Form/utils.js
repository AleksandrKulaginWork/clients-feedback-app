import { validationForm } from '../../validation/validation';

export async function validationField(name, value) {
	try {
		await validationForm.fields[name].validate(value);
		return true;
	} catch (error) {
		return false;
	}
}
