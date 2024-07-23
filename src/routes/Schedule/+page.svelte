<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import { Calendar } from "@fullcalendar/core";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";
  import timeGridPlugin from "@fullcalendar/timegrid";

  let calendar;
  let username = "";
  let events = [];
  let isTeacher = false;

  onMount(() => {
    checkLogin();

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
  });

  function checkLogin() {
    if (localStorage.getItem("loginstate") === "true") {
      username = localStorage.getItem("username");
    }
    if (localStorage.getItem("isTeacher") === "true") {
      isTeacher = true;
    }
    else{
      getUserSchedule();
    }
  }

  function handleTimeSlotSelect(info) {
    // Handle the selected time slot here
    console.log("Selected time slot:", info.start, info.end);
    const selectedSlot = calendar.getEventById("selectedSlot");
    if (selectedSlot) {
      selectedSlot.remove();
    }
    calendar.addEvent({
      id: "selectedSlot",
      start: info.start,
      end: info.end,
      backgroundColor: "green",
      display: "background",
    });
    // Save the added event to a JSON file
    const event = {
      id: "selectedSlot",
      start: info.start,
      end: info.end,
      backgroundColor: "green",
      display: "background",
    };
    console.log("Event:", event);
    // events = [event]; // Create an array of events
    // const json = JSON.stringify(events); // Convert events to JSON string
    // const blob = new Blob([json], { type: 'application/json' }); // Create a Blob object
    // const url = URL.createObjectURL(blob); // Create a URL for the Blob object
    // const link = document.createElement('a'); // Create a link element
    // link.href = url; // Set the link's href to the URL
    // link.download = 'events.json'; // Set the download attribute
    // link.click(); // Simulate a click on the link to trigger the download

    // Send the event to the /schedule endpoint using axios
    axios
      .put("http://localhost:3000/schedule", {
        registerUsername: username,
        schedule: event,
      })
      .then((response) => {
        console.log("Event sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending event:", error);
      });
    updatecalendar();
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
        // start: "2024-07-22T09:30:00.000",
        // end: "2024-07-22T15:00:00.000",
        // backgroundColor: "blue",
        // display: "background",
        id: events[i].id,
        start: events[i].start,
        end: events[i].end,
        backgroundColor: events[i].backgroundColor,
        display: events[i].display,
      });
    }

    calendar.render();
  }
  function getUserSchedule() {
    axios
      .get("http://localhost:3000/user/schedule", {
        headers: {
          registerUsername: username,
        },
      })
      .then((response) => {
        console.log("Events received:", response.data);
        events = response.data;
        const userScheduleEl = document.getElementById("userSchedule");
        userScheduleEl.innerHTML = ""; // Clear previous events
        events.forEach((event) => {
          const eventEl = document.createElement("div");
          eventEl.innerHTML = `
            <div class="event">
              <div class="event-info">
                <div class="event-label">Music Lesson</div>
                <div class="event-details">
                    <div class="event-time">Start: ${new Date(event.start).toLocaleString()}</div>
                </div>
              </div>
              <div class="event-review">
                <textarea class="review-input" placeholder="Leave a review"></textarea>
                <button class="review-submit">Submit</button>
              </div>
            </div>
          `;
          userScheduleEl.appendChild(eventEl);
        });
      })

      .catch((error) => {
        console.error("Error receiving events:", error);
      });
  }
</script>

  <div id="calendar"></div>
  <div id="userSchedule"></div>

<style>
  #calendar {
    width: 100%;
    height: 600px;
  }
  
</style>
