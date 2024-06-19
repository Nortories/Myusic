<script>
    export let errorCode = 404;
</script>

<div class="container">
    <div class="message">Error <span>{errorCode}</span> - content not found</div>
    <div class="title">Opps! Well this is embarrassing</div>
    <div class="emoji">😅</div>
    <button class="button" on:click={() => window.location.href = '/'}>Go back to homepage</button>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
    }

    .title {
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .message {
        font-size: 24px;
        margin-bottom: 40px;
    }

    .emoji {
        font-size: 100px;
        margin-bottom: 20px;
    }

    .button {
        padding: 10px 20px;
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        background-color: #ff4081;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .button:hover {
        background-color: #ff80ab;
    }
</style>