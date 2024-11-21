document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault(); // Prevent default form submission

      try {
        // Get form data
        const formData = new FormData(form);

        // Submit form using fetch
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        // Show success message
        if (successMessage) {
          successMessage.classList.remove('d-none');
          successMessage.scrollIntoView({ behavior: 'smooth' });
        }

        // Reset form
        form.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
          successMessage.classList.add('d-none');
        }, 5000);

      } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
      }
    });
  }
});
