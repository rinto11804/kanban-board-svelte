<script>
    import { cardState } from "../store";
    import { dropzone } from "../util";
    import Card from "./Card.svelte";
    export let title;
    export let cards;
    export let id;
</script>

<section
    class="column"
    use:dropzone={{
        on_dropzone(card_id) {
            const card = cards.find((c) => c.id === card_id);
            card.column = id;
            $cardState = cards;
        },
    }}
>
    <h3>{title}</h3>
    {#each cards as card (card.id)}
        {#if card.column === id}
            <Card {...card} />
        {/if}
    {/each}
</section>

<style>
    .column {
        display: flex;
        background-color: #171717;
        align-items: center;
        flex-direction: column;
        padding: 0.75rem;
        border-radius: 0.45rem;
        gap: 1rem;
    }

    .column:global(.droppable) {
        outline: 0.1rem solid navajowhite;
        outline-offset: 0.25rem;
    }
    .column:global(.droppable) * {
        pointer-events: none;
    }
</style>
