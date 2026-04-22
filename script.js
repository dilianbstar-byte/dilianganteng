// ambil elemen
const loginPage = document.getElementById("loginPage");
const portfolio = document.querySelector(".portfolio-content");
const loginBtn = document.getElementById("loginBtn");

// CEK: kalau sudah login sebelumnya
if (localStorage.getItem("login") === "true") {
    showPortfolio();
}

// EVENT LOGIN
loginBtn.addEventListener("click", function () {
    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    // akun default (bisa kamu ubah)
    if (username === "admin" && password === "123") {
        localStorage.setItem("login", "true");
        showPortfolio();
    } else {
        alert("❌ Username atau Password salah!");
    }
});

// FUNCTION tampilkan portfolio
function showPortfolio() {
    loginPage.style.display = "none";
    portfolio.style.display = "flex";

    // animasi smooth
    portfolio.style.opacity = "0";
    setTimeout(() => {
        portfolio.style.transition = "0.5s";
        portfolio.style.opacity = "1";
    }, 100);
}

// OPTIONAL: tekan ENTER bisa login
document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        loginBtn.click();
    }
});

// OPTIONAL: LOGOUT (kalau nanti kamu tambah tombol)
function logout() {
    localStorage.removeItem("login");
    location.reload();
}
localStorage.clear();