<script>
    let email = '';
    let password = '';

    const handleLogin = () => {
        // Logic to handle login, e.g., API call for authentication
        console.log('Logging in:', { email, password });
        // Further actions like redirecting the user
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

<form on:submit|preventDefault={handleLogin}>
    <input type="email" placeholder="Email" bind:value={email} required>
    <input type="password" placeholder="Password" bind:value={password} required>
    <button type="submit">Log In</button>
</form>
