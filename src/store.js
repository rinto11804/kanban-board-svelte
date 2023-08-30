import { writable } from "svelte/store";
import { createId } from "./util";


export const draggingCard = writable(null);
export const dragEnterColumn = writable(null);
export const dragLeaveColumn = writable(null);

export const todos = writable([
  {
    column_id:"2",
    id: createId(),
    title: "Idea 1",
    content: "Take a tour to the blackhole",
    tag: "Space",
  },
  {
    column_id: "1",
    id: createId(),
    title: "Idea 2",
    content: "Take a tour to the volcano",
    tag: "Lava",
  },
  {
    column_id: "3",
    id: createId(),
    title: "Idea 2",
    content: "Take a tour to the volcano",
    tag: "Lava",
  },
]);


export const inProgress = writable(null);
export const done = writable(null);
