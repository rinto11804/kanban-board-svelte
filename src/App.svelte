<script>
	import Column from "./lib/Column.svelte";
	import { draggingCard } from "./store";
	import { createId } from "./util";

	const columns = ["💡To do", "⏳ In progress", "✅ Done"];
	const todo = [
		{
			id: createId(),
			title: "Idea 1",
			content: "Take a tour to the blackhole",
			tag: "Space",
		},
		{
			id: createId(),
			title: "Idea 2",
			content: "Take a tour to the volcano",
			tag: "Lava",
		},
	];
	const inProgress = [
		{
			id: createId(),
			title: "Idea 1",
			content: "Take a tour to the blackhole",
			tag: "Space",
		},
		{
			id: createId(),
			title: "Idea 2",
			content: "Take a tour to the volcano",
			tag: "Lava",
		},
	];
	const done = [
		{
			id: createId(),
			title: "Idea 1",
			content: "Take a tour to the blackhole",
			tag: "Space",
		},
		{
			id: createId(),
			title: "Idea 2",
			content: "Take a tour to the volcano",
			tag: "Lava",
		},
	];
</script>

<main>
	<Column title={columns[0]} cards={todo} />
	<Column title={columns[1]} cards={inProgress} />
	<Column title={columns[2]} cards={done} />
</main>
<span>{$draggingCard}</span>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 4rem;
		height: 80vh;
		margin: 2rem;
	}
</style>
