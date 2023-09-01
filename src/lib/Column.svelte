<script>
    import { openModal, selectedColumn } from "../store";
    import Card from "./Card.svelte";
    import DropArea from "./DropArea.svelte";
    export let title;
    export let id;
    export let cards;
</script>

<section class="column">
    <div class="column-header">
        <h3>{title}</h3>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <svg
            on:click={() => {
                $openModal = true;
                $selectedColumn = id;
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="white"
            ><path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            /></svg
        >
    </div>
    <DropArea column_id={id} />
    {#each cards as card (card.id)}
        {#if card.column === id}
            <Card
                id={card.id}
                title={card.title}
                content={card.content}
                tag={card.tag}
            />
            <DropArea column_id={id} />
        {/if}
    {/each}
</section>

<style>
    .column {
        display: flex;
        width: 25rem;
        background-color: #171717;
        align-items: center;
        flex-direction: column;
        padding: 0.85rem;
        border-radius: 0.45rem;
        min-height: 100%;
        height: fit-content;
    }

    .column-header {
        display: flex;
        place-content: center;
        width: 100%;
    }
    h3 {
        margin: auto;
    }

    svg {
        padding: 0.38rem;
        border-radius: 0.35rem;
        height: 2rem;
    }

    svg:hover {
        background-color: rgba(230, 225, 225, 0.212);
    }
</style>
