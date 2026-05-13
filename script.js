const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("has-shadow", window.scrollY > 8);
});

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    formNote.textContent = "Thanks. Your request is ready for follow-up. For urgent service, call 201-555-1234.";
  });
}
