<script>
  import { onMount } from 'svelte';

  onMount(() => {
    // Perform any necessary actions when the component is mounted
  });

  function goBack() {
    // Add logic to navigate back to the main page
  }
</script>

<main>
  <h1>Thank You!</h1>
  <p>Thank you for submitting your application. We will review your resume and get back to you soon.</p>
  <button on:click={goBack}>Go Back to Main Page</button>
</main>

<style>
  main {
    text-align: center;
    margin: 50px auto;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>