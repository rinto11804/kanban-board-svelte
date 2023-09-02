<script>
	import Column from "./lib/Column.svelte";
	import Login from "./lib/Login.svelte";
	import Modal from "./lib/Modal.svelte";
	import { cardState, isLoginPage, loadCards, user } from "./store";
	const columns = ["💡 To do", "⏳ In progress", "✅ Done"];
</script>

<main class:login_state={$isLoginPage}>
	{#if $isLoginPage && $user === null}
		<Login />
	{:else}
		{#await loadCards() then _}
			{#each columns as column, i (i)}
				<Column title={column} cards={$cardState} id={i + 1} />
			{/each}
		{/await}
		<Modal />
	{/if}
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

	main.login_state {
		display: flex;
		place-content: center;
	}
</style>
