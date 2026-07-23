const ecosystemGroups = {
  taberna: {
    icon: "☕",
    title: "Taberna | Bar da T.I",
    tag: "Coração da comunidade",
    description:
      "O ponto de encontro informal da comunidade, criado para conversas, troca de experiências, networking e construção de conexões reais entre os membros.",
    features: [
      "Networking entre membros",
      "Troca de experiências",
      "Conversas sobre tecnologia e carreira"
    ]
  },

  laboratorio: {
    icon: "▱",
    title: "Laboratório — Criando meu portfólio",
    tag: "Projetos e experiência prática",
    description:
      "Ambiente colaborativo para desenvolver portfólios, revisar projetos, estudar novas tecnologias e transformar conhecimento em entregas práticas.",
    features: [
      "Construção de portfólio",
      "Revisão colaborativa de projetos",
      "Aplicação prática de tecnologias"
    ]
  },

  "ti-girls": {
    icon: "♀",
    title: "TI Girls — Só para meninas",
    tag: "Representatividade e conexão",
    description:
      "Espaço dedicado à conexão, ao desenvolvimento e ao fortalecimento de meninas e mulheres que estudam ou trabalham com tecnologia.",
    features: [
      "Networking e acolhimento",
      "Compartilhamento de oportunidades",
      "Desenvolvimento profissional"
    ]
  },

  english: {
    icon: "◎",
    title: "English in Practice",
    tag: "Preparação para o mercado global",
    description:
      "Grupo voltado à prática do inglês aplicado à tecnologia, entrevistas, reuniões e diferentes situações profissionais.",
    features: [
      "Conversação em inglês",
      "Vocabulário técnico",
      "Preparação para entrevistas"
    ]
  },

  "tech-fit": {
    icon: "⚙",
    title: "Tech Fit Rat | GymRat do TI",
    tag: "Saúde e comunidade",
    description:
      "Espaço de integração para compartilhar práticas esportivas, rotinas saudáveis e experiências relacionadas ao bem-estar.",
    features: [
      "Integração entre os membros",
      "Práticas esportivas",
      "Iniciativas de bem-estar"
    ]
  },

  "game-mode": {
    icon: "▣",
    title: "Game Mode Co-op",
    tag: "Diversão e integração",
    description:
      "Grupo criado para integração por meio de jogos, atividades cooperativas, torneios e momentos de descontração.",
    features: [
      "Jogos cooperativos",
      "Torneios da comunidade",
      "Integração entre os participantes"
    ]
  }
};

function initializeEcosystemExplorer() {
  const buttons = Array.from(
    document.querySelectorAll("[data-group]")
  );

  const detailPanel = document.querySelector(
    "#ecosystem-detail"
  );

  if (!buttons.length || !detailPanel) {
    return;
  }

  const title = detailPanel.querySelector(
    "[data-detail-title]"
  );

  const tag = detailPanel.querySelector(
    "[data-detail-tag]"
  );

  const description = detailPanel.querySelector(
    "[data-detail-description]"
  );

  const icon = detailPanel.querySelector(
    "[data-detail-icon]"
  );

  const backgroundIcon = detailPanel.querySelector(
    "[data-detail-background-icon]"
  );

  const features = detailPanel.querySelector(
    "[data-detail-features]"
  );

  function updateFeatures(items) {
    const featureElements = items.map((feature) => {
      const item = document.createElement("li");

      item.textContent = feature;

      return item;
    });

    features.replaceChildren(...featureElements);
  }

  function restartPanelAnimation() {
    detailPanel.classList.remove("is-changing");

    void detailPanel.offsetWidth;

    detailPanel.classList.add("is-changing");
  }

  function selectGroup(button) {
    const groupKey = button.dataset.group;
    const group = ecosystemGroups[groupKey];

    if (!group) {
      return;
    }

    buttons.forEach((currentButton) => {
      const isSelected = currentButton === button;

      currentButton.classList.toggle(
        "is-active",
        isSelected
      );

      currentButton.setAttribute(
        "aria-selected",
        String(isSelected)
      );

      currentButton.setAttribute(
        "tabindex",
        isSelected ? "0" : "-1"
      );
    });

    detailPanel.setAttribute(
      "aria-labelledby",
      button.id
    );

    icon.textContent = group.icon;
    backgroundIcon.textContent = group.icon;
    title.textContent = group.title;
    tag.textContent = group.tag;
    description.textContent = group.description;

    updateFeatures(group.features);
    restartPanelAnimation();
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      selectGroup(button);
    });

    button.addEventListener("keydown", (event) => {
      const acceptedKeys = [
        "ArrowDown",
        "ArrowUp",
        "ArrowRight",
        "ArrowLeft",
        "Home",
        "End"
      ];

      if (!acceptedKeys.includes(event.key)) {
        return;
      }

      event.preventDefault();

      let nextIndex = index;

      if (
        event.key === "ArrowDown" ||
        event.key === "ArrowRight"
      ) {
        nextIndex = (index + 1) % buttons.length;
      }

      if (
        event.key === "ArrowUp" ||
        event.key === "ArrowLeft"
      ) {
        nextIndex =
          (index - 1 + buttons.length) % buttons.length;
      }

      if (event.key === "Home") {
        nextIndex = 0;
      }

      if (event.key === "End") {
        nextIndex = buttons.length - 1;
      }

      const nextButton = buttons[nextIndex];

      nextButton.focus();
      selectGroup(nextButton);
    });
  });
}

document.addEventListener(
  "DOMContentLoaded",
  initializeEcosystemExplorer
);