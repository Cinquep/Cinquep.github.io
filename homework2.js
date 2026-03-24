/* 
 Name: Cinque Preston
 File: homework2.js
 Date Created: 2026-03-15
 Date Updated: 2026-03-24
 Purpose: Redisplay/validate data from a form
*/

function setup() {
  checkCookie();
  getdata1();
}

function getdata1() {
  var formcontents = document.getElementById("register"); 
  var formoutput;
  var datatype;
  var i;

  formoutput = "<table class='output'><tr><th>Field Name</th><th>Type</th><th>Value</th></tr>";

  for (i = 0; i < formcontents.elements.length; i++) {
    var el = formcontents.elements[i];
    datatype = el.type;

    switch (datatype) {
      case "checkbox":
        if (el.checked) {
          formoutput += "<tr><td align='right'>" + el.name + "</td>";
          formoutput += "<td align='right'>" + datatype + "</td>";
          formoutput += "<td class='outputdata'>Checked</td></tr>";
        }
        break;
      case "radio":
        if (el.checked) {
          formoutput += "<tr><td align='right'>" + el.name + "</td>";
          formoutput += "<td align='right'>" + datatype + "</td>";
          formoutput += "<td class='outputdata'>" + el.value + "</td></tr>";
        }
        break;
      case "button": case "submit": case "reset":
        // skip buttons
        break;
      case "password":
        if (el.value != "") {
          formoutput += "<tr><td align='right'>" + el.name + "</td>";
          formoutput += "<td align='right'>" + datatype + "</td>";
          formoutput += "<td class='outputdata'>••••••••</td></tr>";
        }
        break;
      default:
        if (el.value != "") {
          formoutput += "<tr><td align='right'>" + el.name + "</td>";
          formoutput += "<td align='right'>" + datatype + "</td>";
          formoutput += "<td class='outputdata'>" + el.value + "</td></tr>";
        }
    }
  }

  formoutput += "</table>";
  document.getElementById("outputformdata").innerHTML = formoutput;
}

function removedata1() {
  document.getElementById("outputformdata").innerHTML = "";
}

function checkfirstname() {
  var x = document.getElementById("firstname").value;
  if (x.length < 2) {
    document.getElementById("name_message").innerHTML = "Invalid name... too short.";
    error_flag = 1;
  } else {
    if (x.match(/^[a-zA-Z'-]+$/)) {
      document.getElementById("name_message").innerHTML = "";
    } else {
      document.getElementById("name_message").innerHTML = "Invalid characters in name.";
      error_flag = 1;
    }
  }
}

function checkmiddle() {
  var x = document.getElementById("middleinit").value;
  if (x.length > 0) {
    if (x.match(/[a-zA-Z]/)) {
      document.getElementById("name_message").innerHTML = "";
    } else {
      document.getElementById("name_message").innerHTML = "Invalid characters in middle initial.";
      error_flag = 1;
    }
  }
}

function checklastname() {
  var x = document.getElementById("lastname").value;
  if (x.length < 2) {
    document.getElementById("name_message").innerHTML = "Invalid name... too short.";
    error_flag = 1;
  } else {
    if (x.match(/^[a-zA-Z'-]+$/)) {
      document.getElementById("name_message").innerHTML = "";
    } else {
      document.getElementById("name_message").innerHTML = "Invalid characters in name.";
      error_flag = 1;
    }
  }
}

function passwordentry() {
  var passwordoutput = "";
  var passwordinput = document.getElementById("pass").value; 

  if (passwordinput.search(/[a-z]/) < 0) {
    passwordoutput += "Need at least 1 lowercase letter. ";
    error_flag = 1;
  }
  if (passwordinput.search(/[A-Z]/) < 0) {
    passwordoutput += "Need at least 1 uppercase letter. ";
    error_flag = 1;
  }
  if (passwordinput.search(/[0-9]/) < 0) {
    passwordoutput += "Need at least 1 number. ";
    error_flag = 1;
  }

  document.getElementById("pass_text").innerHTML = passwordoutput;
}

function checkpassword2() {
  var x = document.getElementById("pass").value;        
  var y = document.getElementById("confirmPass").value; 
  if (x == y) {
    document.getElementById("confirmPass_text").innerHTML = "Passwords match!";
  } else {
    document.getElementById("confirmPass_text").innerHTML = "Passwords DO NOT match!";
    error_flag = 1;
  }
}

function checkaddr1() {
  var x = document.getElementById("addr1").value;
  if (x.length < 2) {
    document.getElementById("addr1_text").innerHTML = "Enter something on address line"; 
    error_flag = 1;
  } else {
    document.getElementById("addr1_text").innerHTML = "";
  }
}

function checkaddr2() {}

function checkcity() {
  if (document.getElementById("city").value.match(/^[ a-zA-Z'-]+$/)) {
    document.getElementById("City_text").innerHTML = "";
  } else {
    document.getElementById("City_text").innerHTML = "Invalid characters in City name.";
    error_flag = 1;
  }
}

function checkstate() {
  var z = document.getElementById("state").value;
  if (z == "") {
    document.getElementById("State_text").innerHTML = "Please choose a state";
    error_flag = 1;
  } else {
    document.getElementById("State_text").innerHTML = "";
  }
}

function checkform() {
  error_flag = "0";
  checkfirstname();
  checkmiddle();
  checklastname();
  checkaddr1();
  checkaddr2();
  checkcity();
  checkstate();
  passwordentry();
  checkpassword2();

  if (error_flag == "1") {
    alert("Please fix the indicated errors!");
  } else {
    document.getElementById("submit").disabled = false;
  }
}

function checkCookie() {
  // placeholder
}
/* 
 Name: Cinque Preston
 File: homework2.js
 Date Created: 2026-03-15
 Date Updated: 2026-03-24
 Purpose: Redisplay/validate data from a form
*/

var error_flag = "0";

/* ─── Helper: set or clear a message span ─── */
function setMsg(id, msg) {
  var el = document.getElementById(id);
  if (el) el.innerHTML = msg;
}

/* ══════════════════════════════════════════
   DISPLAY TABLE
══════════════════════════════════════════ */
function getdata1() {
  var formcontents = document.getElementById("register");
  var formoutput = "<table class='output'><tr><th>Field Name</th><th>Type</th><th>Value</th></tr>";

  for (var i = 0; i < formcontents.elements.length; i++) {
    var el = formcontents.elements[i];
    var datatype = el.type;

    switch (datatype) {
      case "checkbox":
        if (el.checked) {
          formoutput += "<tr><td align='right'>" + el.name + "</td><td align='right'>" + datatype + "</td><td class='outputdata'>Checked</td></tr>";
        }
        break;
      case "radio":
        if (el.checked) {
          formoutput += "<tr><td align='right'>" + el.name + "</td><td align='right'>" + datatype + "</td><td class='outputdata'>" + el.value + "</td></tr>";
        }
        break;
      case "button": case "submit": case "reset":
        break; // skip buttons
      case "password":
        if (el.value !== "") {
          formoutput += "<tr><td align='right'>" + el.name + "</td><td align='right'>" + datatype + "</td><td class='outputdata'>••••••••</td></tr>";
        }
        break;
      default:
        if (el.value !== "") {
          formoutput += "<tr><td align='right'>" + el.name + "</td><td align='right'>" + datatype + "</td><td class='outputdata'>" + el.value + "</td></tr>";
        }
    }
  }

  formoutput += "</table>";
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
  var x = document.getElementById("firstname").value;
  if (x.length < 1 || x.length > 30) {
    setMsg("name_message", "First name must be 1-30 characters.");
    error_flag = "1"; return;
  }
  if (!x.match(/^[a-zA-Z'-]+$/)) {
    setMsg("name_message", "First name: letters, apostrophes, and dashes only.");
    error_flag = "1"; return;
  }
  setMsg("name_message", "");
}

/*
   MIDDLE INITIAL
   Optional, 1 letter only
*/
function checkmiddle() {
  var x = document.getElementById("middleinit").value;
  if (x.length === 0) { setMsg("name_message", ""); return; }
  if (!x.match(/^[a-zA-Z]$/)) {
    setMsg("name_message", "Middle initial: one letter only, no numbers or symbols.");
    error_flag = "1"; return;
  }
  setMsg("name_message", "");
}

/*
   LAST NAME
   1-30 chars, letters/apostrophes/dashes/numbers 2-5
 */
function checklastname() {
  var x = document.getElementById("lastname").value;
  if (x.length < 1 || x.length > 30) {
    setMsg("lastname_message", "Last name must be 1-30 characters.");
    error_flag = "1"; return;
  }
  if (!x.match(/^[a-zA-Z2-5'-]+$/)) {
    setMsg("lastname_message", "Last name: letters, apostrophes, dashes, and numbers 2-5 only.");
    error_flag = "1"; return;
  }
  setMsg("lastname_message", "");
}

/*
   DATE OF BIRTH
   Must not be in the future, must not be > 120 years ago
*/
function checkDOB() {
  var val = document.getElementById("DOB").value;
  if (!val) {
    setMsg("dob_message", "Date of Birth is required.");
    error_flag = "1"; return;
  }
  var dob = new Date(val);
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 120);

  if (dob > today) {
    setMsg("dob_message", "Date of Birth cannot be in the future.");
    error_flag = "1"; return;
  }
  if (dob < minDate) {
    setMsg("dob_message", "Date of Birth cannot be more than 120 years ago.");
    error_flag = "1"; return;
  }
  setMsg("dob_message", "");
}

/*
   EMAIL
   Must match name@domain.tld format (optional field)
*/
function checkemail() {
  var x = document.getElementById("email1").value;
  if (x.length === 0) { setMsg("Email_Text", ""); return; }
  if (!x.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    setMsg("Email_Text", "Enter a valid email: name@domain.tld");
    error_flag = "1"; return;
  }
  setMsg("Email_Text", "");
}

/*
   PHONE
   Optional. Format: 000-000-0000
*/
function checkphone() {
  var x = document.getElementById("phone").value;
  if (x.length === 0) { setMsg("phone_text", ""); return; }
  if (!x.match(/^\d{3}-\d{3}-\d{4}$/)) {
    setMsg("phone_text", "Phone must be in format 000-000-0000.");
    error_flag = "1"; return;
  }
  setMsg("phone_text", "");
}

/*
   ADDRESS LINE 1
   Required, 2-30 characters
*/
function checkaddr1() {
  var x = document.getElementById("addr1").value;
  if (x.length < 2 || x.length > 30) {
    setMsg("addr1_text", "Address Line 1 must be 2-30 characters.");
    error_flag = "1"; return;
  }
  setMsg("addr1_text", "");
}

/*
   ADDRESS LINE 2
   Optional. If entered, same rules as addr1
*/
function checkaddr2() {
  var x = document.getElementById("addr2").value;
  if (x.length === 0) { setMsg("addr2_text", ""); return; }
  if (x.length < 2 || x.length > 30) {
    setMsg("addr2_text", "Address Line 2 must be 2-30 characters if entered.");
    error_flag = "1"; return;
  }
  setMsg("addr2_text", "");
}

/*
   CITY
   Required, 2-30 characters
*/
function checkcity() {
  var x = document.getElementById("city").value;
  if (x.length < 2 || x.length > 30) {
    setMsg("City_text", "City must be 2-30 characters.");
    error_flag = "1"; return;
  }
  setMsg("City_text", "");
}

/*
   STATE
   Must select a value
*/
function checkstate() {
  var z = document.getElementById("state").value;
  if (z === "") {
    setMsg("State_text", "Please choose a state.");
    error_flag = "1"; return;
  }
  setMsg("State_text", "");
}

/*
   ZIP CODE
   Required. 5 digits, or zip+4 (00000-0000).
   Truncates to 5 digits and redisplays.
*/
function checkzip() {
  var el = document.getElementById("zip");
  var x = el.value;
  if (!x.match(/^\d{5}(-\d{4})?$/)) {
    setMsg("zip_text", "Zip must be 5 digits (or zip+4: 00000-0000).");
    error_flag = "1"; return;
  }
  el.value = x.substring(0, 5); // truncate to 5 and redisplay
  setMsg("zip_text", "");
}

/*
   USERNAME
   5-30 chars, letters/numbers/underscore/dash,
   first char must NOT be a number, no spaces,
   converted to lowercase on submit
   */
function checkuser() {
  var el = document.getElementById("user");
  var x = el.value;

  if (x.length < 5 || x.length > 30) {
    setMsg("user_text", "Username must be 5-30 characters.");
    error_flag = "1"; return;
  }
  if (x.match(/\s/)) {
    setMsg("user_text", "Username cannot contain spaces.");
    error_flag = "1"; return;
  }
  if (x.match(/^\d/)) {
    setMsg("user_text", "Username cannot start with a number.");
    error_flag = "1"; return;
  }
  if (!x.match(/^[a-zA-Z][a-zA-Z0-9_-]*$/)) {
    setMsg("user_text", "Username: letters, numbers, underscores, and dashes only.");
    error_flag = "1"; return;
  }
  el.value = x.toLowerCase(); // convert to lowercase and redisplay
  setMsg("user_text", "");
}

/*
   PASSWORD
   8-30 chars, >=1 upper, >=1 lower, >=1 digit,
   >=1 special char, no double-quotes,
   cannot contain username or name parts
*/
function passwordentry() {
  var pass = document.getElementById("pass").value;
  var msgs = [];
  var username = document.getElementById("user").value.toLowerCase();
  var firstname = document.getElementById("firstname").value.toLowerCase();
  var lastname = document.getElementById("lastname").value.toLowerCase();

  if (pass.length < 8 || pass.length > 30) {
    msgs.push("Password must be 8-30 characters.");
  }
  if (pass.search(/[a-z]/) < 0) {
    msgs.push("Need at least 1 lowercase letter.");
  }
  if (pass.search(/[A-Z]/) < 0) {
    msgs.push("Need at least 1 uppercase letter.");
  }
  if (pass.search(/[0-9]/) < 0) {
    msgs.push("Need at least 1 number.");
  }
  if (pass.search(/[!@#%^&*()\-_+=\\\/><.,`~]/) < 0) {
    msgs.push("Need at least 1 special character: !@#%^&*()-_+=\\/><.,`~");
  }
  if (pass.indexOf('"') >= 0) {
    msgs.push("Password cannot contain double-quote (\") characters.");
  }
  if (username.length >= 3 && pass.toLowerCase().indexOf(username) >= 0) {
    msgs.push("Password cannot contain your username.");
  }
  if (firstname.length >= 3 && pass.toLowerCase().indexOf(firstname) >= 0) {
    msgs.push("Password cannot contain your first name.");
  }
  if (lastname.length >= 3 && pass.toLowerCase().indexOf(lastname) >= 0) {
    msgs.push("Password cannot contain your last name.");
  }

  if (msgs.length > 0) {
    setMsg("pass_text", msgs.join(" "));
    error_flag = "1";
  } else {
    setMsg("pass_text", "");
  }
}

/*
   CONFIRM PASSWORD
   Must match password field
*/
function checkpassword2() {
  var x = document.getElementById("pass").value;
  var y = document.getElementById("confirmPass").value;
  if (x !== y) {
    setMsg("confirmPass_text", "Passwords do not match.");
    error_flag = "1";
  } else {
    setMsg("confirmPass_text", "Passwords match!");
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
