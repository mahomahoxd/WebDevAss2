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
        //Everthings okay
        alert("Successfully sent!");
        return true;
    }
}

function showMenu()
{
	var menu = document.getElementById("ulmenu");
	if(menu.style.display == 'none' || menu.style.display == "")
	{
		menu.style.display = 'block';
		document.getElementById("show-menu").value="Close menu";
	}
	else{
		menu.style.display = 'none';
		document.getElementById("show-menu").value="Show menu";
	}
}