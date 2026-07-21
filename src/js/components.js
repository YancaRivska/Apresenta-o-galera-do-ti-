async function loadComponent(selector, componentPath) {
  const container = document.querySelector(selector);

  if (!container) {
    return;
  }

  try {
    const response = await fetch(componentPath);

    if (!response.ok) {
      throw new Error(`Não foi possível carregar: ${componentPath}`);
    }

    container.innerHTML = await response.text();
  } catch (error) {
    console.error("Erro ao carregar componente:", error);
  }
}

async function initializeComponents() {
  await Promise.all([
    loadComponent("[data-header]", "/components/header.html"),
    loadComponent("[data-footer]", "/components/footer.html")
  ]);

  document.dispatchEvent(new CustomEvent("componentsLoaded"));
}

document.addEventListener("DOMContentLoaded", initializeComponents);