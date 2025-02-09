document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculate-btn").addEventListener("click", calculateAge);
});

function calculateAge() {
    let userage = document.getElementById("birthdate").value;
    if (!userage) {
        document.getElementById("age").innerText = "Please enter your birth date!";
        return;
    }
    let date = new Date(userage);
    let currDate = new Date();
    let diff = currDate - date;
    let age = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
    document.getElementById("age").innerText = "Your Age is: " + age;
}
