const API_URL = "http://localhost:5000/api";

// ------------------ REGISTER ------------------
const registerBtn = document.getElementById("registerBtn");
if (registerBtn) {
  registerBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    if (!email || !password) return alert("Email and password are required");

    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      alert(data.message);
      if (res.ok) window.location.href = "login.html";
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  });
}

// ------------------ LOGIN ------------------
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    if (!email || !password) return alert("Email and password are required");

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) return alert(data.message);

      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  });
}

// ------------------ DASHBOARD ------------------
const addNameBtn = document.getElementById("addNameBtn");
if (addNameBtn) {
  addNameBtn.addEventListener("click", addName);
  document.getElementById("logoutBtn")?.addEventListener("click", logout);
  window.addEventListener("DOMContentLoaded", loadNames);
}

// ------------------ HELPER ------------------
