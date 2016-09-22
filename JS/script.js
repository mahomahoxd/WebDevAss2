function onLoad()
{
}

function validateContactForm()
{
    //get form first
    var formContact = document.forms["formContact"];
    //get values from form
    var txtName = formContact["name"].value;
    var txtEmail = formContact["email"].value;
    if(txtName == null || txtEmail == null)
    {
        alert("Page did not load correctly.");
        return false;
    }
    else if(txtName == "")
    {
        alert("Please fill in the name correctly.");
        return false;
    }
    else if(txtEmail == "" || txtEmail.search("@") == -1 && txtEmail.search(".") == -1)
    {
        alert("Please fill in email correctly.");
        return false;
    }
    else
    {
        //EVerthings okay
        alert("Successfully sent!");
        return true;
    }
}