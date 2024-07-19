<script>
  import Login from '$lib/components/Login/Login.svelte';
  import SignUp from '$lib/components/Login/SignUp.svelte';
  import { onMount } from "svelte";

  import { logged_in } from "$lib/js/stores.js";

  onMount(() => {
    if (logged_in) {
      // Redirect logic here
      console.log(logged_in);
      // window.location.href = "/main";
      checklogin();
  }});
  let showLogin = true; // State to toggle between login and signup

  function checklogin() {
    if (localStorage.getItem('username')) {
      window.location.href = "/";
    }
  }

  function toggleForm() {
      showLogin = !showLogin; // Toggle the state
  }
</script>

<div>
  {#if showLogin}
      <Login />
      <button on:click={toggleForm}>Sign Up</button>
  {:else}
      <SignUp />
      <button on:click={toggleForm}>Back to Log In</button>
  {/if}
</div>
<style>
  button {
      margin-top: 20px;
      padding: 8px 16px;
      cursor: pointer;
  }
  div {
      text-align: center;
  }
</style>
