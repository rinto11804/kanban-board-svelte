<script>
	import Column from "./lib/Column.svelte";
	import { cardState } from "./store";
	const columns = ["💡 To do", "⏳ In progress", "✅ Done"];
</script>

<main>
	{#each columns as column, i (i)}
		<Column title={column} cards={$cardState} id={i + 1} />
	{/each}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		place-items: center;
		gap: 4rem;
		height: 90vh;
		margin: 2rem;
	}
</style>
