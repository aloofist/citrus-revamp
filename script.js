const input = document.querySelector("input")
const inputText = document.querySelector("input[type='text']")
const email = document.getElementById("email")
const password = document.getElementById("password")

const tosCheck = document.querySelector("input[type='checkbox']")
const createAcc = document.querySelector(".card button")

const link = document.querySelector("#link")



function checkInputs() {
    if (inputText.value === "") {
        alert("You didn't fill in anything!")
    } else if (!email.value.includes("@")) {
        alert("Invaild email address")
    } else if (password.value === "") {
        alert("Password is required")
    } else if (password.value.length < 8) {
        alert("Password needs to be at least 8 characters")
    } else if (!tosCheck.checked) {
        alert("You haven't agreed to Terms of Service ad Privacy Policy")
    } else {
        link.href = "signed-up.html"
        createButton.style.opacity = "1"
    }
}

// function check() {
//     if (inputText.value !== "" && email.value.includes("@") && tosCheck.checked) {
//         createButton.style.opacity = "1"
//         console.log("aa")
//     } else {
//         createButton.style.opacity = "0.5"
//     }
// }

createAcc.addEventListener("click", checkInputs)
// input.addEventListener("input", check)