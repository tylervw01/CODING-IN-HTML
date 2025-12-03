// CODING-IN-HTML Basic JS Handling

document.addEventListener("DOMContentLoaded", () => {
  // Example: Button click interaction
  const vibeBtn = document.getElementById("vibeBtn");
  if (vibeBtn) {
    vibeBtn.addEventListener("click", () => {
      alert("Welcome to the VIBE CODING-IN-HTML Repo!");
    });
  }

  // Example: Dynamic card highlight
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.border = "2px solid #00ffcc";
    });
    card.addEventListener("mouseleave", () => {
      card.style.border = "1px solid var(--border-color)";
    });
  });

  // Apply saved theme on load (or respect OS preference if none saved)
  (function initTheme() {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  })();

  // Toggle on button click
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }
});
