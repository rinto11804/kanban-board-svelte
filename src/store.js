import { writable } from "svelte/store";
import { superbase } from "./superbase";

export const cardState = writable(null);
export const openModal = writable(false);
export const selectedColumn = writable(null);


export async function addCard({title,content,tag,column_id}){
	const { error } = await superbase.from('cards').insert([{title,content,tag,column:column_id}]);
	if(error){
		console.log(error)
	}
	await loadCards();
}


export async function loadCards(){
	const {data , error} = await superbase.from('cards').select();
	if(error){
		return console.log(error)
	}
	cardState.set(data);
}