<script>
    import { addCard, openModal, selectedColumn, user_id } from "../store";

    let dialog;

    let title = "";
    let content = "";
    let tag = "";

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
    <svg
        on:click={closeModel}
        xmlns="http://www.w3.org/2000/svg"
        fill="var(--fg-50)"
        viewBox="0 0 384 512"
        ><path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        /></svg
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
                autofocus
                on:click={() => {
                    if (title !== "" && content !== "" && tag !== "") {
                        addCard({
                            title,
                            content,
                            tag,
                            column_id: $selectedColumn,
                            user_id: $user_id,
                        });
                        title = "";
                        content = "";
                        tag = "";

                        closeModel();
                    }
                }}>Submit</button
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

    
    svg {
        padding: 0.28rem 0.3rem;
        float: right;
        border-radius: 0.35rem;
        height: 2.2rem;
    }
    svg:hover {
        background-color: rgba(230, 225, 225, 0.212);
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
        appearance: none;
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
