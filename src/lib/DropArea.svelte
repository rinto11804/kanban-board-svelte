<script>
    import { cardState, loadCards } from "../store";
    import { superbase } from "../superbase";
    import { dropzone } from "../util";

    /**
     * @type {number}
     */
    export let column_id;
</script>

<div
    class="drop"
    use:dropzone={{
        async on_dropzone(card_id) {
            const { error } = await superbase
                .from("cards")
                .update({ column: column_id })
                .eq("id", card_id);
            if (error) {
                console.log(error);
            }
            loadCards();
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
        background: rgba(225, 226, 238, 0.261);
        opacity: 1;
        height: 4rem;
    }
</style>
