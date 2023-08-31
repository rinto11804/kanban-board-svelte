import { writable } from "svelte/store";
import { createId } from "./util";


export const cardState = writable(
    [
		{
			id: createId(),
			column:1,
			title: "Idea 1",
			content: "Take a tour to the blackhole",
			tag: "Space",
		},
		{
			id: createId(),
			column:3,
			title: "Idea 2",
			content: "Take a tour to the volcano",
			tag: "Lava",
		},
		{
			id: createId(),
			column:2,
			title: "Idea 1",
			content: "Take a tour to the blackhole",
			tag: "Space",
		},
		{
			id: createId(),
			column:1,
			title: "Idea 2",
			content: "Take a tour to the volcano",
			tag: "Lava",
		},
		{
			id: createId(),
			column:2,
			title: "Idea 1",
			content: "Take a tour to the blackhole",
			tag: "Space",
		},
		{
			id: createId(),
			column:1,
			title: "Idea 2",
			content: "Take a tour to the volcano",
			tag: "Lava",
		},
	]
)
