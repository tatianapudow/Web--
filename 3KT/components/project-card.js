class ProjectCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const title = this.getAttribute("title") || "Без названия";
    const desc = this.getAttribute("desc") || "";

    shadow.innerHTML = `
      <style>
        .card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.15);
          padding: 15px;
          transition: transform 0.2s ease;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        h3 {
          margin-top: 0;
          font-size: 1.2em;
          color: #333;
        }
        p {
          font-size: 0.95em;
          color: #555;
        }
        button {
          margin-top: 10px;
          padding: 8px 12px;
          border: none;
          border-radius: 6px;
          background: #007BFF;
          color: white;
          cursor: pointer;
        }
        button:hover {
          background: #0056b3;
        }
      </style>
      <div class="card">
        <h3>${title}</h3>
        <p>${desc}</p>
        <button>Подробнее</button>
      </div>
    `;

    shadow.querySelector("button").addEventListener("click", () => {
      const hostId = this.id;
      if (hostId) {
        window.location.hash = `#projects/${hostId}`;
      } else {
        window.location.hash = "#projects";
      }
    });
  }
}

customElements.define("project-card", ProjectCard);
