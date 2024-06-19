<script>
  import Search from "$lib/components/SearchCard/searchForm.svelte";
  import cardHeroImg from "$lib/assets/img/musicbook.webp";
  import Cardtitle from "$lib/components/SearchCard/cardtitle.svelte";
</script>

<div
  class="card"
  style="background-image: url({cardHeroImg}); background-size: cover; background-repeat: no-repeat;"
>
  <div class="title"><Cardtitle /></div>
  <div class="form"><Search /></div>
</div>

<style>
  .card {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    align-content: center;
    justify-content: center;
    place-items: center;
    width: calc(80vw);
  }

  .title {
    grid-row: 1;
    grid-column: 1 / span 3;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    color: white;
    text-shadow: 2px 2px 4px #000000;
  }

  .form {
    width: 100%;
    grid-row: 2;
    grid-column: 1 / span 3;
    align-items: center;
    justify-content: center;
  }
</style>
