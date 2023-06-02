// Function to validate form before submitting data
function validateForm() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var address = document.getElementById("address");


    if (firstName.value == "") {

        firstName.classList.remove('is-valid');
        firstName.classList.add('is-invalid');
        return false;
    }
    else {
        firstName.classList.remove('is-invalid')
        firstName.classList.add('is-valid')
    }
    if (lastName.value == "") {
        lastName.classList.remove('is-valid');
        lastName.classList.add('is-invalid');
        return false;

    }
    else {
        lastName.classList.remove('is-invalid');
        lastName.classList.add('is-valid');
    }
    if (address.value == "") {
        address.classList.remove('is-valid');
        address.classList.add('is-invalid');
        return false;

    }
    else {
        address.classList.remove('is-invalid');
        address.classList.add('is-valid');
    }

    if ((email.value == "")) {
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        return false;

    }
    else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
    return true;

}

// Function to show Data
function showData() {

    var listEmploye = JSON.parse(localStorage.getItem("listEmploye")) || [];

    var html = "";
    listEmploye.forEach(function (element, index) {
        html += `<tr>
     <td> ${element.firstName} </td>
     <td> ${element.lastName} </td>
     <td> ${element.address} </td>
     <td> ${element.email} </td>
     <td><button onclick="deleteData('${index}')" class="btn btn-danger me-2" >DELETE</button><button onclick="showUpdateData('${index}')"
      class="btn btn-warning mt-2">EDIT</button></td></tr>`;

    });
    document.querySelector('#crudTable tbody').innerHTML = html;
}


// Function to add data
function addData() {
    if (validateForm() == true) {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var listEmploye = JSON.parse(localStorage.getItem("listEmploye")) || [];
        listEmploye.push({
            firstName: firstName,
            lastName: lastName,
            address: address,
            email: email

        });
        localStorage.setItem("listEmploye", JSON.stringify(listEmploye));
        showData();
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";


    }
}

//Funtion to delete data
function deleteData(index) {
    var listEmploye = JSON.parse(localStorage.getItem("listEmploye")) || [];
    listEmploye.splice(index, 1);
    localStorage.setItem("listEmploye", JSON.stringify(listEmploye));


}

//Funtion to update data
var i = "";
function showUpdateData(index) {
    i = index;
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").classList.add("d-block");
    document.getElementById("Update").classList.remove("d-none");

    var listEmploye = JSON.parse(localStorage.getItem("listEmploye")) || [];

    document.getElementById("firstName").value = listEmploye[index].firstName;
    document.getElementById("lastName").value = listEmploye[index].lastName;
    document.getElementById("address").value = listEmploye[index].address;
    document.getElementById("email").value = listEmploye[index].email;
}
function updateData() {
    if (validateForm() == true) {
        var listEmploye = JSON.parse(localStorage.getItem("listEmploye")) || [];
        listEmploye[i].firstName = document.getElementById("firstName").value;
        listEmploye[i].lastName = document.getElementById("lastName").value;
        listEmploye[i].address = document.getElementById("address").value;
        listEmploye[i].email = document.getElementById("email").value;

        localStorage.setItem("listEmploye", JSON.stringify(listEmploye));
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";

        document.getElementById("Submit").style.display = "block";
        document.getElementById("Update").classList.add("d-none");
        document.getElementById("Update").classList.remove("d-block");
        document.getElementById("firstName").classList.remove('is-valid');
        document.getElementById("lastName").classList.remove('is-valid');
        document.getElementById("address").classList.remove('is-valid');
        document.getElementById("email").classList.remove('is-valid');

        showData();
    }

}

function loadCompany() {
    var listCompany = JSON.parse(localStorage.getItem("listCompany")) || [];
    listCompany.map((listCompany, i) => {
        document.getElementById("company").innerHTML += `<option value="${listCompany.companyName}">${listCompany.companyName}</option>`;

    })
}

loadCompany();