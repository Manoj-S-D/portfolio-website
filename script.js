   // A JAVASCRIPT WHICH MAKES THE ANIMATION IN THE HOME SECTION  -->

var typed = new Typed('#element', {
    strings: ['photographer', 'designer', 'artist'],
    typeSpeed: 50,
});



document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Perform basic client-side validation
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        // You can add more validation here, such as email format validation.

        // Create a data object to send to the server
        const formData = {
            name,
            email,
            message
        };

        // Send the form data to the server using fetch
        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Server successfully sent the email
                alert('Form submitted successfully.');
            } else {
                // Handle server errors or email sending failures
                alert('Form submission failed. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        });

        // Reset the form
        contactForm.reset();
    });
});


