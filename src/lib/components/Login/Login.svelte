<script>
  import axios from "axios";
  import {logged_in, user} from "$lib/js/stores.js";

  let username = '';
    let password = '';
    let loginMessage = '';

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', {
                username,
                password
            });
            loginMessage = response.data;
            if (response.status === 200) {
                updateStore();

            }
            
        } catch (error) {
            loginMessage = "Invalid username or ";
        }
    };

    const updateStore = () => {
        user.set(username);
        logged_in.set(true);
        console.log("done");
        console.log(username);
        if (!localStorage.getItem('username')) {
            localStorage.setItem('username', username);
            localStorage.setItem('loginstate', true);
            checkLogin();
        }
    };

    const checkLogin = () => {
        if (localStorage.getItem('username')) {
            window.location.href = "/";
        }
    };
</script>

<main>
    <h1>Login</h1>
    <form on:submit|preventDefault={handleLogin}>
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
    {#if loginMessage}
        <p>{loginMessage}</p>
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

  input,
  button {
    margin: 8px 0;
    padding: 10px;
  }

  button {
    cursor: pointer;
  }
</style>
