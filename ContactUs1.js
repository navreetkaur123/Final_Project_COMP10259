const form = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const date = document.getElementById("date");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (firstName.value.length < 5) {
    alert("Please lengthen this text to 5 characters or more.");
    firstName.focus();
    return false;
  }

  if (lastName.value.length < 5) {
    alert("Please lengthen this text to 5 characters or more.");
    lastName.focus();
    return false;
  }

  if (!email.value.includes("@")) {
    alert("Email should contain the domain name (with '@').");
    email.focus();
    return false;
  }

  if (!date.value.match(/^\d{2}\/\d{2}\/\d{2}$/)) {
    alert("Date must have the appropriate format (yyyy-mm--dd).");
    date.focus();
    return false;
  }

  if (!phone.value.match(/^\d{10}$/)) {
    alert("Phone must contain 10 digits.");
    phone.focus();
    return false;
  }

  if (message.value.length < 50) {
    alert("Message must be of at least 50 alphabets.");
    message.focus();
    return false;
  }

  // If all validations are passed, submit the form to Formspree
  form.submit();
});







