<script>
    import { onMount } from "svelte";
    import axios from "axios";
    import { Calendar } from "@fullcalendar/core";
    import dayGridPlugin from "@fullcalendar/daygrid";
    import interactionPlugin from "@fullcalendar/interaction"
  
    let name = "";
    let username = ""
    let email = "";
    let address = "";
    let zipcode = "";
    let phoneNumber = "";
    let bio = "";
    let loginMessage = "";
    let searchName = "";
  
    
    onMount(async () => {
      // Retrieve username from local storage
      checkLogin();
      name = searchName;
      
      console.log("searchName " + searchName);
  
      if (username) {
        try {
          const response = await axios.get("http://localhost:3000/teachProfile", {
            headers: {
              username: searchName,
            },
          });
          const { data } = response;
          email = data.email;
          address = data.address;
          zipcode = data.zipcode;
          phoneNumber = data.phoneNumber;
          bio = data.bio;
  
          const calendarEl = document.getElementById("calendar");
    calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: "timeGridWeek",
      selectable: true,
      select: handleTimeSlotSelect,
      events: [{}],
    });
    updatecalendar();
    calendar.render();

    name = username;
    console.log(username);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    });

  function handleTimeSlotSelect(info) {
    console.log("Selected!!!! time slot:", info.start, info.end);
    const selectedSlot = calendar.getEventById("selectedSlot");
    if (selectedSlot) {
      selectedSlot.remove();
    }
    const event = {
      id: "selectedSlot",
      start: info.start,
      end: info.end,
      backgroundColor: "green",
      display: "background",
    };
    console.log("Eventing:", event);

    axios
      .delete("http://localhost:3000/schedule", {
        headers: {
          registerUsername: username,
          scheduleToCheck: event,
        },
      })
      .then((response) => {
        alert(" Reserved 1 slot for " + username);
        console.log("Event deleted successfully:", response.data);
      })
      .catch((error) => {
        alert( " Reserved for " + username);
        console.error("Error deleting event:", error);
      });

      axios
      .put("http://localhost:3000/user/schedule", {
        registerUsername: username,
        schedule: event,
      })

    // console.log("event 0", (events[0].start));
    // console.log("dateClick ", (info.dateStr));

    // const eventDate = new Date(info.dateStr);
    // const eventTime = eventDate.toLocaleTimeString();
    // console.log("Event Time:", eventTime);

    // if (events.some(event => event.start === info.dateStr)) {
    //   // Perform some action
    //   const date = new Date(info.dateStr);
    //   alert(formattedDate+" Reserved for " + username);
    // }
    // change the day's background color just for fun
  }

  async function updatecalendar() {
    console.log("username:", username);
    await axios
      .get("http://localhost:3000/getSchedule", {
        headers: {
          registerUsername: username,
        },
      })
      .then((response) => {
        console.log("Events received:", response.data);
        events = response.data;
      })
      .catch((error) => {
        console.error("Error receiving events:", error);
      });
    calendar.removeAllEvents();

    let i = 0;
    for (i in events) {
      calendar.addEvent({
        id: events[i].id,
        start: events[i].start,
        end: events[i].end,
        backgroundColor: events[i].backgroundColor,
        display: events[i].display,
      });
    }
  }

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
        src="https://i.pravatar.cc/200/300"
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
  