<script>
    import { deleteCard } from "../store";
    import { draggable } from "../util";
    export let id;
    export let title;
    export let content;
    export let tag;
</script>

<div class="card" use:draggable={id}>
    <div class="card-header">
        <h4>{title}</h4>
        <svg
            on:click={() => deleteCard(id)}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            fill="var(--fg-50)"
            viewBox="0 0 448 512"
            ><path
                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
            /></svg
        >
    </div>
    <p>
        {content}
    </p>

    <div class="tag">{tag}</div>
</div>

<style>
    .card {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.5rem;
        width: 35ch;
        background-color: #2e2e2e;
        border-radius: 0.35rem;
        padding: 0.65rem;
        cursor: grab;
    }
    .card-header {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    h4 {
        font-size: 1.1rem;
    }

    svg:hover {
        fill: rgb(254, 72, 72);
    }

    .tag {
        background-color: #5c3cce69;
        outline: 2px solid #5c3ccef8;
        padding-inline: 1rem;
        font-size: 0.7rem;
        font-weight: 500;
        border-radius: 4rem;
    }

    .card:active {
        animation: 1s infinite alternate-reverse linear pluse;
    }

    @keyframes pluse {
        to {
            opacity: 0.5;
        }
    }

    p {
        font-size: 0.85rem;
    }
</style>
