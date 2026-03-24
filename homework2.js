/* 
 Name: Cinque Preston
 File: homework2.js
 Date Created: 2026-03-15
 Date Updated: 2026-03-24
 Purpose: Redisplay/validate data from a form
*/

/*
   DISPLAY TABLE
*/
function getdata1() {
  var formcontents = document.getElementById("register");
  var formoutput = "<table class='output'><tr><th>Field Name</th><th>Type</th><th>Value</th></tr>";
  var datatype;
  var i;

  for (i = 0; i < formcontents.elements.length; i++) {
    datatype = formcontents.elements[i].type;

    switch (datatype) {
      case "checkbox":
        if (formcontents.elements[i].checked) {
          formoutput = formoutput + "<tr><td align='right'>" + formcontents.elements[i].name + "</td>";
          formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
          formoutput = formoutput + "<td class='outputdata'>Checked</td></tr>";
        }
        break;
      case "radio":
        if (formcontents.elements[i].checked) {
          formoutput = formoutput + "<tr><td align='right'>" + formcontents.elements[i].name + "</td>";
          formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
          formoutput = formoutput + "<td class='outputdata'>" + formcontents.elements[i].value + "</td></tr>";
        }
        break;
      case "button": case "submit": case "reset":
        break;
      case "password":
        if (formcontents.elements[i].value !== "") {
          formoutput = formoutput + "<tr><td align='right'>" + formcontents.elements[i].name + "</td>";
          formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
          formoutput = formoutput + "<td class='outputdata'>••••••••</td></tr>";
        }
        break;
      default:
        if (formcontents.elements[i].value !== "") {
          formoutput = formoutput + "<tr><td align='right'>" + formcontents.elements[i].name + "</td>";
          formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
          formoutput = formoutput + "<td class='outputdata'>" + formcontents.elements[i].value + "</td></tr>";
        }
    }
  }

  formoutput = formoutput + "</table>";
  document.getElementById("outputformdata").innerHTML = formoutput;
}

function removedata1() {
  document.getElementById("outputformdata").innerHTML = "";
}

/*
   FIRST NAME
   1-30 chars, letters/apostrophes/dashes only
*/
function checkfirstname() {
  x = document.getElementById("firstname").value;
  if (x.length < 1 || x.length > 30) {
    document.getElementById("name_message").innerHTML = "First name must be 1-30 characters.";
    error_flag = "1";
  } else {
    if (x.match(/^[a-zA-Z'-]+$/)) {
      document.getElementById("name_message").innerHTML = "";
    } else {
      document.getElementById("name_message").innerHTML = "First name: letters, apostrophes, and dashes only.";
      error_flag = "1";
    }
  }
}

/*
   MIDDLE INITIAL
   Optional, 1 letter only
*/
function checkmiddle() {
  x = document.getElementById("middleinit").value;
  if (x.length === 0) {
    document.getElementById("name_message").innerHTML = "";
  } else {
    if (x.match(/^[a-zA-Z]$/)) {
      document.getElementById("name_message").innerHTML = "";
    } else {
      document.getElementById("name_message").innerHTML = "Middle initial: one letter only, no numbers or symbols.";
      error_flag = "1";
    }
  }
}

/*
   LAST NAME
   1-30 chars, letters/apostrophes/dashes/numbers 2-5
*/
function checklastname() {
  x = document.getElementById("lastname").value;
  if (x.length < 1 || x.length > 30) {
    document.getElementById("lastname_message").innerHTML = "Last name must be 1-30 characters.";
    error_flag = "1";
  } else {
    if (x.match(/^[a-zA-Z2-5'-]+$/)) {
      document.getElementById("lastname_message").innerHTML = "";
    } else {
      document.getElementById("lastname_message").innerHTML = "Last name: letters, apostrophes, dashes, and numbers 2-5 only.";
      error_flag = "1";
    }
  }
}

/*
   DATE OF BIRTH
   Must not be in the future, must not be > 120 years ago
*/
function checkDOB() {
  var val = document.getElementById("DOB").value;
  if (!val) {
    document.getElementById("dob_message").innerHTML = "Date of Birth is required.";
    error_flag = "1";
  } else {
    var dob = new Date(val);
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 120);

    if (dob > today) {
      document.getElementById("dob_message").innerHTML = "Date of Birth cannot be in the future.";
      error_flag = "1";
    } else {
      if (dob < minDate) {
        document.getElementById("dob_message").innerHTML = "Date of Birth cannot be more than 120 years ago.";
        error_flag = "1";
      } else {
        document.getElementById("dob_message").innerHTML = "";
      }
    }
  }
}

/*
   EMAIL
   Must match name@domain.tld format (optional field)
*/
function checkemail() {
  x = document.getElementById("email1").value;
  if (x.length === 0) {
    document.getElementById("Email_Text").innerHTML = "";
  } else {
    if (x.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      document.getElementById("Email_Text").innerHTML = "";
    } else {
      document.getElementById("Email_Text").innerHTML = "Enter a valid email: name@domain.tld";
      error_flag = "1";
    }
  }
}

/*
   PHONE
   Optional. Format: 000-000-0000
*/
function checkphone() {
  x = document.getElementById("phone").value;
  if (x.length === 0) {
    document.getElementById("phone_text").innerHTML = "";
  } else {
    if (x.match(/^\d{3}-\d{3}-\d{4}$/)) {
      document.getElementById("phone_text").innerHTML = "";
    } else {
      document.getElementById("phone_text").innerHTML = "Phone must be in format 000-000-0000.";
      error_flag = "1";
    }
  }
}

/*
   ADDRESS LINE 1
   Required, 2-30 characters
*/
function checkaddr1() {
  x = document.getElementById("addr1").value;
  if (x.length < 2 || x.length > 30) {
    document.getElementById("addr1_text").innerHTML = "Address Line 1 must be 2-30 characters.";
    error_flag = "1";
  } else {
    document.getElementById("addr1_text").innerHTML = "";
  }
}

/*
   ADDRESS LINE 2
   Optional. If entered, same rules as addr1
*/
function checkaddr2() {
  x = document.getElementById("addr2").value;
  if (x.length === 0) {
    document.getElementById("addr2_text").innerHTML = "";
  } else {
    if (x.length < 2 || x.length > 30) {
      document.getElementById("addr2_text").innerHTML = "Address Line 2 must be 2-30 characters if entered.";
      error_flag = "1";
    } else {
      document.getElementById("addr2_text").innerHTML = "";
    }
  }
}

/*
   CITY
   Required, 2-30 characters
*/
function checkcity() {
  x = document.getElementById("city").value;
  if (x.length < 2 || x.length > 30) {
    document.getElementById("City_text").innerHTML = "City must be 2-30 characters.";
    error_flag = "1";
  } else {
    document.getElementById("City_text").innerHTML = "";
  }
}

/*
   STATE
   Must select a value
*/
function checkstate() {
  z = document.getElementById("state").value;
  if (z === "") {
    document.getElementById("State_text").innerHTML = "Please choose a state.";
    error_flag = "1";
  } else {
    document.getElementById("State_text").innerHTML = "";
  }
}

/*
   ZIP CODE
   Required. 5 digits, or zip+4 (00000-0000).
   Truncates to 5 digits and redisplays.
*/
function checkzip() {
  x = document.getElementById("zip").value;
  if (x.match(/^\d{5}(-\d{4})?$/)) {
    document.getElementById("zip").value = x.substring(0, 5);
    document.getElementById("zip_text").innerHTML = "";
  } else {
    document.getElementById("zip_text").innerHTML = "Zip must be 5 digits (or zip+4: 00000-0000).";
    error_flag = "1";
  }
}

/*
   USERNAME
   5-30 chars, letters/numbers/underscore/dash,
   first char must NOT be a number, no spaces,
   converted to lowercase on submit
*/
function checkuser() {
  x = document.getElementById("user").value;
  if (x.length < 5 || x.length > 30) {
    document.getElementById("user_text").innerHTML = "Username must be 5-30 characters.";
    error_flag = "1";
  } else {
    if (x.match(/\s/)) {
      document.getElementById("user_text").innerHTML = "Username cannot contain spaces.";
      error_flag = "1";
    } else {
      if (x.match(/^\d/)) {
        document.getElementById("user_text").innerHTML = "Username cannot start with a number.";
        error_flag = "1";
      } else {
        if (x.match(/^[a-zA-Z][a-zA-Z0-9_-]*$/)) {
          document.getElementById("user").value = x.toLowerCase();
          document.getElementById("user_text").innerHTML = "";
        } else {
          document.getElementById("user_text").innerHTML = "Username: letters, numbers, underscores, and dashes only.";
          error_flag = "1";
        }
      }
    }
  }
}

/*
   PASSWORD
   8-30 chars, >=1 upper, >=1 lower, >=1 digit,
   >=1 special char, no double-quotes,
   cannot contain username or name parts
*/
function passwordentry() {
  var pass = document.getElementById("pass").value;
  var username = document.getElementById("user").value.toLowerCase();
  var firstname = document.getElementById("firstname").value.toLowerCase();
  var lastname = document.getElementById("lastname").value.toLowerCase();

  // Length
  if (pass.length < 8 || pass.length > 30) {
    document.getElementById("pass_text").innerHTML = "Password must be 8-30 characters.";
    error_flag = "1";
  } else {
    document.getElementById("pass_text").innerHTML = "";
  }

  // Lowercase
  if (pass.search(/[a-z]/) < 0) {
    document.getElementById("pass_text2").innerHTML = "Need at least 1 lowercase letter.";
    error_flag = "1";
  } else {
    document.getElementById("pass_text2").innerHTML = "";
  }

  // Uppercase
  if (pass.search(/[A-Z]/) < 0) {
    document.getElementById("pass_text3").innerHTML = "Need at least 1 uppercase letter.";
    error_flag = "1";
  } else {
    document.getElementById("pass_text3").innerHTML = "";
  }

  // Number
  if (pass.search(/[0-9]/) < 0) {
    document.getElementById("pass_text4").innerHTML = "Need at least 1 number.";
    error_flag = "1";
  } else {
    document.getElementById("pass_text4").innerHTML = "";
  }

  // Special character
  if (pass.search(/[!@#%^&*()\-_+=\\\/><.,`~]/) < 0) {
    document.getElementById("pass_text5").innerHTML = "Need at least 1 special character: !@#%^&*()-_+=\\/><.,`~";
    error_flag = "1";
  } else {
    document.getElementById("pass_text5").innerHTML = "";
  }

  // No double-quotes
  if (pass.indexOf('"') >= 0) {
    document.getElementById("pass_text6").innerHTML = "Password cannot contain double-quote (\") characters.";
    error_flag = "1";
  } else {
    document.getElementById("pass_text6").innerHTML = "";
  }

  // Cannot contain username
  if (username.length >= 3 && pass.toLowerCase().indexOf(username) >= 0) {
    document.getElementById("pass_text7").innerHTML = "Password cannot contain your username.";
    error_flag = "1";
  } else {
    document.getElementById("pass_text7").innerHTML = "";
  }

  // Cannot contain first name
  if (firstname.length >= 3 && pass.toLowerCase().indexOf(firstname) >= 0) {
    document.getElementById("pass_text8").innerHTML = "Password cannot contain your first name.";
    error_flag = "1";
  } else {
    document.getElementById("pass_text8").innerHTML = "";
  }

  // Cannot contain last name
  if (lastname.length >= 3 && pass.toLowerCase().indexOf(lastname) >= 0) {
    document.getElementById("pass_text9").innerHTML = "Password cannot contain your last name.";
    error_flag = "1";
  } else {
    document.getElementById("pass_text9").innerHTML = "";
  }
}

/*
   CONFIRM PASSWORD
   Must match password field
*/
function checkpassword2() {
  x = document.getElementById("pass").value;
  y = document.getElementById("confirmPass").value;
  if (x === y) {
    document.getElementById("confirmPass_text").innerHTML = "Passwords match!";
  } else {
    document.getElementById("confirmPass_text").innerHTML = "Passwords do not match.";
    error_flag = "1";
  }
}

/*
   CHECK ALL — called by Check Input button
*/
function checkform() {
  error_flag = "0";

  checkfirstname();
  checkmiddle();
  checklastname();
  checkDOB();
  checkemail();
  checkphone();
  checkaddr1();
  checkaddr2();
  checkcity();
  checkstate();
  checkzip();
  checkuser();
  passwordentry();
  checkpassword2();

  if (error_flag === "1") {
    alert("Please fix the indicated errors before submitting.");
  } else {
    document.getElementById("submit").disabled = false;
    alert("All fields are valid! You may now submit.");
  }
}

function checkCookie() {
  // placeholder
}
