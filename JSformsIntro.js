function validateForm() {
    var uname = document.forms["myFrom"]["uname"].value;
    var age = document.forms["myFrom"]["age"].value;
    var residentStatus = document.forms["myFrom"]["residency"].value;
    var uname = document.querySelector('input[name=acctype]:checked');
    var nationality = document.forms["myFrom"]["nationality"].value;

    if (uname.length < 6) {
        alert("The UserName must be at least 6 character");
        return false;
    } else {
        var selectedAccount = [];
        for (let i = 0; i < accountType.length; i++) {
            selectedAccount.push(accountType[i].value);
        }
        var alertMsg = "The Details Supplied" +
            "\nUserName :" + uname +
            "\nage :" + age +
            "\nResident Status :" + residentStatus +
            "\nAccount Selected :" + selectedAccount +
            "\nNationality Index :" + nationality;

        console.log("Supplied details :");
        console.log("UserName :", uname);
        console.log("Age :", age);
        console.log("Resident Status :", residentStatus);
        console.log("Accounts Selected :", selectedAccount);
        console.log("Nationality :", nationality);
        alert(alertMsg)
        return true;
    }
}