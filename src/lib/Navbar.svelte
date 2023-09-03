<script>

    import { signOut } from "../store";

</script>

<nav>
    <button on:click={signOut}>Sign Out</button>
</nav>



<style>
    nav{
        display:flex ;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        border-bottom: 4px solid var(--border);
        height: 4rem;
    }
    button{
        margin:  auto 1rem;
        height: 3rem;
    }
</style>