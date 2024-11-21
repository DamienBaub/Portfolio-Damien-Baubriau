document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      // Show success message
      const successMessage = document.getElementById('successMessage');
      if (successMessage) {
        successMessage.classList.remove('d-none');

        // Scroll to message
        successMessage.scrollIntoView({ behavior: 'smooth' });

        // Hide message after 5 seconds
        setTimeout(() => {
          successMessage.classList.add('d-none');
        }, 5000);
      }
    });
  }
});
