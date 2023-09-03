<script>
	import { onMount } from "svelte";
	import Column from "./lib/Column.svelte";
	import Login from "./lib/Login.svelte";
	import Modal from "./lib/Modal.svelte";
	import { cardState, isLoginPage, loadCards, user_id } from "./store";
	import { superbase } from "./superbase";
	import Navbar from "./lib/Navbar.svelte";
	const columns = ["💡 To do", "⏳ In progress", "✅ Done"];

	onMount(async () => {
		const { data, error } = await superbase.auth.getSession();
		console.log(data);
		if (error === null && data.session !== null) {
			$user_id = data.session.user.id;
			$isLoginPage = false;
		} else {
			$isLoginPage = true;
		}
	});
</script>

{#if $isLoginPage || $user_id === null}
	<Login />
{:else}
	<header>
		<Navbar />
	</header>

	<main>
		{#await loadCards() then _}
			{#each columns as column, i (i)}
				<Column title={column} cards={$cardState} id={i + 1} />
			{/each}
		{/await}
		<Modal />
	</main>
{/if}

<style>
	main {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		place-items: center;
		gap: 4rem;
		margin: 2rem;
		height: 100%;
	}
</style>
