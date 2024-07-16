<script>
    import axios from 'axios';
    let username = '';
    let password = '';
    let message = '';

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', {
                username,
                password
            });
            message = response.data;
        } catch (error) {
            message = error.response.data;
        }
    };
</script>

<main>
    <h1>Login</h1>
    <form on:submit|preventDefault={handleSubmit}>
        <label>
            Username:
            <input type="text" bind:value={username} />
        </label>
        <br>
        <label>
            Password:
            <input type="password" bind:value={password} />
        </label>
        <br>
        <button type="submit">Login</button>
    </form>
    {#if message}
        <p>{message}</p>
    {/if}
</main>

<style>
    main {
        text-align: center;
        margin-top: 50px;
    }
    label {
        display: block;
        margin: 10px 0;
    }
    button {
        margin-top: 20px;
    }
    
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


