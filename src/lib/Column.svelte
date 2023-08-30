<script>
    import { dragEnterColumn, dragLeaveColumn } from "../store";
    import Card from "./Card.svelte";
    import DropArea from "./DropArea.svelte";
    export let title;
    export let id;
    export let cards;
</script>

<section
    class="column"
    on:dragenter={() => ($dragEnterColumn = title)}
    on:dragleave={() => ($dragLeaveColumn = title)}
  
>
    <h3>{title}</h3>
    <DropArea />
    {#each cards as card (card.id)}
        {#if id === card.column_id}
            <Card {...card} />
            <DropArea />
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
    }
</style>
