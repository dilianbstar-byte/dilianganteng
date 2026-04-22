function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if(user === "dilian" && pass === "1314") {
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
localStorage.clear();
