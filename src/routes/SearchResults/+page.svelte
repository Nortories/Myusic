<script>
    import { onMount } from "svelte";
      import axios from "axios";
  
    let zipcode = "";
    let profiles = [];
  
    onMount(async () => {
        zipcode = localStorage.getItem("zipcode");
      try {
        const response = await axios.get(
          "http://localhost:3000/getTeacherByZipcode",
          {
            headers: {
              zipcode: zipcode,
            },
          }
        );
        const { data } = response;
        profiles = data;
  
       
      } catch (error) {
        console.log(error);
      }
    });


    function handleClick(profile) {
        // Handle the click event for each profile
        console.log("Clicked profile:", profile);
        // Add your custom logic here
        localStorage.setItem("searchName", profile.username);
        window.location.href = "/Profile";
    }

</script>

{#if profiles.length === 0}
    <div class="no-profiles">No profiles found</div>
{:else}
    <div class="profile-list"> 
        <h2 class="num-found">Number of profiles found: {profiles.length}</h2>
        {#each profiles as profile}
            <button class="profile-card" on:click={() => handleClick(profile)}>
                <h3>{profile.username}</h3>
                <p>{profile.bio}</p>
                <p>{profile.phoneNumber}</p>
            </button>
        {/each}
    </div>
{/if}


<style>
    .profile-card:hover {
        background-color: #f0f0f0;
        cursor: pointer;
    }

    .profile-card:active {
        transform: scale(0.95);
    }
    .num-found {
            margin: 0;
            font-size: 1.5rem;
            font-weight: bold;
            color: #333;
    }
    .profile-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1rem;
            padding: 1rem;
            background-color: #f5f5f5;
            border-radius: 8px;
    }

    .profile-card {
            padding: 1rem;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .profile-card h3 {
            margin: 0;
            font-size: 1.2rem;
            font-weight: bold;
    }

    .profile-card p {
            margin: 0;
            color: #666;
    }

    .no-profiles {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 200px;
            font-size: 1.5rem;
            font-weight: bold;
            color: #333;
            background-color: #f5f5f5;
            border-radius: 8px;
    }
</style>
