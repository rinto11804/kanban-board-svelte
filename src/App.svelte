<script>
	import { onMount } from "svelte";
	import Column from "./lib/Column.svelte";
	import { cardState, loadCards } from "./store";
	const columns = ["💡 To do", "⏳ In progress", "✅ Done"];

	$:console.log($cardState);
</script>

<main>
	{#await loadCards() then _}
		{#each columns as column, i (i)}
			<Column title={column} cards={$cardState} id={i + 1} />
		{/each}
	{/await}
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
