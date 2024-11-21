// Form Submit Success Message

document.getElementById('contactForm').addEventListener('submit', function (e) {
  // Don't prevent form submission since we want FormSubmit to process it

  // Show success message
  const successMessage = document.getElementById('successMessage');
  successMessage.classList.remove('d-none');

  // Optionally scroll to the message
  successMessage.scrollIntoView({ behavior: 'smooth' });

  // Hide the message after 5 seconds
  setTimeout(() => {
    successMessage.classList.add('d-none');
  }, 5000);
});
