<script>

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
/>

<style>
    .drop-area {
        background-color: #1e2e2e;
        height: 2rem;
        width: 100%;
        border-radius: 0.24rem;
        transition: all 500ms ease-in-out;
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
