(function () {
    emailjs.init("2avoY-qmVBDKXT0c5"); // Your EmailJS API key
})();

// Handle the form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Send the email
    emailjs.sendForm("service_oxja8li", "template_u290nuf", this).then(
        function (response) {
            document.getElementById("status").innerHTML = "Your message has been sent successfully. We'll get back to you soon!";
        },
        function (error) {
            document.getElementById("status").innerHTML = "Failed to send message.";
        }
    );
});