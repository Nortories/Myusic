<script>
    let name = '';
    let email = '';
    let password = '';

    const handleSubmit = () => {
        // Logic to handle submission, e.g., call to an API
        console.log('Submitting:', { name, email, password });
        // Reset fields or redirect user
        name = '';
        email = '';
        password = '';
    };
</script>

<style>
    form {
        display: flex;
        flex-direction: column;
        width: 300px;
        margin: auto;
    }

    input, button {
        margin: 8px 0;
        padding: 10px;
    }

    button {
        cursor: pointer;
    }
</style>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Name" bind:value={name} required>
    <input type="email" placeholder="Email" bind:value={email} required>
    <input type="password" placeholder="Password" bind:value={password} required>
    <button type="submit">Sign Up</button>
</form>
