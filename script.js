// DATA LOGIN (bisa kamu ganti)
const USERNAME = "admin";
const PASSWORD = "1234";

// Ambil element
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

// Login
loginBtn.addEventListener("click", () => {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if(user === USERNAME && pass === PASSWORD) {
        localStorage.setItem("login", "true");
        showPortfolio();
    } else {
        alert("Username atau password salah!");
    }
});

// Tampilkan portfolio
function showPortfolio() {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("portfolioPage").classList.remove("hidden");
}

// Logout
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("login");
    location.reload();
});

// Auto login
if(localStorage.getItem("login") === "true") {
    showPortfolio();
}
