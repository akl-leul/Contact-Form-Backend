(function () {
    emailjs.init("2avoY-qmVBDKXTOc5"); // Your EmailJS API key
  })();

  // Handle the form submission
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Send the email
    emailjs.sendForm("service_oxja8li", "_ejs-test-maill-service_", this).then(
      function (response) {
        document.getElementById("status").innerHTML = "Message sent successfully!";
      },
      function (error) {
        document.getElementById("status").innerHTML = "Failed to send message.";
      }
    );
    emailjs.sendForm()
  });