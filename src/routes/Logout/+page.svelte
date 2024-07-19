<script>
    import { onMount } from 'svelte';

    onMount(() => {
        localStorage.clear();
        window.location.href = "/";
    });
</script>

<h1>Logout Page</h1>
<!-- Your logout page content goes here -->