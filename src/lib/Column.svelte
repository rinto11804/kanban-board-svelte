<script>
    import Card from "./Card.svelte";
    import DropArea from "./DropArea.svelte";
    export let title;
    export let id;
    export let cards;
</script>

<section class="column">
    <h3>{title}</h3>
    <DropArea column_id={id} />
    {#each cards as card (card.id)}
        {#if card.column === id}
            <Card {...card} />
            <DropArea column_id={id} />
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
        min-height: 100%;
        height: fit-content;
    }
</style>
