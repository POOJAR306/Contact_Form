// Select form and input fields
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMsg = document.getElementById('successMsg');

// Email regex pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form submit event
form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent actual submission
    let valid = true;

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMsg.textContent = '';

    // Validate name
    if(nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        valid = false;
    }

    // Validate email
    if(emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        valid = false;
    } else if(!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Enter a valid email';
        valid = false;
    }

    // Validate message
    if(messageInput.value.trim() === '') {
        messageError.textContent = 'Message is required';
        valid = false;
    }

    // If all valid
    if(valid) {
        successMsg.textContent = 'Form submitted successfully!';
        form.reset(); // Clear form inputs
    }
});
