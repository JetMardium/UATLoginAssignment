function checkCreds() {
    //My variables for submitting a credential check for login permission
    var Name1 = document.getElementById("firstName").value;
    var Name2 = document.getElementById("lastName").value;
    var badgeNum = document.getElementById("numBadge").value;
    var loginInfo = Name1 + " " + Name2;

    //This condition tells it to check if the login name is of a proper length and run if the condition is true. I split the process into two so that the first and last name both must have a set limit of characters rather than a combined total.
    //More advanced coders than I can make this process specific to individual user names, or even user names in a database that it runs a check against.
    if (Name1.length >20 || Name1.length <4) {
          document.getElementById("loginStatus").innerHTML = "User First Name has invalid number of characters!";
          
    }
        else
        if (Name2.length >20 || Name2.length <4) {
            document.getElementById("loginStatus").innerHTML = "User Last Name has invalid number of characters!";
    }

              //This condition tells it to check for this condition if the first one is false and the second one is as well, and run if this number is true
          //In this case I made it run if the proper numbers are input
        else
        if (badgeNum < 999  && badgeNum > 100) {
            alert("Training Progarm Accesss Granted. Welcome to the UAT Deep Space Exploration Team " + loginInfo + ".");
            location.replace("tables.html");

    }

    //This condition runs if all three of the other conditions are false, and it tells the system to display that the badge number is invalid.
        else {
        document.getElementById("loginStatus").innerHTML = "Badge number is invalid!";
    }
}
