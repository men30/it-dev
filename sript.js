// Движение курсора
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Глитч-эффект при ошибке в форме
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = form.querySelectorAll("input, textarea");
  let hasError = false;

  inputs.forEach((input) => {
    if (!input.value) {
      input.style.animation = "glitch 0.5s linear";
      hasError = true;
      setTimeout(() => (input.style.animation = ""), 500);
    }
  });

  if (!hasError) form.reset();
});

// Перетаскивание проектов
const cards = document.querySelectorAll(".project-card");
cards.forEach((card) => {
  card.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", card.id);
    card.style.opacity = "0.5";
  });

  card.addEventListener("dragend", () => {
    card.style.opacity = "1";
  });
});
