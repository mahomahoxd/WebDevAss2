function validateContactForm()
{
    //get form first
    var formContact = document.forms["formcontact"];
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
    else if(txtEmail == "")
    {
        alert("Please fill in email correctly.");
        return false;
    }
    else
    {
        //Everthings okay
        alert("Successfully sent!");
        return true;
    }
}

function showMenu()
{
	var menu = document.getElementById("mobilemenu");

	if(menu.style.display == 'none' || menu.style.display == "")
	{
		menu.style.display = 'block';
		document.getElementById("showmenubutton").value="Close menu";
	}
	else{
		menu.style.display = 'none';
		document.getElementById("showmenubutton").value="Show menu";
	}
}