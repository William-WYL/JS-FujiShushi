/*
 * Handles the submit event of the form
 *
 * param e  A reference to the submit event
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e) {
  //	Hides all error elements on the page
  hideAllErrors();

  //	Determine if the form has errors
  if (formHasErrors()) {
    // 	Prevents the form from submitting
    e.preventDefault();
    return false;
  }

  return true;
}

/*
 * Handles the reset event for the form.
 *
 * param e A reference to the reset event
 * return  True allows the reset to happen; False prevents
 *         the browser from resetting the form.
 */
function resetForm(e) {
  // Confirm that the user wants to reset the form.
  if (confirm('Clear form?')) {
    // Ensure all error fields are hidden
    hideAllErrors();

    // Set focus to the first text field on the page
    document.getElementById("fname").focus();

    // When using onReset="resetForm()" in markup, returning true will allow
    // the form to reset
    return true;
  }

  // Prevents the form from resetting
  e.preventDefault();

  // When using onReset="resetForm()" in markup, returning false would prevent
  // the form from resetting
  return false;
}


/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors() {
  let errorFlag = false;

  // General required fields validation
  let requiredFields = ["fname", "lname", "phonenum", "email", "feedback"];
  for (let i = 0; i < requiredFields.length; i++) {
    let textField = document.getElementById(requiredFields[i]);
    if (!formFieldHasInput(textField)) {
      document.getElementById(requiredFields[i] + "_error").style.display = "block";

      if (!errorFlag) {
        textField.focus();
        textField.select();
      }

      errorFlag = true;
    }
  }

  // Phone umber validation
  let regexNum = /^\d{10}$/;
  let phoneNumValue = document.querySelector("#phonenum").value;
  if (document.querySelector("#phonenum").value && !regexNum.test(phoneNumValue)) {
    document.querySelector("#phonenum_error").style.display = "block";
    document.querySelector("#phonenum").focus();
    document.querySelector("#phonenum").select();

    errorFlag = true;
  }

  // Email address validation
  const userEmailValue = document.querySelector("#email").value;
  const regexEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  if (document.querySelector("#email").value && !regexEmail.test(userEmailValue)) {
    document.querySelector("#email_error").style.display = "block";
    document.querySelector("#email").focus();
    document.querySelector("#email").select();

    errorFlag = true;
  }

  return errorFlag;
}

/*
 * Resets (hides) all of the error messages on the page.
 */
function hideAllErrors() {
  let errorFields = document.getElementsByClassName("error");
  for (let i = 0; i < errorFields.length; i++) {
    errorFields[i].style.display = "none";
  }
}

/*
 * Determines if a text field element has input
 *
 * param   fieldElement A text field input element object
 * return  True if the field contains input; False if nothing entered
 */
function formFieldHasInput(fieldElement) {
  // Check if the text field has a value
  if (fieldElement.value == null || fieldElement.value.trim() == "") {
    // Invalid entry
    return false;
  }

  // Valid entry
  return true;
}

/**
 * Handles the load event of the document.
 */
function load() {
  // Add event listener for the form submit
  document.getElementById("contact_form").addEventListener("submit", validate);

  // Reset the form using the default browser reset
  // This is done to ensure the radio buttons are unchecked when the page is refreshed
  // This line of code must be done before attaching the event listener for the customer reset
  document.getElementById("contact_form").reset();

  // Add event listener for our custom form submit function
  document.getElementById("contact_form").addEventListener("reset", resetForm);
}

// Add the event listener for the document load
document.addEventListener("DOMContentLoaded", load);
