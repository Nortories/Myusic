<!-- 
Drop down menu with user profile data
This is a placeholder user profile data needs to be injected from google OAuth 
Drop down menu works on click event
links are not functional
-->

<script>
  import NavigationLinks from "./navigationLinks.svelte";

  let menuVisible = false;

  function menuToggle() {
    console.log("clicked");
    menuVisible = !menuVisible;
    const menu = document.querySelector(".menu");
    if (menuVisible) {
      menu.style.visibility = "visible";
      
    } else {
      menu.style.visibility = "hidden";
    }
  }
</script>

<div class="container">
  <button class="profile" on:click={menuToggle} aria-label="Toggle Menu">
    <img
      src="https://i.pinimg.com/736x/d1/4a/1a/d14a1aab16c42f083b303d5117b37d45.jpg"
      alt=""
    />
  </button>

  <div class="menu" style="visibility: hidden;" class:active={menuVisible}>
    <h3>
      User Name
      <br />
      <span>Student/Teacher</span>
    </h3>
    <NavigationLinks/>
  </div>
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
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 0px 0px 0px;
  }

  .menu {
    position: absolute;
    margin: 10px;
    padding-left: 10px;
    border-radius: 6px;
    padding: 20px;
    width: 200px;
    box-shadow: -1px 0px 11px -5px #a3a3a3;
    background: whitesmoke;
    transition: 0.3s ease;
    opacity: 0;
    top: 120px;
    left: calc(100% - 275px);
  }

  .active {
    transform: scale(1.025);
    visibility: hidden;
    opacity: 1;
  }

  h3 {
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3em;
    color: #555;
  }

  span {
    font-size: 14px;
    color: #cecece;
  }

  button {
    color: #558;
    background: none;
    border: none;
    border-radius: 40px;
    padding: 0;
    transition: 0.5s;
  }

  button:hover {
    background-color: #000000;
    border-radius: 90px;
    padding: .25em;
  }
</style>
