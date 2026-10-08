const sections = [
  {
    label: "Aplicaciones",
    apps: [
      {
        name: "App Envase",
        desc: "Carga de productos envasados",
        url: "https://app-envase.onrender.com",
        icon: "ti-package",
        accent: "red",
      },
      {
        name: "App Bandejas",
        desc: "Registro de bandejas prestadas",
        url: "https://app-bandejas.onrender.com",
        icon: "ti-layout-grid",
        accent: "red",
      },
      {
        name: "App Calidad",
        desc: "Recorridos y scoring de calidad",
        url: "https://app-calidad-vc1s.onrender.com",
        icon: "ti-chart-line",
        accent: "green",
      },
      {
        name: "Parte Diario",
        desc: "Notificaciones de turno — supervisores y mtto",
        url: "https://partediario.onrender.com",
        icon: "ti-clipboard-text",
        accent: "red",
      },
    ],
  },
  {
    label: "Mantenimiento",
    apps: [
      {
        name: "Gestión Mtto",
        desc: "Gestión de pagos del sector de mantenimiento",
        url: "https://cargagastos-mtto.onrender.com",
        icon: "ti-receipt",
        accent: "blue",
      },
      {
        name: "Planning",
        desc: "Planificación de obras y cronograma",
        url: "https://planning-5g8n.onrender.com",
        icon: "ti-calendar-stats",
        accent: "blue",
      },
      {
        name: "Rotación Mtto",
        desc: "Rotación de turnos del personal de mantenimiento",
        url: "https://rotacionmtto.onrender.com",
        icon: "ti-users-group",
        accent: "blue",
        test: true,
      },
    ],
  },
  {
    label: "En testeo · pendientes de actualización",
    apps: [
      {
        name: "App Stock",
        desc: "Control de inventario",
        url: "https://app-stock-zepa.onrender.com",
        icon: "ti-packages",
        accent: "amber",
        test: true,
      },
      {
        name: "App Cámara",
        desc: "Disponibilidad de la cámara de fermentado",
        url: "https://appcamara.onrender.com",
        icon: "ti-temperature",
        accent: "amber",
        test: true,
      },
    ],
  },
];

const TI_YEAR = "TI 2026";

function renderApps() {
  const container = document.getElementById("app-links");

  sections.forEach((section) => {
    const group = document.createElement("div");
    group.className = "lt-group";

    const label = document.createElement("div");
    label.className = "lt-section-label";
    label.textContent = section.label;
    group.appendChild(label);

    section.apps.forEach((app) => {
      const card = document.createElement("a");
      card.className = `lt-card accent-${app.accent}${app.test ? " is-test" : ""}`;
      card.href = app.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.setAttribute("aria-label", `${app.name} — ${app.desc}`);

      card.innerHTML = `
        <div class="lt-icon icon-${app.accent}">
          <i class="ti ${app.icon}" aria-hidden="true"></i>
        </div>
        <div class="lt-info">
          <div class="lt-app-name">${app.name}</div>
          <div class="lt-app-desc">${app.desc}</div>
        </div>
        ${app.test
          ? '<span class="lt-test-badge"><i class="ti ti-flask" aria-hidden="true"></i>Testeo</span>'
          : `<span class="lt-ti-badge">${TI_YEAR}</span>`}
        <i class="ti ti-arrow-right lt-arrow" aria-hidden="true"></i>
      `;

      group.appendChild(card);
    });

    container.appendChild(group);
  });
}

document.addEventListener("DOMContentLoaded", renderApps);ss
