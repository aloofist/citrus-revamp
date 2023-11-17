const input = document.querySelector("input")
const inputText = document.querySelector("input[type='text']")

const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")

const tosCheck = document.querySelector("input[type='checkbox']")
const createAcc = document.querySelector(".card button")

const link = document.querySelector("#link")

// there is probably a easier way to write this but i dont care it works

function checkInputs() {
    if (inputText.value === "") {
        alert("You didn't fill in anything!")
    } else if (!isValidEmail(email.value)) {
        alert("Invaild email address")
    } else if (password.value === "") {
        alert("Password is required")
    } else if (password.value.length < 8) {
        alert("Password needs to be at least 8 characters")
    } else if (!tosCheck.checked) {
        alert("Agree to Terms of Service ad Privacy Policy")
    } else {
        link.href = "signed-up.html"
    }
}

function isValidEmail(email) {
    // checks if there is at least character before and after the "@"", followed by "." and more character after it
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

function check() {
    if (inputText.value !== "" && isValidEmail(email.value) && password.value.length >= 8 && tosCheck.checked) {
        createAcc.style.opacity = "1"
        console.log("aa")
    } else {
        createAcc.style.opacity = "0.5"
    }
}

function setValue() {
    localStorage.setItem("user", name.value)
}

createAcc.addEventListener("click", checkInputs)
createAcc.addEventListener("click", setValue)
input.addEventListener("input", check)
email.addEventListener("input", check)
password.addEventListener("input", check)
tosCheck.addEventListener("change", check)

