<script>

  export let email;

  function redirecting() {
        window.location.href = "/";
    }
</script>

<main>
  <h1>Thank You for Signing Up!</h1>
  <p>
    We appreciate you joining our platform. To complete the registration process, please check your email at {email} and click on the verification link.
  </p>
  <p>
    If you don't receive the email within a few minutes, please check your spam folder.
  </p>
  
  <button on:click={() => redirecting()}>Go Back to Home Page</button>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 2rem;
    text-align: center;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>