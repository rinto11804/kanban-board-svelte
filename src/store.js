import { writable } from "svelte/store";
import { superbase } from "./superbase";

export const cardState = writable(null);
export const openModal = writable(false);
export const selectedColumn = writable(null);
export const isLoginPage = writable(true);
export const user = writable(null);

/**
 * @param {{ email: string; password: string; }} formData
 */
export async function loginUser(formData) {
	const { data, error } = await superbase.auth.signInWithPassword({
		email: formData.email,
		password: formData.password,
	})

	if (error) {
		return error.message;
	} else {
		user.set(data)
		isLoginPage.set(false);
	}
}


export async function addCard({ title, content, tag, column_id }) {
	const { error } = await superbase.from('cards').insert([{ title, content, tag, column: column_id }]);
	if (error) {
		console.log(error)
	}
	await loadCards();
}


export async function loadCards() {
	const { data, error } = await superbase.from('cards').select();
	if (error) {
		return console.log(error)
	}
	cardState.set(data);
}