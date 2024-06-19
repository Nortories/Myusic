<script>
  import Profile from "$lib/components/profileDropDown/profile.svelte";
  import logo from "$lib/assets/img/logo.png";
</script>

<header class="header">
  <img src={logo} alt="Logo" class="logo" style="width:120px;" />

  <!-- Using profile component for navigation -->

  <nav class="nav">
    <ul class="nav-list">
      <li><a href="/">Home</a></li>
      <li><a href="/Profile">Profile</a></li>
      <li><a href="/Schedule">Schedule</a></li>
      <li><a href="/contacts">Contacts</a></li>
    </ul>
  </nav>

  <div class="profile-icon">
    <!-- Add your profile icon here -->
    <Profile />
  </div>
</header>

<style>
  /* Add your styles here */
.header {
    background-color: #f0e1f5;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 0;
    border-top: 5px solid rgb(149, 91, 155);
}
  .nav {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .nav-list {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .nav-list li {
    margin: 0 10px;
  }

.profile-icon {
    margin-left: auto;
}
ul li {
    margin-top: 5px;
    font-weight: 500;
    padding: .75em;
    list-style: none;
    text-decoration: none;
    border: none;
  }
  ul{
    padding: 0;
  }
  a {
    text-decoration: none;
    font-size: 16px;
    color: #558;
    transition: 0.5s;
  }
  a:hover {
    background-color: #dbd2d2;
    color: rgb(59, 57, 57);
    border-radius: 15px;
    padding: 1em;
  }
</style>
