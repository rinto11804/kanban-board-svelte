<script>
	import Column from "./lib/Column.svelte";
	import { todos } from "./store";
	const columns = ["💡To do", "⏳In progress", "✅Done"];
</script>

<main>
	<Column title={columns[0]} id="1" cards={$todos} />
	<Column title={columns[1]} id="2" cards={$todos} />
	<Column title={columns[2]} id="3" cards={$todos} />
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 4rem;
		height: 80vh;
		margin: 2rem;
	}
</style>
