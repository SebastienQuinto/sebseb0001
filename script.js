const text = "UPCOMING WEB DEVELOPER";
let i = 0;

function type() {
  const typedText = document.querySelector(".typed-text");
  if (!typedText) return; 

  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  type();


  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return; 

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggleBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
  });
});
