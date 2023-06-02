// Function to validate form before submitting data
function validateForm() {
    var companyName = document.getElementById("companyName");
    var email = document.getElementById("email");
    var address = document.getElementById("address");


    if (companyName.value == "") {

        companyName.classList.remove('is-valid');
        companyName.classList.add('is-invalid');
        return false;
    }
    else {
        companyName.classList.remove('is-invalid')
        companyName.classList.add('is-valid')
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

    var listCompany = JSON.parse(localStorage.getItem("listCompany")) || [];

    var html = "";
    listCompany.forEach(function (element, index) {
        html += `<tr>
     <td> ${element.companyName} </td>
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
        var companyName = document.getElementById("companyName").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var listCompany = JSON.parse(localStorage.getItem("listCompany")) || [];
        listCompany.push({
            id: id,
            companyName: companyName,
            address: address,
            email: email

        });
        localStorage.setItem("listCompany", JSON.stringify(listCompany));
        showData();
        document.getElementById("companyName").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";


    }
}

//Funtion to delete data
function deleteData(index) {
    var listCompany = JSON.parse(localStorage.getItem("listCompany")) || [];
    listCompany.splice(index, 1);
    localStorage.setItem("listCompany", JSON.stringify(listCompany));
    showData();

}

//Funtion to update data
var i = "";
function showUpdateData(index) {
    i = index;
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").classList.add("d-block");
    document.getElementById("Update").classList.remove("d-none");

    var listCompany = JSON.parse(localStorage.getItem("listCompany")) || [];

    document.getElementById("companyName").value = listCompany[index].companyName;
    document.getElementById("address").value = listCompany[index].address;
    document.getElementById("email").value = listCompany[index].email;
}
function updateData() {
    if (validateForm() == true) {
        var listCompany = JSON.parse(localStorage.getItem("listCompany")) || [];
        listCompany[i].companyName = document.getElementById("companyName").value;
        listCompany[i].address = document.getElementById("address").value;
        listCompany[i].email = document.getElementById("email").value;

        localStorage.setItem("listCompany", JSON.stringify(listCompany));
        document.getElementById("companyName").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";

        document.getElementById("Submit").style.display = "block";
        document.getElementById("Update").classList.add("d-none");
        document.getElementById("Update").classList.remove("d-block");
        document.getElementById("companyName").classList.remove('is-valid');
        document.getElementById("address").classList.remove('is-valid');
        document.getElementById("email").classList.remove('is-valid');

        showData();
    }

}

var listEmploye = JSON.parse(localStorage.getItem('listEmploye')) || []

console.log(listEmploye.find((listEmploye) => listEmploye.idCompany === id.value));