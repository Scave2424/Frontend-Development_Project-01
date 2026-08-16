function register(event) {
    event.preventDefault();
    let name = document.getElementById("name").value
    console.log(name)
    let email = document.getElementById("email").value
    console.log(email)
    let pass = document.getElementById("password").value
    console.log(pass)
    let cpass = document.getElementById("confirmPassword").value
    console.log(cpass)
    let age = document.getElementById("age").value
    console.log(age)
    let department = document.getElementById("department").value
    console.log(department)
    if (pass !== cpass) {
        document.getElementById("output").textContent = "Passwords do not match!";
        return;
    }
    if (age < 16) {
        document.getElementById("output").textContent = "Age must be greater than 15!";
        return;
    }
    let table = document.getElementById("studentTable")
    let row = table.insertRow()
    let cell1 = row.insertCell()
    let cell2 = row.insertCell()
    let cell3 = row.insertCell()
    cell1.textContent = name
    cell2.textContent = email
    cell3.textContent = department
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("department").selectedIndex = 0;
    document.getElementById("age").value = "";


}