function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if(user === "admin" && pass === "1234") {
        localStorage.setItem("login", "true");
        showPortfolio();
    } else {
        alert("Login gagal!");
    }
}

function showPortfolio() {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("portfolioPage").classList.remove("hidden");
}

function logout() {
    localStorage.removeItem("login");
    location.reload();
}

// Auto login
if(localStorage.getItem("login") === "true") {
    showPortfolio();
}