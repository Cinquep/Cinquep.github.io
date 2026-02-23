<html>
    <head>
        <meta charset="utf-8">

        <title>Homework 1</title>

        <!-- Load external CSS styles -->
        <link rel="stylesheet" href="homework1.css">
    </head>
    <body>
        <div id="header"> 
            <table width="100%">
                <tr>
                    <td>
                        <img 
                            id="logo" 
                            src="SOMETHING.png" 
                            alt="Preston Medical Logo"
                            width="200"
                            height="200"
                        >
                    </td>
                    <td valign="middle" align="center" style="font-weight:bold; font-size:39px;">Preston Medical Center</td>
                    <td valign="bottom" align="right">Today's date: <span id="today">Date goes here </span></td>
                </tr>
            </table>
        </div>
        <hr>
        <div id="body">
    <form>
   <table class="form">
    <tr class="form">
        <th class="form" colspan="3">Register for an appointment</th>
    </tr>
    <tr class="form">
        <td align="right">
            <label for="firstname">First NAME</label>
            <label for="middleinit">MI</label>
            <label for="lastname">Last</label>
        </td>
        <td>
             <input type="text"
                    size="25"
                    maxlength="30" 
                    id="firstname" 
                    name="firsttname" 
                    required
                    oninput="this.setCustomValidity('')"
                    placeholder="(req'd)"
            >
            
            <input type="text" 
                    size="1"
                    maxlength="1" 
                    id="middleinit" 
                    name="middleinit" 
                    placeholder="Q"
            >
            <input type="text"
                    size="20"
                    maxlength="30" 
                    id="lastname" 
                    name="lastname" 
                    required
                    oninvalid="this.setCustomValidity('Last Name is Required')"
                    oninput="this.setCustomValidity('')"
                    placeholder="Public (required)"
            >

        <span id="name_text"></span>
        </td>
    </tr>
    <tr  class="form">
        <td align="right">
            <label for="DOB" >Date of Birth</label>
        </td>
        <td>
                 <input type="date"
                    id="DOB" 
                    name="DateOfBirth" 
                    required
                    oninvalid="this.setCustomValidity('Date of Birth is Required')"
                    oninput="this.setCustomValidity('')"
                    placeholder="Public (required)"
        >
    <span id="dob_date"></span>
    </td>
    </tr>
        <tr  class="form">
        <td align="right">
            <label for="SSN" >Social Security</label>
        </td>
        <td>
            <input type="password"
                    size="9"
                    maxlength="11"
                    id="SSN" 
                    name="SocialSecurity" 
                    required
                    oninvalid="this.setCustomValidity('Social Security # is Required')"
                    oninput="this.setCustomValidity('')"
                    placeholder="SSN (required)"
            >
        <span id="ssn_text"></span></td>
    </tr>
    <tr  class="form">
        <td align="right">
            <label for="addr1" >Address Line 1</label>
        </td>
        <td>
            <input type="text" 
                    size="20" 
                    minlength="4"
                    maxlength="30" 
                    id="addr1" 
                    name="addr1" 
                    required
                    oninvalid="this.setCustomValidity('At least 1 address line Required')"
                    oninput="this.setCustomValidity('')"
                    placeholder="5555 Super St (required)"
            >
        <span id="addr1_text"></span>
        </td>
    </tr>
    <tr  class="form">
        <td align="right">
            <label for="addr2">Address line 2</label>
        </td>
        <td>
            <input type="text" 
                    size="20" 
                    maxlength="30" 
                    id="addr2" 
                    name="addr2" 
                    placeholder="Apt #, other (optional)"
            >
            <span id="addr2_text"></span>
        </td>
    </tr>
    <tr class="form">
        <td align="right">
            <label for="city">City,</label>
            <label for="state">ST</label>
            <label for="zip">Zip</label>
        </td>
        <td>
            <input type="text" 
                    size="12" 
                    maxlength="25" 
                    id="city" 
                    name="city" 
                    required
                    oninvalid="this.setCustomValidity('You forgot City')"
                    oninput="this.setCustomValidity('')"
                    placeholder="Anytown (required)"
            >
            <select required>
                <option value=""></option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
            <input type="text" 
                    pattern="[0-9]{5}"
                    size="5"
                    maxlength="5" 
                    id="zip" 
                    name="zip"
                    required
                    oninvalid="this.setCustomValidity('5 Digit Zip/Postal Code required')"
                    oninput="this.setCustomValidity('')"
                    placeholder="00000"
            >
            <span id="City_text"></span><span id="State_text"></span>
        </td>
    </tr>
    <tr class="form">
        <td align="right">
            <label for="phone">Phone #</label>
        </td>
        <td>
            <input type="text" 
                    size="13" 
                    maxlength="13" 
                    id="phone" 
                    name="phone" 
                    placeholder="(281)415-4322"
            >
            <span id="phone_text"></span>
        </td>
    </tr>
    <tr  class="form">
        <td align="right">
            <label for="email">Email</label>
        </td>
        <td>
            <input type="email" 
                    size="25"
                    id="email1" 
                    name="email1" 
                    placeholder="HaroldM21@cougarnet.uh.edu"
            >
            <span id="Email_Text"></span>
        </td>
    </tr>
    <tr  class="form">
        <td align="right">
            <label for="MedicalHist">Medical History</label>
        </td>
        <td>
            <input type="checkbox" 
                    id="illness1" 
                    name="illness1" 
                    value="Heart Disease"
            >
                    <label for="illness1">Heart Disease</label><br>          
            <input type="checkbox" 
                    id="illness2" 
                    name="illness2" 
                    value="Diabetes"
            >
                    <label for="illness2">Diabetes</label><br>
            <input type="checkbox" 
                    id="illness3" 
                    name="illness3" 
                    value="Heart Disease"
            >
                    <label for="illness3">Hypertension</label><br>            
            <input type="checkbox" 
                    id="illness4" 
                    name="illness4" 
                    value="Diabetes"
            >
                    <label for="illness4">Cancer</label><br>
            <input type="checkbox" 
                    id="illnessOther" 
                    name="illnessOther" 
                    value="Other"
            >
                    <label for="illnessOther">Other(Specify below)</label><br>
            <span id="Medical_Check"></span>
        </td>
    </tr>
        






    <tr>        
        <td colspan="3">
            <center>
            <input type="submit" onclick="window.location.href='homework1-submit.html'">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="reset">
            </center>
        </td>
    <tr>
    </tr>

   </table>
</form> 
        </div>
        <div id="footer">
            <hr>
            <center>
            Preston Medical
            <a href="https://abc.com" class="contact-btn">CONTACT US</a>
            <br>
            PO BOX 65721
            <br>
            Missouri City TX 77459
            </center>
        </div>
        
        
 <script>
    document.getElementById("today").innerHTML = new Date().toLocaleDateString();
</script>
</body>
<!-- End of file: homework1.html -->
</html>
