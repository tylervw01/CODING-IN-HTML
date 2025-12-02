// CODING-IN-HTML Basic JS Handling

// Example: Button click interaction
document.addEventListener("DOMContentLoaded", () => {
  const vibeBtn = document.getElementById("vibeBtn");

  vibeBtn.addEventListener("click", () => {
    alert("Welcome to the VIBE CODING-IN-HTML Repo!");
  });
});

// Example: Dynamic card highlight
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.border = "2px solid #00ffcc";
  });
  card.addEventListener("mouseleave", () => {
    card.style.border = "none";
  });
});

// Example: Simple theme toggle
function toggleTheme() {
  document.body.classList.toggle("light-theme");
}
