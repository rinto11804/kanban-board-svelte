<script>
    import { draggingCard } from "../store";

    import { createEventDispatcher } from "svelte";

    export let id;
    export let title;
    export let content;
    export let tag;

    const dispatch = createEventDispatcher();

    function onDrag() {
        dispatch("Drag", {
            tell: () => alert("Hello Drag"),
        });
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="card"
    draggable="true"
    on:dragstart={() => ($draggingCard = id)}
    on:dragend={() => ($draggingCard = null)}
    on:drag={onDrag}
>
    <h4>{title}</h4>
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
        gap: 0.23rem;
        width: 35ch;
        background-color: #2e2e2e;
        border-radius: 0.35rem;
        padding: 0.65rem;
        cursor: grab;
    }

    .tag {
        background-color: #945;
        padding-inline: 1rem;
        padding-block: 0.3rem;
        font-size: 0.7rem;
        font-weight: bolder;
        border-radius: 4rem;
    }

    .card:active {
        animation: 1s ease-in pluse;
    }

    @keyframes pluse {
        to {
            opacity: 1;
        }

        from {
            opacity: 0.4;
        }
    }

    p {
        font-size: 0.85rem;
    }
</style>
