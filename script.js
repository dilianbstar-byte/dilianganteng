const USERNAME = "dilan";
const PASSWORD = "1234";

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

loginBtn.addEventListener("click", () => {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if(user === USERNAME && pass === PASSWORD) {
        localStorage.setItem("login", "true");
        showPortfolio();
    } else {
        alert("Login gagal!");
    }
});

function showPortfolio() {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("portfolioPage").classList.remove("hidden");
}

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("login");
    location.reload();
});

if(localStorage.getItem("login") === "true") {
    showPortfolio();
}
