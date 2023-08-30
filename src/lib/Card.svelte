<script>
    import { draggable } from "../util";
    export let id;
    export let title;
    export let content;
    export let tag;
    export let column;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="card"

    use:draggable={id}
>
    <h4>{title}</h4>
    <p>
        {content}
    </p>

    <div class="tag">{tag + column}</div>
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
