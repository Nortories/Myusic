<script>
  let name = '';
  let birthday = '';
  let gender = '';
  let email = '';
  let experience = '';
  let message = '';
  let instruments = [];
  let resume = null;

  function handleSubmit() {
    // Handle form submission here
    // You can send the form data to a server or perform any other necessary actions
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Birthday:', birthday);
    console.log('Gender', gender)
    console.log('Email:', email);
    console.log('Experience:', experience);
    console.log('Message:', message);
    console.log('Instruments:', instruments);
    console.log('Resume:', resume);


    // Send the form data to the server
    fetch('SEND RESUMES TO THIS END POINT', {
      method: 'POST',
      body: JSON.stringify({
        name,
        birthday,
        gender,
        email,
        experience,
        message,
        instruments,
        resume
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          console.log('Form submitted successfully!');
          // Redirect the user to the Teach/Processing page
          window.location.href = '/Teach/Processing';
        } else {
          console.log('Form submission failed.');
        }
      })
      .catch(error => {
        console.error('An error occurred during form submission:', error);
      });
      goToThankYouPage();
  }

  function goToThankYouPage() {
    window.location.href = "Teach/Thankyou";
  }
</script>


<h1>Become a Music Teacher</h1>

<p>Teaching with Myusic is a great opportunity! Here are some benefits:</p>

<ul>
  <li>Flexible schedule</li>
  <li>Competitive compensation</li>
  <li>Access to a large student network</li>
  <li>Supportive community of teachers</li>
  <li>Opportunity for growth and professional development</li>
</ul>

<form on:submit={handleSubmit}>
  <label>
    Name:
    <input type="text" bind:value={name} required />
  </label>

  <label>
    Birthday:
    <input type="date" bind:value={birthday} required />
  </label>

  {#if birthday && new Date(birthday) > new Date().setFullYear(new Date().getFullYear() - 18)}
    <p>You must be at least 18 years old to become a music teacher.</p>
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
    Experience:
    <textarea bind:value={experience} required></textarea>
  </label>

  <label>
    Instruments:
    <select multiple bind:value={instruments} required>
      <option value="piano">Piano</option>
      <option value="guitar">Guitar</option>
      <option value="violin">Violin</option>
      <option value="drums">Drums</option>
      <!-- Add more instrument options here -->
    </select>
  </label>

  <label>
    Message:
    <textarea bind:value={message}></textarea>
  </label>

  <label>
    Resume:
    <input type="file" bind:files={resume} required/>
  </label>

<button type="submit">Submit</button>
</form>

<style>
  /* Add your custom styles here */
  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 20px;
  }

  li {
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
  }

  form {
    margin-top: 20px;
  }

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: #333;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  select[multiple] {
    height: auto;
  }

  button[type="submit"] {
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background-color: #0056b3;
  }
</style>