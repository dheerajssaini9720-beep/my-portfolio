const form = document.querySelector('.contact-form');
const message = document.querySelector(".contact-form textarea");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_og8j3ab",
        "template_2tlmz1d",
        this
    )
    .then(() => {
        alert("Your message has been sent successfully!");
        form.reset();
    })
    .catch((error)=>{
        console.error(" Emailjs error:", error);
        alert("Failed to send message. Please try again.");
    });

});