function validateForm() {
  // Clear previous error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("mobileError").textContent = "";
  document.getElementById("emailError").textContent = "";
  // Get form inputs
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  // Validate Name (Only alphabets and spaces allowed)
  if (!/^[A-Za-z\s]+$/.test(name)) {
    document.getElementById("nameError").textContent = "Invalid name format";
    return false;
  }
  // Validate Mobile Number (10 digits)
  if (!/^\d{10}$/.test(mobile)) {
    document.getElementById("mobileError").textContent = "Invalid mobile number";
    return false;
  }
  // Validate Email ID
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    return false;
  }
  // If all validations pass, show the welcome message
  document.getElementById("welcomeName").textContent = name;
  document.getElementById("welcomeAddress").textContent =
    document.getElementById("address").value;
  document.getElementById("welcomeCity").textContent =
    document.getElementById("city").value;
  document.getElementById("welcomeState").textContent =
    document.getElementById("state").value;
  document.getElementById("welcomeGender").textContent =
    document.querySelector('input[name="gender"]:checked').value;
  document.getElementById("welcomeMobile").textContent = mobile;
  document.getElementById("welcomeEmail").textContent = email;
  document.getElementById("studentForm").style.display = "none";
  document.getElementById("welcomeMessage").style.display = "block";
  return false;
}

