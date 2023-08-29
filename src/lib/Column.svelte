<script>
    import Card from "./Card.svelte";
    import DropArea from "./DropArea.svelte";
    export let title;
    export let cards;
</script>

<section class="column">
    <h3>{title}</h3>
    <DropArea />
    {#each cards as card (card.id)}
        <Card {...card}/>
        <DropArea />
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
    }
</style>
