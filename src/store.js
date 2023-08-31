import { writable } from "svelte/store";
import { supabase } from "./superbase";

export const cardState = writable(null);


export async function loadCards(){
	const {data , error} = await supabase.from('cards').select();
	if(error){
		return console.log(error)
	}
	cardState.set(data);
}

export async function addCard(){
	const {data , error} = await supabase.from('cards').insert([{title:'The Black Hole',content:'A tour to black hole',tag:'Space',column:3}]).select();
	if(error){
		return console.log(error)
	}	
}