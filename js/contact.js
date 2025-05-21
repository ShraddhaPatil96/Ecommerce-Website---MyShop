// Contact form validation coming soon...

// Make sure jQuery is loaded
$(document).ready(function () {
    $('#contactForm').submit(function (e) {
      e.preventDefault(); // Prevent form from submitting normally
  
      // Grab field values
      let name = $('#name').val().trim();
      let email = $('#email').val().trim();
      let message = $('#message').val().trim();
      let isValid = true;
  
      // Reset messages
      $('.error').text('');
  
      // Validate Name
      if (name.length < 3) {
        $('#nameError').text('Name must be at least 3 characters');
        isValid = false;
      }
  
      // Validate Email
      if (!validateEmail(email)) {
        $('#emailError').text('Please enter a valid email address');
        isValid = false;
      }
  
      // Validate Message
      if (message.length < 10) {
        $('#messageError').text('Message must be at least 10 characters');
        isValid = false;
      }
  
      // If all good
      if (isValid) {
        alert('Thank you for contacting us! We will get back to you soon.');
        $('#contactForm')[0].reset();
      }
    });
  
    // Email format checker
    function validateEmail(email) {
      const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      return regex.test(email);
    }
  });
  