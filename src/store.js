import { writable } from "svelte/store";
import { supabase } from "./superbase";
export const cardState = writable(null);
export const openModal = writable(false);
export const selectedColumn = writable(null);
export const isLoginPage = writable(true);
export const user_id = writable(null);

/**
 * @param {{ email: string; password: string; }} formData
 */
export async function loginUser(formData) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: formData.email,
		password: formData.password,
	})

	if (error) {
		return error.message;
	}
	if (data.session !== null) {
		user_id.set(data.user.id)
		isLoginPage.set(false);
	}
}

export async function signOut() {
	const { error } = await supabase.auth.signOut()
	isLoginPage.set(true)
	if (error) {
		console.log(error);
	}
}

export async function addCard({ title, content, tag, column_id, user_id }) {
	const { error } = await supabase.from('cards').insert([{ title, content, tag, column: column_id, user_id }]);
	if (error) {
		console.log(error)
	}
	await loadCards();
}


export async function loadCards() {
	const { data, error } = await supabase.from('cards').select();
	if (error) {
		return console.log(error)
	}
	cardState.set(data);
}