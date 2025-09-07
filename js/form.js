document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("enroll-form");
  const name = document.getElementById("name");
  const mobile = document.getElementById("mobile");
  const email = document.getElementById("email");
  const profile = document.getElementById("profile");

  const otpSection = document.getElementById("otp-section");
  const otpInput = document.getElementById("otp");
  const sendOtpBtn = document.getElementById("send-otp");
  const verifyOtpBtn = document.getElementById("verify-otp");
  const successMessage = document.getElementById("success-message");

  // Error containers
  const nameError = document.getElementById("name-error");
  const mobileError = document.getElementById("mobile-error");
  const emailError = document.getElementById("email-error");
  const profileError = document.getElementById("profile-error");
  const otpError = document.getElementById("otp-error");

  let generatedOTP = null;

  // Validate fields
  function validateForm() {
    let valid = true;
    nameError.textContent = "";
    mobileError.textContent = "";
    emailError.textContent = "";
    profileError.textContent = "";

    if (name.value.trim() === "") {
      nameError.textContent = "Please enter your full name.";
      valid = false;
    }
    if (!/^\d{10}$/.test(mobile.value)) {
      mobileError.textContent = "Enter a valid 10-digit mobile number.";
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      emailError.textContent = "Enter a valid email address.";
      valid = false;
    }
    if (profile.value === "") {
      profileError.textContent = "Please select your profile.";
      valid = false;
    }
    return valid;
  }

  // Hide all fields except OTP
  function hideFormFields() {
    name.closest(".mb-3").classList.add("d-none");
    mobile.closest(".mb-3").classList.add("d-none");
    email.closest(".mb-3").classList.add("d-none");
    profile.closest(".mb-3").classList.add("d-none");
  }

  // Show all fields back (reset)
  function showFormFields() {
    name.closest(".mb-3").classList.remove("d-none");
    mobile.closest(".mb-3").classList.remove("d-none");
    email.closest(".mb-3").classList.remove("d-none");
    profile.closest(".mb-3").classList.remove("d-none");
  }

  // Send OTP
  sendOtpBtn.addEventListener("click", function () {
    if (!validateForm()) return;

    // Generate demo OTP
    generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
    console.log("Generated OTP (demo):", generatedOTP); // check in console

    // Hide form fields
    hideFormFields();

    // Show OTP + Verify button
    otpSection.classList.remove("d-none");
    verifyOtpBtn.classList.remove("d-none");
    sendOtpBtn.classList.add("d-none");
  });

  // Verify OTP
  // Verify OTP
  verifyOtpBtn.addEventListener("click", function () {
    otpError.textContent = "";

    if (otpInput.value === generatedOTP) {
      successMessage.classList.remove("d-none");

      // ✅ Keep fields hidden, don't reset instantly
      otpSection.classList.add("d-none");
      verifyOtpBtn.classList.add("d-none");

      // Optional: small delay before reset, so user sees success
      setTimeout(() => {
        form.reset();
        showFormFields(); // bring back form fields for next user
        sendOtpBtn.classList.remove("d-none"); // allow new OTP request
        successMessage.classList.add("d-none"); // hide success after showing
      }, 3000); // 3s success display
    } else {
      otpError.textContent = "Invalid OTP. Please try again.";
    }
  });
});
