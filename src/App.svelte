<script>
	import { onMount } from "svelte";
	import Column from "./lib/Column.svelte";
	import Login from "./lib/Login.svelte";
	import Modal from "./lib/Modal.svelte";
	import { cardState, isLoginPage, loadCards, user_id } from "./store";
	import Navbar from "./lib/Navbar.svelte";
	import { supabase } from "./superbase";
	const columns = ["💡 To do", "⏳ In progress", "✅ Done"];

	onMount(async () => {
		supabase.auth.onAuthStateChange((event, session) => {
			if (event === "SIGNED_IN") {
				$user_id = session.user.id;
				$isLoginPage = false;
			}
			if (event === "SIGNED_OUT") {
				$isLoginPage = true;
			}
		});
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
