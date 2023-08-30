<script>
    import { cardState } from "../store";
    import { dropzone } from "../util";

    let visible = false;
    /**
     * @type {number}
     */
    export let column_id;

    function showArea() {
        visible = true;
    }

    function hideArea() {
        visible = false;
    }
</script>

<div
    class="drop"
    on:dragenter={showArea}
    on:dragleave={hideArea}
    use:dropzone={{
        on_dropzone(card_id) {
            const card = $cardState.find((c) => c.id === card_id);
            card.column = column_id;
            $cardState = $cardState;
        },
    }}
/>

<style>
    .drop {
        background-color: #1e2e2e;
        height: 2rem;
        width: 100%;
        border-radius: 0.24rem;
        transition: height 100ms ease-in-out;
        opacity: 0;
    }
    .drop:global(.active) {
        background: #e1e2eef5;
        opacity: 1;
        height: 4rem;
    }
</style>
