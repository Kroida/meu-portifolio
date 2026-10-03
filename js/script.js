/* =========================
   MENU MOBILE
========================= */

const menuButton = document.querySelector("#menuButton");
const navbar = document.querySelector("#navbar");

menuButton.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeButton = document.querySelector("#themeButton");

const savedTheme = localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeButton.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const lightMode =
        document.body.classList.contains("light");


    if (lightMode) {

        themeButton.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        themeButton.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});


/* =========================
   ANIMAÇÃO AO SCROLL
========================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* =========================
   DADOS DOS PROJETOS
========================= */

const projects = {

    project1: {

        title: "Sistema de Cardápio",

        description: `

            <h3>Objetivo</h3>

            <p>
                O projeto está sendo criado para estudar a integração
                entre uma aplicação React e uma API com Spring Boot.
            </p>


            <h3>Arquitetura</h3>

            <p>
                O Back-end está sendo desenvolvido utilizando Java e
                Spring Boot, responsável pela API REST e pela
                comunicação com o PostgreSQL.
            </p>

            <p>
                O Front-end utilizará React para consumir os dados
                da API e apresentar os produtos dinamicamente.
            </p>


            <h3>O que aprendi até o momento</h3>

            <p>
                Como funcionam API's Rest, manipulação de endpoints,
                injeção de dependências com beans, além de colocar
                em prática os princípios SOLID por meio da dinamicidade
                do spring boot.
            </p>

        `

    },


    project2: {

        title: "Extrator OCR",

        description: `

            <h3>Problema</h3>

            <p>
                Eu estava modando skyrim, então uma hora eu
                senti a necessidade de catalogar mod por 
                mod, então criei o programa.
            </p>


            <h3>OCR</h3>

            <p>
                O Tesseract é utilizado para reconhecer e
                extrair textos presentes nas imagens.
            </p>


            <h3>Pesquisa automática</h3>

            <p>
                Após a extração, o programa utiliza DDGS para
                realizar pesquisas e armazenar URL, nome e
                descrição dos resultados.
            </p>


            <h3>Performance</h3>

            <p>
                Threading foi utilizado em diferentes partes
                da aplicação para evitar que tarefas demoradas
                travassem a interface.
            </p>

        `

    },


    project3: {

        title: "Sistema de Lanchonete",

        description: `

            <h3>Objetivo</h3>

            <p>
                Projeto da faculdade que tem como proposta
                simular um site real de uma loja/e-commerce.
            </p>


            <h3>Autenticação</h3>

            <p>
                O projeto possui cadastro e login de usuários,
                sessões PHP e proteção de senhas utilizando
                password_hash e password_verify.
            </p>


            <h3>Administração</h3>

            <p>
                Um painel administrativo permite realizar
                operações CRUD de usuários e gerenciar
                dinamicamente os produtos exibidos no sistema.
            </p>


            <h3>Infraestrutura</h3>

            <p>
                O banco MySQL é executado em container Docker,
                facilitando a configuração do ambiente.
            </p>

        `

    }

};


/* =========================
   MODAL DOS PROJETOS
========================= */

const modal =
    document.querySelector("#projectModal");

const modalTitle =
    document.querySelector("#modalTitle");

const modalDescription =
    document.querySelector("#modalDescription");

const modalClose =
    document.querySelector("#modalClose");


document
    .querySelectorAll(".details-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const projectId =
                    button.dataset.project;

                const project =
                    projects[projectId];


                modalTitle.textContent =
                    project.title;

                modalDescription.innerHTML =
                    project.description;

                modal.classList.add("active");

                document.body.style.overflow =
                    "hidden";

            }
        );

    });


function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);