<script>

    import { dragEnterColumn, draggingCard } from "../store";
    import { getColumnID, moveCard } from "../util";

    let visible = false;

    function showArea() {
        visible = true;
    }

    function hideArea() {
        visible = false;
    }

</script>

<div
    class="{visible ? 'drop-active' : 'drop-hidden'} drop-area"
    on:dragenter={showArea}
    on:dragleave={hideArea}
    on:drop={(e) => {
        e.preventDefault();
        console.log("Ares");
        const columnID = getColumnID($dragEnterColumn);
        moveCard(columnID, $draggingCard);
    }}
/>

<style>
    .drop-area {
        background-color: #1e2e2e;
        height: 2rem;
        width: 100%;
        border-radius: 0.24rem;
        transition: all 300ms ease-in-out;
    }
    .drop-active {
        background: #e1e2eef5;
        opacity: 1;
        height: 4rem;
    }

    .drop-hidden {
        opacity: 0;
    }
</style>
