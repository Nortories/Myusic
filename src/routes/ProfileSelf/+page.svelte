<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import { Calendar } from "@fullcalendar/core";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";

  let name = "";
  let username = "";
  let email = "";
  let address = "";
  let zipcode = "";
  let phoneNumber = "";
  let bio = "";
  let loginMessage = "";
  let endpoint = "http://localhost:3000/profile";

  onMount(async () => {
    // Retrieve username from local storage
    checkLogin();

    name = username;
    console.log(username);

    if (username) {
      try {
        const response = await axios.get(endpoint, {
          headers: {
            username: username,
          },
        });
        const { data } = response;
        email = data.email;
        address = data.address;
        zipcode = data.zipcode;
        phoneNumber = data.phoneNumber;
        bio = data.bio;

        // Initialize FullCalendar
        const calendarEl = document.getElementById("calendar");
        const calendar = new Calendar(calendarEl, {
          plugins: [interactionPlugin, dayGridPlugin],
          initialView: "dayGridMonth",
          selectable: true,
          dateClick: function (info) {
            alert("Clicked on: " + info.dateStr);
            // change the day's background color just for fun
            info.dayEl.style.backgroundColor = "red";
          },
          events: [
            // Add your events here
            // Example:
            // { title: 'Event 1', start: '2022-01-01' },
            // { title: 'Event 2', start: '2022-01-02' },
          ],
        });
        calendar.render();
      } catch (error) {
        console.error(error);
      }
    }
  });

  function checkLogin() {
    if (localStorage.getItem("isTeacher") === "true") {
      endpoint = "http://localhost:3000/teachProfile";
    }
    if (localStorage.getItem("loginstate") === "true") {
      username = localStorage.getItem("username");
    } else {
      window.location.href = "/";
    }
  }
</script>

<!------------------------------------------->
<div class="container">
  <div class="picture-column">
    <img
      src="https://picsum.photos/200/300"
      alt="Placeholder Image"
      aria-hidden="true"
    />
  </div>
  <div class="profile-container">
    <h1>Profile</h1>
    <div class="profile-info">
      <div class="profile-field">
        <label>Name:</label>
        <p>{name}</p>
      </div>
      <div class="profile-field">
        <label>Email:</label>
        <p>{email}</p>
      </div>
      <div class="profile-field">
        <label>Address:</label>
        <p>{address}, {zipcode}</p>
      </div>
      <div class="profile-field">
        <label>Phone Number:</label>
        <p>{phoneNumber}</p>
      </div>
      <div class="profile-field">
        <label>Bio:</label>
        <p>{bio}</p>
      </div>
    </div>
  </div>

  <div class="calendar-column">
    <div id="calendar"></div>
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  /* Add your custom styles here */
  .profile-container {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    font-family: "Arial", sans-serif;
    width: 80%;
    margin: 0 auto;
  }

  .profile-info {
    margin-top: 20px;
  }

  .profile-field {
    margin-bottom: 10px;
    justify-self: center;
    align-items: center;
  }

  label {
    font-weight: bold;
    color: #333;
  }

  p {
    margin: 0;
    color: #666;
  }

  .picture-column {
    flex: 1;
    /* Add your custom styles for the picture column here */
  }
  .picture-column img {
    width: 100%;
    min-width: 100px;
    height: auto;
  }

  .calendar-column {
    flex: 1;
    /* Add your custom styles for the calendar column here */
    width: 100%;
    margin-top: 20px;
    height: 100%;
  }
</style>
