const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
}

const modal = document.querySelector(".modal");
const modalImg = modal ? modal.querySelector("img") : null;
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".open-cert").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".cert");
    if (!card || !modal || !modalImg) return;
    modalImg.src = card.dataset.src || "";
    modalImg.alt = card.dataset.title || "";
    modal.hidden = false;
  });
});

function closeModal() {
  if (!modal || !modalImg) return;
  modal.hidden = true;
  modalImg.src = "";
}
if (closeBtn) closeBtn.addEventListener("click", closeModal);
if (modal) modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

const langBtn = document.getElementById("langBtn");
let lang = "ar";
function applyLang(next) {
  lang = next;
  const html = document.documentElement;
  html.lang = next;
  html.dir = next === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-ar][data-en]").forEach((el) => {
    el.textContent = el.getAttribute("data-" + next);
  });
  if (langBtn) langBtn.textContent = next === "ar" ? "EN" : "عربي";
}
if (langBtn) langBtn.addEventListener("click", () => applyLang(lang === "ar" ? "en" : "ar"));
