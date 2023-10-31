const input = document.querySelector("input")
const inputText = document.querySelector("input[type='text']")
const email = document.getElementById("email")

const tosCheck = document.querySelector("input[type='checkbox']")
const createButton = document.querySelector(".card button")

const link = document.querySelector("#link")



function checkInputs() {
    if (inputText.value === "") {
        alert("You didn't fill in everything!")
    } else if (!email.value.includes("@")) {
        alert("Invaild email address")
        console.log("Invalid email address")
    } else {
        link.href = "signed-up.html"
        createButton.style.opacity = "1"
    }
}


function check() {
    if (inputText.value === "") {
        createButton.style.opacity = "0.5"
    } else if (!email.value.includes("@")) {
        createButton.style.opacity = "0.5"
    } else {
        createButton.style.opacity = "1"
    }
}

createButton.addEventListener("click", checkInputs)
input.addEventListener("input", )