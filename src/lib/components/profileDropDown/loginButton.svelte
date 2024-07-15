<!-- 
Drop down menu with user profile data
This is a placeholder user profile data needs to be injected from google OAuth 
Drop down menu works on click event
links are not functional
-->
<script>
  function handleLogin() {
    // Redirect to the login page
    window.location.href = "/login";
  }
</script>

<div class="container">
  <button on:click={handleLogin}> Login </button>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

  * {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    text-decoration-line: none;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-right: 20px;
  }

  button {
    color: white;
    font-size: 1.5em;
    background: #558;
    border: black 1px solid;
    border-radius: 50%; /* changed from 40px to 50% */
    padding: 1em;
    transition: 0.5s;
  }

  button:hover {
    background-color: #000000;
    border-radius: 50%; /* changed from 90px to 50% */
    padding: 1.25em;
    cursor: pointer;
  }
  button:active {
    background-color: #868686;
    border-radius: 50%; /* changed from 90px to 50% */
    padding: 1.25em;
  }

</style>
