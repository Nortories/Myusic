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
  let zipcode = "";
  let phoneNumber = "";
  let bio = "";
  let logged_in = false;
  let endpoint = "http://localhost:3000/profile";
  let pricePerLesson = 0;
  let availableOnline = false;
  let availableInHome = false;
  let availableToTravel = false;
  let instrumentsTaught = "";


  onMount(() => {
    // const logged_in = localStorage.getItem('logged_in');
    // const username = localStorage.getItem('username');
    checkLogin();

    console.log(registerUsername);
    handleLoadProfile();
  });

  function checkLogin() {
    if (localStorage.getItem("isTeacher") === "true") {
      endpoint = "http://localhost:3000/teachProfile";
    }
    if (localStorage.getItem("loginstate") === "true") {
      registerUsername = localStorage.getItem("username");
    } else {
      window.location.href = "/";
    }
  }

  const handleLoadProfile = async () => 
  {
    try 
    {
        if (!localStorage.getItem("isTeacher")) 
      {
        const response = await axios.get(endpoint, 
        {
          headers: 
          {
            username: registerUsername,
          },
        });
        const { data } = response;
        email = data.email;
        address = data.address;
        zipcode = data.zipcode;
        phoneNumber = data.phoneNumber;
        bio = data.bio;
      }
      else
      {
        const response = await axios.get(endpoint, {
          headers: {
            username: registerUsername,
          },
        });
        const { data } = response;
        email = data.email;
        address = data.address;
        zipcode = data.zipcode;
        phoneNumber = data.phoneNumber;
        bio = data.bio;
        pricePerLesson = data.pricePerLesson;
        availableOnline = data.availableOnline;
        availableInHome = data.availableInHome;
        availableToTravel = data.availableToTravel;
        instrumentsTaught = data.instrumentsTaught;
      } 
    }
    catch (error) 
    {
      console.error(error);
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!localStorage.getItem("isTeacher")) 
      {
        const response = await axios.put(endpoint, {
          registerUsername,
          email,
          address,
          zipcode,
          phoneNumber,
          bio,
        });
        const { data } = response;
        console.log(data);
        alert("Profile updated successfully!");
        window.location.href = "/";
      } 
      else 
      {
        const response = await axios.put(endpoint, {
          registerUsername,
          email,
          address,
          zipcode,
          phoneNumber,
          bio,
          pricePerLesson,
          availableOnline,
          availableInHome,
          availableToTravel,
          instrumentsTaught,
        });
        const { data } = response;
        console.log(data);
        alert("Profile updated successfully!");
        window.location.href = "/";
      }
      const { data } = response;
      console.log(data);
      alert("Profile updated successfully!");
      window.location.href = "/";
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
      Postal Code:
      <input type="text" bind:value={zipcode} />
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
    {#if localStorage.getItem("isTeacher") === "true"}
      <h2>Teacher Settings</h2>
      <label>
        Price per 30min Lesson:
        <input type="number" bind:value={pricePerLesson} />
      </label>
      <label>
        Available to Teach Online:
        <input type="checkbox" bind:checked={availableOnline} />
      </label>
      <label>
        Available to Teach In-home:
        <input type="checkbox" bind:checked={availableInHome} />
      </label>
      <label>
        Available to Travel:
        <input type="checkbox" bind:checked={availableToTravel} />
      </label>
      <label>
        Instruments Taught:
        <select bind:value={instrumentsTaught} multiple>
          <option value="piano">Piano</option>
          <option value="guitar">Guitar</option>
          <option value="violin">Violin</option>
          <option value="drums">Drums</option>
          <option value="saxophone">Saxophone</option>
        </select>
      </label>
    {/if}
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
