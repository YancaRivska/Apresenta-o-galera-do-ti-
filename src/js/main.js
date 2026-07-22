function setCurrentYear() {
  const yearElements = document.querySelectorAll("[data-current-year]");

  yearElements.forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}

function normalizePath(path) {
  if (path === "/" || path.endsWith("/index.html")) {
    return "/";
  }

  return path.replace(/\/$/, "");
}

function highlightCurrentPage() {
  const currentPath = normalizePath(window.location.pathname);

  const navigationLinks = document.querySelectorAll(
    ".site-header__navigation a"
  );

  navigationLinks.forEach((link) => {
    const linkPath = normalizePath(new URL(link.href).pathname);

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