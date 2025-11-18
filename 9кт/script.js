 class UserList extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: "open" });
                this.shadowRoot.innerHTML = `
                    <style>
                        .container {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 10px;
                            font-family: Arial, sans-serif;
                        }
                        .user {
                            border: 1px solid #ccc;
                            border-radius: 6px;
                            padding: 10px;
                            width: 200px;
                            background: #f9f9f9;
                        }
                        .loading, .error {
                            font-style: italic;
                            color: gray;
                            text-align: center;
                            padding: 20px;
                        }
                        .error {
                            color: red;
                        }
                    </style>
                    <div class="status loading">Загрузка данных...</div>
                    <div class="container"></div>
                `;
            }
            async connectedCallback() {
                const container = this.shadowRoot.querySelector(".container");
                const status = this.shadowRoot.querySelector(".status");
                const limit = parseInt(this.getAttribute("limit")) || 10;
                try {
                    
                    const response = await fetch("https://jsonplaceholder.typicode.com/users");
                    
                   
                    if (!response.ok) {
                        throw new Error(`Ошибка сети: ${response.status}`);
                    }
                    
                    const users = await response.json();

                    
                    status.remove();
                    const usersToShow = users.slice(0, limit);
                    usersToShow.forEach(user => {
                        const card = document.createElement("div");
                        card.className = "user";
                      
                        card.innerHTML = `
                            <h4>${user.name}</h4>
                            <p><b>Email:</b> ${user.email}</p>
                            <p><b>Город:</b> ${user.address.city}</p>
                        `;
                        container.appendChild(card);
                    });

                } catch (error) {
                    
                    status.className = "status error";
                    status.textContent = "Ошибка загрузки данных.";
                    console.error("Ошибка в компоненте <user-list>:", error);
                }
            }
        }

       
        customElements.define("user-list", UserList);