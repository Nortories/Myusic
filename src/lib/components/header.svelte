<script>
  import Profile from "$lib/components/profileDropDown/profile.svelte";
  import logo from "$lib/assets/img/logo.png";
</script>

<header class="header">
  <img src={logo} alt="Logo" class="logo" style="width:100px;" />

  <!-- Using profile component for navigation -->

  <nav class="nav">
    <ul class="nav-list">
      <li><a href="/Home">Home</a></li>
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
    background-color: #e6e6fa;
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 0;
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
    nav-left: calc(100% - 10px);
  }
</style>
