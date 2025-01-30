// Initialize EmailJS

(function () {
  // Get these values from your EmailJS dashboard
  emailjs.init("hSnU3TYFiKaC6mSyLvi5H");
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

      // Show loading state
      submitButton.disabled = true;
      loadingSpinner.classList.remove('d-none');

      // Hide any existing messages
      successMessage.classList.add('d-none');
      errorMessage.classList.add('d-none');

      emailjs.send(
        "service_j158ra9", // Get from EmailJS
        "template_qx1uh0h", // Get from EmailJS
        {
          from_name: form.name.value,
          from_email: form.email.value,
          message: form.message.value
        }
      )
        .then(() => {
          successMessage.classList.remove('d-none');
          form.reset();
          setTimeout(() => {
            successMessage.classList.add('d-none');
          }, 5000);
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          errorMessage.classList.remove('d-none');
        })
        .finally(() => {
          submitButton.disabled = false;
          loadingSpinner.classList.add('d-none');
        });
    });
  }
});

// navbar

function collapseNavbar() {
  const navbarCollapse = document.getElementById('navbarNav');
  const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
    toggle: false
  });
  bsCollapse.hide(); // Hide the navbar
}
