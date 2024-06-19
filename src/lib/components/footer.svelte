<script>
    export let year = new Date().getFullYear();
    export let companyName = 'Myusic LLC';
</script>

<footer>
    <div class="testimonials">
        <!-- Testimonials content goes here -->
    </div>
    <p>&copy; {year} {companyName}. All rights reserved.</p>
</footer>

<style>
    footer {
        margin-top: 1em;
        width: 100vw;
        background-color: #f5f5f5;
        padding: 10px;
        text-align: center;
        bottom: 0;
    }

    p {
        font-size: 14px;
        color: #888;
        margin: 0;
    }

</style>