<script>
    import Search from '$lib/components/SearchCard/search.svelte';
    import cardHeroImg from '$lib/assets/img/placeholder1.webp';
</script>

<div class="card" style="background-image: url({cardHeroImg}); background-size: cover; background-repeat: no-repeat;">
    <!-- Your content here -->
     <div class="form"><Search /></div>
</div>

<style>
    .card {
        top: 60%;
        right: 50%;
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(10, 1fr);
        gap: 10px;
        align-content: center;
        justify-content: center;
        place-items: center;
        width: calc(80vw - 20px);
        height: calc(70vh - 20px);
        border: 1px solid #ccc;
        padding: 10px;
    }


    .form {
        grid-row: 3;
        grid-column: 5;
    }
</style>
