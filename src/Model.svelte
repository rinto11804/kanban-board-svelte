<script>
    import { addCard, openModal, selectedColumn } from "./store";

    let dialog;

    let title = '';
    let content = '';
    let tag = '';

    function closeModel() {
        dialog.close();
        $openModal = false;
    }

    $: if (dialog && $openModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
    bind:this={dialog}
    on:close={() => ($openModal = false)}
    on:click|self={() => dialog.close()}
>
    <h2>Add a new task</h2>
    <form method="dialog">
        <label for="title">
            <span>Title</span>
            <input type="text" bind:value={title} required />
        </label>

        <label for="content">
            <span>Content</span>
            <textarea
                name="content"
                id="content"
                cols="30"
                rows="5"
                bind:value={content}
                required
            />
        </label>

        <label for="tag">
            <span>Tag</span>
            <input type="text" bind:value={tag} required />
        </label>

        <div class="btn">
            <button on:click={closeModel} class="normal-btn">Close</button>
            <!-- svelte-ignore a11y-autofocus -->
            <button
                type="submit"
                on:click={() => {
                    if (title !== "" && content !== "" && tag !== "") {
                        addCard({
                            title,
                            content,
                            tag,
                            column_id: $selectedColumn,
                        });
                        title = "";
                        content = "";
                        tag = "";

                        closeModel();
                    }
                }}
                autofocus>Submit</button
            >
        </div>
    </form>
</dialog>

<style>
    dialog {
        font-family: inherit;
        padding: 2rem;
        width: 30rem;
        margin: 5% auto;
        border-radius: 0.35rem;
        background-color: var(--bg-900);
        border: 1px solid var(--border);
        border-radius: var(--radius);
    }
    h2 {
        margin-bottom: 1rem;
    }

    form {
        display: flex;
        place-content: center;
        flex-direction: column;
        gap: 1rem;
    }
    form * {
        width: 100%;
    }

    .btn {
        display: flex;
        flex-direction: row;
        gap: 4rem;
    }

    label {
        font-size: 1.1rem;
        font-weight: 400;
    }

    :is(input, textarea) {
        font-family: inherit;
        background-color: transparent;
        border-color: var(--border);
        padding: 0.25rem;
        border-radius: var(--radius);
        font-size: 1rem;
        font-weight: 300;
        padding: 0.45rem;
        margin-top: 0.25rem;
    }

    :is(input, textarea):focus {
        outline: 1px solid var(--ring);
    }
    input {
        height: 3rem;
    }

    textarea {
        resize: none;
    }
    dialog::backdrop {
        background-color: rgb(0 0 0 / 0.1);
        backdrop-filter: blur(2px);
    }
</style>
