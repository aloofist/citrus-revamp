const userEl = document.getElementById("user-el")
const userName = localStorage.getItem("user")
const signOutBtn = document.getElementById("sign-out")

userEl.innerText = userName

signOutBtn.addEventListener("click", () => {
    localStorage.removeItem("user")
});