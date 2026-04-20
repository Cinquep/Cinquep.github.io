/* 
 Name: Cinque Preston
 File: homework2.js
 Date Created: 2026-03-15
 Date Updated: 2026-04-20
*/

// Maps each field's element id a label for the table
var FIELD_LABELS = {
  firstname:    "First Name",
  middleinit:   "Middle Initial",
  lastname:     "Last Name",
  DateOfBirth:  "Date of Birth",
  SocialSecurity: "Social Security #",
  email1:       "Email Address",
  phone:        "Phone Number",
  addr1:        "Street Address",
  addr2:        "Address Line 2",
  city:         "City",
  state:        "State",
  zip:          "ZIP Code",
  user:         "Username",
  Password:     "Password",
  confirmPass:  "Confirm Password",
  illness1:     "Heart Disease",
  illness2:     "Diabetes",
  illness3:     "Hypertension",
  illness4:     "Cancer",
  illnessOther: "Other Condition",
  description:  "Symptoms / Condition",
  gender:       "Gender",
  medication:   "On Medications?",
  vaccination:  "COVID Vaccinated?",
  feeling:      "Urgency Level (1–10)"
};

/*
   DISPLAY REVIEW TABLE user-friendly, no "Type" column
*/
function getdata1() {
  var form = document.getElementById("register");
  var rows = "";
  var seen = {}; // track radio groups so we only add one row per group

  for (var i = 0; i < form.elements.length; i++) {
    var el = form.elements[i];
    var type = el.type;
    var label = FIELD_LABELS[el.name] || FIELD_LABELS[el.id] || el.name;
    var val = "";

    if (type === "button" || type === "submit" || type === "reset") continue;

    if (type === "checkbox") {
      if (!el.checked) continue;
      val = "Yes";
    } else if (type === "radio") {
      if (seen[el.name]) continue;
      seen[el.name] = true;
      // find whichever radio in this group is checked
      var checked = form.querySelector('input[name="' + el.name + '"]:checked');
      if (!checked) continue;
      // capitalize the value
      val = checked.value.charAt(0).toUpperCase() + checked.value.slice(1);
      label = FIELD_LABELS[el.name] || el.name;
    } else if (type === "password") {
      if (el.value === "") continue;
      val = "••••••••";
    } else if (type === "range") {
      val = el.value + " / 10";
    } else {
      if (el.value === "" || el.value === null) continue;
      val = el.value;
    }

    rows += "<tr><td class='review-label'>" + label + "</td><td class='review-value'>" + val + "</td></tr>";
  }

  if (rows === "") {
    document.getElementById("outputformdata").innerHTML = "<p style='text-align:center; color:#555;'>No information entered yet.</p>";
    return;
  }

  var table = "<table class='output'>"
            + "<tr><th>Field</th><th>Your Entry</th></tr>"
            + rows
            + "</table>";

  document.getElementById("outputformdata").innerHTML = table;
}

function removedata1() {
  document.getElementById("outputformdata").innerHTML = "";
}

// VALIDATION FUNCTIONS

var error_flag = "0";

function showMsg(id, msg) {
  var el = document.getElementById(id);
  if (el) el.innerHTML = msg;
}

/*  FIRST NAME 1-30 chars, letters/apostrophes/dashes only */
function checkfirstname() {
  var val = document.getElementById("firstname").value;
  if (val.length < 1 || val.length > 30) {
    showMsg("name_message", "First name must be between 1 and 30 characters.");
    error_flag = "1";
  } else if (!val.match(/^[a-zA-Z'-]+$/)) {
    showMsg("name_message", "First name may only contain letters, apostrophes, or dashes.");
    error_flag = "1";
  } else {
    showMsg("name_message", "");
  }
}

/*  MIDDLE INITIAL optional, single letter */
function checkmiddle() {
  var val = document.getElementById("middleinit").value;
  if (val.length === 0) {
    showMsg("name_message", "");
  } else if (!val.match(/^[a-zA-Z]$/)) {
    showMsg("name_message", "Middle initial must be a single letter.");
    error_flag = "1";
  } else {
    showMsg("name_message", "");
  }
}

/*  LAST NAME 1-30 chars, letters/apostrophes/dashes/numbers 2-5 */
function checklastname() {
  var val = document.getElementById("lastname").value;
  if (val.length < 1 || val.length > 30) {
    showMsg("lastname_message", "Last name must be between 1 and 30 characters.");
    error_flag = "1";
  } else if (!val.match(/^[a-zA-Z2-5'-]+$/)) {
    showMsg("lastname_message", "Last name may only contain letters, apostrophes, dashes, or numbers 2–5.");
    error_flag = "1";
  } else {
    showMsg("lastname_message", "");
  }
}

/*  DATE OF BIRTH required, not future, not > 120 years ago */
function checkDOB() {
  var val = document.getElementById("DOB").value;
  if (!val) {
    showMsg("dob_message", "Please enter your date of birth.");
    error_flag = "1";
    return;
  }
  var dob = new Date(val);
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var oldest = new Date();
  oldest.setFullYear(oldest.getFullYear() - 120);

  if (dob > today) {
    showMsg("dob_message", "Date of birth cannot be in the future.");
    error_flag = "1";
  } else if (dob < oldest) {
    showMsg("dob_message", "Date of birth cannot be more than 120 years ago.");
    error_flag = "1";
  } else {
    showMsg("dob_message", "");
  }
}

/*  EMAIL — optional, must match name@domain.tld */
function checkemail() {
  var val = document.getElementById("email1").value;
  if (val.length === 0) {
    showMsg("Email_Text", "");
  } else if (!val.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    showMsg("Email_Text", "Please enter a valid email address (e.g. name@domain.com).");
    error_flag = "1";
  } else {
    showMsg("Email_Text", "");
  }
}

/*  PHONE — optional, format 000-000-0000 */
function checkphone() {
  var val = document.getElementById("phone").value;
  if (val.length === 0) {
    showMsg("phone_text", "");
  } else if (!val.match(/^\d{3}-\d{3}-\d{4}$/)) {
    showMsg("phone_text", "Phone number must be in the format 000-000-0000.");
    error_flag = "1";
  } else {
    showMsg("phone_text", "");
  }
}

/*  ADDRESS LINE 1 required, 2-30 characters */
function checkaddr1() {
  var val = document.getElementById("addr1").value;
  if (val.length < 2 || val.length > 30) {
    showMsg("addr1_text", "Street address must be between 2 and 30 characters.");
    error_flag = "1";
  } else {
    showMsg("addr1_text", "");
  }
}

/*  ADDRESS LINE 2 optional, same length rules if entered */
function checkaddr2() {
  var val = document.getElementById("addr2").value;
  if (val.length === 0) {
    showMsg("addr2_text", "");
  } else if (val.length < 2 || val.length > 30) {
    showMsg("addr2_text", "Address line 2 must be between 2 and 30 characters if provided.");
    error_flag = "1";
  } else {
    showMsg("addr2_text", "");
  }
}

/*  CITY required, 2-30 characters */
function checkcity() {
  var val = document.getElementById("city").value;
  if (val.length < 2 || val.length > 30) {
    showMsg("City_text", "City must be between 2 and 30 characters.");
    error_flag = "1";
  } else {
    showMsg("City_text", "");
  }
}

/*  STATE must select a value */
function checkstate() {
  var val = document.getElementById("state").value;
  if (val === "") {
    showMsg("State_text", "Please select a state.");
    error_flag = "1";
  } else {
    showMsg("State_text", "");
  }
}

/*  ZIP required, 5 digits or zip+4; truncates to 5 on success */
function checkzip() {
  var val = document.getElementById("zip").value;
  if (val.match(/^\d{5}(-\d{4})?$/)) {
    document.getElementById("zip").value = val.substring(0, 5);
    showMsg("zip_text", "");
  } else {
    showMsg("zip_text", "ZIP code must be 5 digits (or ZIP+4 format: 00000-0000).");
    error_flag = "1";
  }
}

/*  USERNAME 5-30 chars, letters/numbers/underscores/dashes, no leading digit, converted to lowercase */
function checkuser() {
  var val = document.getElementById("user").value;
  if (val.length < 5 || val.length > 30) {
    showMsg("user_text", "Username must be 5–30 characters long.");
    error_flag = "1";
  } else if (/\s/.test(val)) {
    showMsg("user_text", "Username cannot contain spaces.");
    error_flag = "1";
  } else if (/^\d/.test(val)) {
    showMsg("user_text", "Username cannot begin with a number.");
    error_flag = "1";
  } else if (!val.match(/^[a-zA-Z][a-zA-Z0-9_-]*$/)) {
    showMsg("user_text", "Username may only contain letters, numbers, underscores, and dashes.");
    error_flag = "1";
  } else {
    document.getElementById("user").value = val.toLowerCase();
    showMsg("user_text", "");
  }
}

/*  PASSWORD 8-30 chars, must have upper, lower, digit, special, no double-quotes,
    cannot contain username or name fragments */
function passwordentry() {
  var pass     = document.getElementById("pass").value;
  var username = document.getElementById("user").value.toLowerCase();
  var first    = document.getElementById("firstname").value.toLowerCase();
  var last     = document.getElementById("lastname").value.toLowerCase();

  if (pass.length < 8 || pass.length > 30) {
    showMsg("pass_text", "Password must be 8–30 characters.");
    error_flag = "1";
  } else {
    showMsg("pass_text", "");
  }

  showMsg("pass_text2", pass.search(/[a-z]/) < 0 ? (error_flag="1","Must include at least one lowercase letter.") : "");
  showMsg("pass_text3", pass.search(/[A-Z]/) < 0 ? (error_flag="1","Must include at least one uppercase letter.") : "");
  showMsg("pass_text4", pass.search(/[0-9]/) < 0 ? (error_flag="1","Must include at least one number.") : "");
  showMsg("pass_text5", pass.search(/[!@#%^&*()\-_+=\\\/><.,`~]/) < 0 ? (error_flag="1","Must include at least one special character: !@#%^&*()-_+=\\/><.,`~") : "");
  showMsg("pass_text6", pass.indexOf('"') >= 0 ? (error_flag="1",'Password cannot contain double-quote (") characters.') : "");

  if (username.length >= 3 && pass.toLowerCase().includes(username)) {
    showMsg("pass_text7", "Password cannot contain your username."); error_flag = "1";
  } else { showMsg("pass_text7", ""); }

  if (first.length >= 3 && pass.toLowerCase().includes(first)) {
    showMsg("pass_text8", "Password cannot contain your first name."); error_flag = "1";
  } else { showMsg("pass_text8", ""); }

  if (last.length >= 3 && pass.toLowerCase().includes(last)) {
    showMsg("pass_text9", "Password cannot contain your last name."); error_flag = "1";
  } else { showMsg("pass_text9", ""); }
}

/*  CONFIRM PASSWORD must match */
function checkpassword2() {
  var p1 = document.getElementById("pass").value;
  var p2 = document.getElementById("confirmPass").value;
  if (p1 === p2) {
    showMsg("confirmPass_text", "<span style='color:green;'>✓ Passwords match!</span>");
  } else {
    showMsg("confirmPass_text", "Passwords do not match.");
    error_flag = "1";
  }
}

/*  CHECK ALL run every validator, enable Submit only if clean */
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
    alert("Some fields need attention. Please fix the highlighted errors before submitting.");
  } else {
    document.getElementById("submit").disabled = false;
    alert("Everything looks good! You may now click Send to submit.");
  }
}


}
