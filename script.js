document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      msg.textContent = "Thank you! Your message has been sent (demo only).";
      msg.style.color = "green";
      form.reset();
    });
  }
});
// Optional: smooth fade-in for page load
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";
});
