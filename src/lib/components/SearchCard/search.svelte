<script>
    let instruments = ['Piano', 'Guitar', 'Violin', 'Drums'];
    let ageGroups = ['0-5', '6-10', '11-15', '16-20', '21+'];
    let selectedInstrument = 'Piano';
    let selectedAgeGroup = '0-5';
    let zipcode = '';
    let location = '';

    function handleSubmit() {
        // Handle form submission here
        console.log('Form submitted');
        console.log('Selected instrument:', selectedInstrument);
        console.log('Selected age group:', selectedAgeGroup);
        console.log('Zipcode:', zipcode);
        console.log('Location:', location);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="instrument">Instrument:</label>
    <select id="instrument" bind:value={selectedInstrument}>
        {#each instruments as instrument}
            <option value={instrument}>{instrument}</option>
        {/each}
    </select>

    <label for="ageGroup">Age Group:</label>
    <select id="ageGroup" bind:value={selectedAgeGroup}>
        {#each ageGroups as ageGroup}
            <option value={ageGroup}>{ageGroup}</option>
        {/each}
    </select>

    <label for="zipcode">Zipcode:</label>
    <input type="text" id="zipcode" bind:value={zipcode} placeholder="Zipcode" />
    <label for="location">Location:</label>
    <div>
        <input type="radio" id="inHome" name="location" value="in-home" bind:group={location} />
        <label for="inHome">In-home</label>
    </div>
    <div>
        <input type="radio" id="teacherStudio" name="location" value="teacher-studio" bind:group={location} />
        <label for="teacherStudio">Teacher Studio</label>
    </div>
    <div>
        <input type="radio" id="online" name="location" value="online" bind:group={location} />
        <label for="online">Online</label>
    </div>

    <button type="search">Search</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: row;
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
        background-color: gray;
    }
</style>

