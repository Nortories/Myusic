<script>
  import axios from "axios";

  let registerUsername = "";
  let registerPassword = "";
  let registerMessage = "";
  let confirmPassword = "";

  const handleRegister = async () => {
    if (registerPassword !== confirmPassword) {
      registerMessage = "Passwords do not match";
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/register", {
        username: registerUsername,
        password: registerPassword,
        email: "",
        address: "",
        phoneNumber: "",
        bio: "",
      });
      registerMessage = response.data;
    } catch (error) {
      registerMessage = error.response.data;
    }
  };
</script>

<main>
  <h1>Register</h1>
  <form on:submit|preventDefault={handleRegister}>
    <label>
      Username:
      <input type="text" bind:value={registerUsername} />
    </label>
    <br />
    <label>
      Password:
      <input type="password" bind:value={registerPassword} />
    </label>
    <br />
    <label>
      Confirm :
      <input type="password" bind:value={confirmPassword} />
    </label>
    <br />
    <button type="submit">Register</button>
  </form>
  {#if registerMessage}
    <p>{registerMessage}</p>
  {/if}
</main>

<!-- <script>
  let name = "";
  let birthday = "";
  let gender = "";
  let email = "";
  let password = "";
  let confirmPassword = "";

  function handleSubmit() {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    createAccount();
    // Perform account creation logic here
    // ...
  }


    function createAccount() {
        // Handle form submission here
        console.log('Form submitted!');
        console.log('Name:', name);
        console.log('Birthday:', birthday);

        redirecting();
    }

    function redirecting() {
        window.location.href = "login/Thankyou";
    }

</script>

<main>
  <form on:submit|preventDefault={handleSubmit}>
    <label>
      Name:
      <input type="text" bind:value={name} required />
    </label>

    <label>
      Birthday:
      <input type="date" bind:value={birthday} required />
    </label>

    {#if new Date(birthday) > new Date().setFullYear(new Date().getFullYear() - 16)}
      <p>Students under 16 require guardian consent to approve lessons.</p>
    {/if}

    <label>
      Gender:
      <select bind:value={gender} required>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </label>

    <label>
      Email:
      <input type="email" bind:value={email} required />
    </label>

    <label>
      Password:
      <input type="password" bind:value={password} required />
    </label>

    <label>
      Confirm Password:
      <input type="password" bind:value={confirmPassword} required />
    </label>

    <button type="submit">Create Account</button>
  </form>
</main>
<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f5f5f5;
        font-family: Arial, sans-serif;
    }

    form {
        width: 400px;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    label {
        display: block;
        margin-bottom: 10px;
        font-weight: bold;
    }

    input,
    select {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        font-size: 14px;
    }

    p {
        margin-top: 10px;
        color: #ff0000;
        font-size: 12px;
    }

    button {
        display: block;
        width: 100%;
        padding: 10px;
        margin-top: 20px;
        background-color: #007bff;
        color: #ffffff;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style> -->

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
</style>
