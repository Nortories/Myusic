<script>
  import SearchCard from "$lib/components/SearchCard/searchCard.svelte";

  import piano2 from "$lib/assets/img/pianopractice2.jpg";
  import piano1 from "$lib/assets/img/pianopractice2.webp";
</script>
<div class="search-card">
  <SearchCard />
</div>
<div class="container">
  <div class="left-column" style="background-image: url({piano1});">
    <!-- Content for the left column -->
  </div>
  <div class="right-column" style="background-image: url({piano2});">
    <!-- Content for the right column -->
  </div>
</div>
<div class="info-container">
  <!-- Content for the info container -->
   <div class="info-container2">
  <div>
    <h1>&#x263A Wide Instrument Selection</h1>
    <p>Choose from a wide selection of instruments to learn</p>
  </div>
  <div>
    <h1>&#10032 Personalized Private Instruction</h1>
    <p>Experience the benefits of personalized private instruction and take your skills to the next level</p>
  </div>
  <div>
    <h1>&#127760 Convenient In-Home Classes</h1>
    <p>Enjoy the convenience of in-home classes and learn in the comfort of your own home</p>
  </div>
  <div>
    <h1>&#9889 Quality and Assurance</h1>
    <p>Experience high-quality instruction and assurance from our experienced instructors</p>    
  </div>
</div>
</div>
<style>
.container {
  display: flex;
  height: 100vh;
}

.left-column,
.right-column {
  flex: 1;
  background-image: url(path/to/your/image.jpg);
  background-size: cover;
  background-position: center;
}
.search-card {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.info-container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.info-container2{
  grid-column: 2/6 span;
  grid-row: 1/2 span;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem;
  margin: 20px;
}
h1, p{
  text-align: center;
}
p {
  font-family: 'Comic Sans MS', cursive;
  margin-left: 20%;
  margin-right: 20%;
}
</style>