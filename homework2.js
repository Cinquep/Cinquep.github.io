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
