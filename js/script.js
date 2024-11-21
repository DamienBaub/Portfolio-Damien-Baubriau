// EmailJS with your public key
(function () {
  emailjs.init("LTOiQKuqMMtlg8pL8"); // Replace with your public key
})();

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');
  const submitButton = document.getElementById('submitButton');
  const loadingSpinner = document.getElementById('loadingSpinner');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Show loading spinner
      submitButton.disabled = true;
      loadingSpinner.classList.remove('d-none');

      // Hide any existing messages
      successMessage.classList.add('d-none');
      errorMessage.classList.add('d-none');

      // Prepare template parameters
      const templateParams = {
        from_name: form.name.value,
        from_email: form.email.value,
        message: form.message.value
      };

      // Send email using EmailJS
      emailjs.send(
        'service_7j4th5c', // Replace with your EmailJS service ID
        'template_qx1uh0h', // Replace with your EmailJS template ID
        templateParams
      )
        .then(function () {
          // Show success message
          successMessage.classList.remove('d-none');
          form.reset();

          // Hide success message after 5 seconds
          setTimeout(() => {
            successMessage.classList.add('d-none');
          }, 5000);
        })
        .catch(function (error) {
          // Show error message
          errorMessage.classList.remove('d-none');
          console.error('EmailJS Error:', error);
        })
        .finally(function () {
          // Hide loading spinner and re-enable button
          submitButton.disabled = false;
          loadingSpinner.classList.add('d-none');
        });
    });
  }
});
