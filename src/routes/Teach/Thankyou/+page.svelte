<script>
  import { onMount } from 'svelte';

  onMount(() => {
    // Code to handle resume submission and review
    // You can add your logic here
  });
</script>

<main>
  <h1>Thank you for submitting your resume!</h1>
  <p>We have received your application and will review it shortly. Please keep an eye on your inbox for any updates.</p>
  <button on:click={() => window.location.href = '/'} class="btn">Go back to Home</button>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .btn {
    padding: 1rem 2rem;
    font-size: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #0056b3;
  }
</style>