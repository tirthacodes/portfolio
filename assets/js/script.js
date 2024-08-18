function sendMail() {
    let emailInput = document.getElementById("name");

    // Ensure the email input is not empty
    if (!emailInput.value) {
        alert("Please enter an email address.");
        return false; // Prevent form submission
    }

    // Parameters for the emailjs.send method
    let params = {
        email: emailInput.value,
    };

    // Send the email using emailjs
    emailjs.send("service_zg67jrw", "template_5vpjbnf", params)
        .then(function(response) {
            console.log('Success:', response);
            document.querySelector('.sent-message').style.display = 'block';
            document.querySelector('.error-message').style.display = 'none';
            
            // Clear the input field
            emailInput.value = '';
        }, function(error) {
            console.log('Error:', error);
            document.querySelector('.sent-message').style.display = 'none';
            document.querySelector('.error-message').style.display = 'block';
            alert("Failed to send email.");
        });

    return false; // Prevent default form submission
}






function sendMessage() {
    // Gather form data
    let formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value
    };

    // Send the email using EmailJS
    emailjs.send("service_zg67jrw", "template_m7z1ghg", formData)
        .then(function(response) {
            console.log('Success:', response);
            // Show the success message
            document.querySelector('#contactForm .sent-message').style.display = 'block';

            // Clear the form fields manually
            document.getElementById('contactName').value = '';
            document.getElementById('contactEmail').value = '';
            document.getElementById('contactSubject').value = '';
            document.getElementById('contactMessage').value = '';

            // Prevent default form submission
            return false;
        }, function(error) {
            console.log('Error:', error);
            // Show the error message
            document.querySelector('#contactForm .sent-message').style.display = 'none';
            document.querySelector('#contactForm .error-message').style.display = 'block';

            // Prevent default form submission
            return false;
        });

    // Prevent form from submitting the traditional way
    return false;
}
