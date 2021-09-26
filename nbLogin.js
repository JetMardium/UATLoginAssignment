function checkCreds() {
    //My variables for submitting a credential check for login permission
    var Name1 = document.getElementById("firstName").value;
    var Name2 = document.getElementById("lastName").value;
    var badgeNum = document.getElementById("numBadge").value;
    var loginInfo = Name1 + " " + Name2;
    //This condition tells it to check if the login name is of a proper length and run if the condition is true.
    //More advanced coders than I can make this process specific to individual user names, or even user names in a database that it runs a check against.
    if (loginInfo.length >20 || loginInfo.length <4) {
          document.getElementById("loginStatus").innerHTML = "Login ID has invalid number of characters!";
          
          //This condition tells it to check for this condition if the first one is false, and run if this number is true
          //In this case I made it run if the proper numbers are input
    } 
        else
        if (badgeNum < 999  && badgeNum > 100) {
            alert("Training Progarm Accesss Granted. Welcome to the UAT Deep Space Exploration Team " + loginInfo + ".");
            location.replace("tables.html");

    }

    //This condition runs if both the first and second conditions are false, and it tells the system to display that the badge number is invalid.
        else {
        document.getElementById("loginStatus").innerHTML = "Badge number is invalid!";
    }
}