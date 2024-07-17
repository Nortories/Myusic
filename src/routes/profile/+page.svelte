<!-- 
<script>
  import axios from "axios";
    import { onMount } from "svelte";
    import { logged_in } from "$lib/js/stores.js";

    let username = localStorage.getItem('username') || '';
    let email   = '';
    let address = '';
    let phoneNumber = '';
    let bio = '';

    onMount(() => {
        if (!logged_in) {
            window.location.href = "/";
        }

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:3000/profile", { username });
            const { data } = response;
            email = data.email;
            address = data.address;
            phoneNumber = data.phoneNumber;
            bio = data.bio;
        } catch (error) {
            console.error(error);
        }
    };
    });
</script> -->

<script>
  import axios from "axios";
  import { onMount } from "svelte";

  let registerUsername = "aaa";
  let email = "";
  let address = "";
  let phoneNumber = "";
  let bio = "";

  onMount(() => {
    // const logged_in = localStorage.getItem('logged_in');
    // const username = localStorage.getItem('username');
    console.log(logged_in);
    console.log(username);
    registerUsername = username;
    if (logged_in) {
      window.location.href = "/";
    }

    handleLoadProfile();
  });

  const handleLoadProfile = async () => {
    try {
      const response = await axios.get("http://localhost:3000/profile", {
        headers: {
            username: registerUsername,
        },
      });
      const { data } = response;
      email = data.email;
      address = data.address;
      phoneNumber = data.phoneNumber;
      bio = data.bio;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put("http://localhost:3000/profile", {
        headers: {
            username: registerUsername,
        },
        email,
        address,
        phoneNumber,
        bio,
      });
      const { data } = response;
    } catch (error) {
      console.error(error);
    }
  };
</script>

<main>
  <h1>Profile</h1>
  <form on:submit={handleSubmit}>
    <label>
      Username:
      <input type="text" bind:value={registerUsername} disabled />
    </label>
    <label>
      Email:
      <input type="email" bind:value={email} />
    </label>
    <label>
      Address:
      <input type="text" bind:value={address} />
    </label>
    <label>
      Phone Number:
      <input type="tel" bind:value={phoneNumber} />
    </label>
    <label>
      Bio:
      <textarea bind:value={bio}></textarea>
    </label>
    <button type="submit">Save</button>
  </form>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  form {
    display: grid;
    gap: 1rem;
    max-width: 400px;
    width: 100%;
  }

  label {
    display: grid;
    gap: 0.5rem;
  }

  input,
  textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
