async function loadComponent(id, file) {
  const element = document.getElementById(id);

  if (!element) return;

  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Erro ao carregar ${file}`);
    }

    element.innerHTML = await response.text();

    if (window.lucide) {
      lucide.createIcons();
    }
  } catch (error) {
    console.error("Erro ao carregar componente:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("footer", "./components/footer.html");
});