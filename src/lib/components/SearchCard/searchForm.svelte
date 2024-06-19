<script>
  let instruments = ["Piano", "Guitar", "Violin", "Drums"];
  let ageGroups = ["0-5", "6-10", "11-15", "16-20", "21+"];
  let selectedInstrument = "Piano";
  let selectedAgeGroup = "0-5";
  let zipcode = "";
  let location = "";

  function handleSubmit() {
    // Handle form submission here
    console.log("Form submitted");
    console.log("Selected instrument:", selectedInstrument);
    console.log("Selected age group:", selectedAgeGroup);
    console.log("Zipcode:", zipcode);
    console.log("Location:", location);
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="align-row">
    <div class="instrument-select align-colom">
      <label for="instrument">Instrument:</label>
      <select id="instrument" bind:value={selectedInstrument}>
        {#each instruments as instrument}
          <option value={instrument}>{instrument}</option>
        {/each}
      </select>
    </div>

    <div class="age-select align-colom">
      <label for="ageGroup">Age Group:</label>
      <select id="ageGroup" bind:value={selectedAgeGroup}>
        {#each ageGroups as ageGroup}
          <option value={ageGroup}>{ageGroup}</option>
        {/each}
      </select>
    </div>

    <div class="zipcode align-colom">
      <label for="location">Location:</label>
      <input
        type="text"
        id="zipcode"
        bind:value={zipcode}
        placeholder="Zipcode"
      />
    </div>
  </div>
  
  <div class="align-row">
    <div>
      <input
        type="radio"
        id="inHome"
        name="location"
        value="in-home"
        bind:group={location}
      />
      <label for="inHome">In-home</label>
    </div>
    <div>
      <input
        type="radio"
        id="teacherStudio"
        name="location"
        value="teacher-studio"
        bind:group={location}
      />
      <label for="teacherStudio">Teacher Studio</label>
    </div>
    <div>
      <input
        type="radio"
        id="online"
        name="location"
        value="online"
        bind:group={location}
      />
      <label for="online">Online</label>
    </div>

    <button class="searchBtn" type="search">Search</button>
  </div>
</form>

<style>
  form {
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem 3.5rem 2rem;
    gap: 1rem;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .align-row:first-child {
    padding-bottom: 0.5rem;
    border-bottom: 3px solid grey;
  }
  .align-row {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .align-colom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  input[type="text"]::placeholder {
    color: gray;
  }

  input[type="text"]:focus::placeholder {
    color: transparent;
  }

  input[type="radio"] {
    appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    border: 2px solid gray;
    border-radius: 50%;
    outline: none;
  }

  input[type="radio"]:checked {
    background-color: #558;
  }

  input[type="text"] {
    padding: 0.5rem;
    font-size: 1rem;
  }

  select {
    margin-top: .5rem;
    padding: 0.5rem 3rem;
    font-size: 1rem;
  }
  .searchBtn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #558;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
    .searchBtn:hover {
        background-color: rgb(55, 55, 145);
        color: white;
    }
    .searchBtn:active {
        background-color: rgb(27, 27, 116);
        color: white;
    }
</style>
