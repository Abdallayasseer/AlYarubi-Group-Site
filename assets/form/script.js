// Client-side validation
const form = document.getElementById("orderForm");

form.addEventListener("submit", function (e) {
  let valid = true;
  // Clear previous errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  // Full name
  const fullName = form.fullName.value.trim();
  if (fullName.length < 2) {
    document.getElementById("fullNameError").textContent =
      "Full name must be at least 2 characters.";
    valid = false;
  }

  // Phone number
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (!phoneRegex.test(form.phoneNumber.value.trim())) {
    document.getElementById("phoneError").textContent = "Invalid phone number.";
    valid = false;
  }

  // Email
  if (!form.email.validity.valid) {
    document.getElementById("emailError").textContent =
      "Invalid email address.";
    valid = false;
  }

  // Quantity validation
  const qty = form.quantity.value;
  if (qty < 1) {
    document.getElementById("quantityError").textContent =
      "Please enter at least 1.";
    valid = false;
  }

  // Product name
  const productName = form.productName.value.trim();
  if (productName.length < 2) {
    document.getElementById("productError").textContent =
      "Product name must be at least 2 characters.";
    valid = false;
  }

  if (!valid) {
    e.preventDefault();
  }
});
