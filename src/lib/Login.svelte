<script>
    import { loginUser } from "../store";

    let email = "";
    let password = "";
    let error = '';

    $: isFieldEmpty = email === "" || password === "";
</script>

<section class="login">
    <div class="card-header">
        <h2>Login</h2>
        <p>Enter your email and password</p>
    </div>
    <form
        on:submit|preventDefault={async (e) => {
            if (!isFieldEmpty) {
                error = await loginUser({ email, password });
                email = "";
                password = "";
            }
        }}
    >
        <label for="email">
            Email
            <input
                type="text"
                placeholder="Email"
                required
                bind:value={email}
            />
        </label>
        <label for="email">
            Password
            <input
                type="password"
                placeholder="Password"
                required
                bind:value={password}
            />
        </label>
        {#if error !== ''}
            <p class="error">Your email or password is wrong</p>
            
        {/if}

        <button type="submit">Login</button>
    </form>
</section>

<style>
    section {
        font-family: inherit;
        padding: 2rem;
        width: 25rem;
        border-radius: 0.35rem;
        background-color: var(--bg-900);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        margin: 0 auto;
    }
    p {
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    .error {
        padding: 0.5rem;
        border-radius: var(--radius);
        background-color: #ff4545f1;
        margin: 0;
    }

    h2 {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
    }

    form {
        display: flex;
        place-content: center;
        flex-direction: column;
        gap: 2rem;
    }
    form * {
        width: 100%;
    }

    label {
        font-size: 1rem;
        font-weight: 500;
    }

    input {
        font-family: inherit;
        background-color: transparent;
        border-color: var(--border);
        padding: 0.25rem;
        border-radius: var(--radius);
        font-size: 1rem;
        font-weight: 300;
        padding: 0.45rem;
        margin-top: 0.25rem;
        height: 3rem;
    }
    input:focus {
        outline: 1px solid var(--ring);
    }
</style>
