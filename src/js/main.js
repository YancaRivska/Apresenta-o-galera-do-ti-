function setCurrentYear() {
  const yearElement = document.querySelector("[data-current-year]");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

function highlightCurrentPage() {
  const currentPath = window.location.pathname;
  const navigationLinks = document.querySelectorAll(
    ".site-header__navigation a"
  );

  navigationLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    if (linkPath === currentPath) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });
}

document.addEventListener("componentsLoaded", () => {
  setCurrentYear();
  highlightCurrentPage();
});