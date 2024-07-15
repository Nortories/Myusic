<script>
    let contacts = [
        {
            name: "Sarah Bearnson",
            email: "Sarah@MyusicTeaching.com",
            phone: "123-456-7890",
            socialMedia: {
                twitter: "https://twitter.com/johndoe",
                facebook: "https://facebook.com/johndoe",
                instagram: "https://instagram.com/johndoe"
            }
        },
        {
            name: "Jane Smith",
            email: "janesmith@MyusicTeaching.com",
            phone: "987-654-3210",
            socialMedia: {
                twitter: "https://twitter.com/janesmith",
                facebook: "https://facebook.com/janesmith",
                instagram: "https://instagram.com/janesmith"
            }
        },
        {
            name: "Bob Johnson",
            email: "bobjohnson@MyusicTeaching.com",
            phone: "555-555-5555",
            socialMedia: {
                twitter: "https://twitter.com/bobjohnson",
                facebook: "https://facebook.com/bobjohnson",
                instagram: "https://instagram.com/bobjohnson"
            }
        }
    ];
</script>


<h2>Contacts</h2>
<ul>
    {#each contacts as contact}
        <li class="contact-card">
            <h3>{contact.name}</h3>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <div class="social-media-icons">
                <a href={contact.socialMedia.twitter} target="_blank"><i class="fab fa-twitter">X</i></a>
                <a href={contact.socialMedia.facebook} target="_blank"><i class="fab fa-facebook">FaceBook</i></a>
                <a href={contact.socialMedia.instagram} target="_blank"><i class="fab fa-instagram">Instagram</i></a>
            </div>
        </li>
    {/each}
</ul>

<style>
    .contact-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .contact-card h3 {
        margin-top: 0;
    }

    .social-media-icons {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }

    .social-media-icons a {
        margin: 0 0.5rem;
        color: #333;
        font-size: 1.5rem;
    }
    
</style>
