const input = document.querySelector("input[type='text']")
const email = document.getElementById("email")

const tosCheck = document.querySelector("input[type='checkbox']")
const createButton = document.querySelector(".card button")

const link = document.querySelector("#link")

function checkInputs() {
    if (input.value === "") {
        alert("You didn't fill in everything!")
    } else if (!email.value.includes("@")) {
        alert("Invaild email address")
        console.log("Invalid email address")
    } else {
        link.href = "signed-up.html"
        createButton.style.opacity = "1"
    }
    console.log(createButton.style.opacity)
}

createButton.addEventListener("click", checkInputs)