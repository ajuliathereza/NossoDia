
const channels = {

    "primeiro-contato": {

        title: "primeiro-contato",

        welcome: "Onde tudo começou...",

        messages: [

            {
                text: "Eu sei que você acha que eu mandei solicitação e não ia te chamar para conversar, mas eu ia sim, amor.",
                delay: 1200
            },

            {
                text: "Vc chamava a minha atenção desde aqueles primeiros momentos que vc entrou no servidor.",
                delay: 2200
            },

             {
                text: "E quando eu ouvi tua voz eu já sabia que eu queria te conhecer melhor.",
                delay: 1800
            },

{
                text: "Todos queriam chamar a tua atenção, mas eu queria chamar a sua. E eu consegui, mor.",
                delay: 1800
            },

            {
                text: "E quando começamos a conversar, eu já sabia que você era especial.",
                delay: 1800
            },

            {
                text: "Eu amo você. Obrigada por me deixar te conhecer. ❤️",
                delay: 1800
            },

        ]

    },


    "como-isso-aconteceu": {

        title: "como-isso-aconteceu",

        welcome: "Algumas coisas simplesmente acontecem.",

        messages: [

            {
                text: "Quando você chegou com esse jeitinho seu, com essa voz e esse sotaque gostoso...",
                delay: 1200
            },

            {
                text: "Eu já caí na sua na hora, mor.",
                delay: 2000
            },

            {
                text: "E depois que eu te vi, tudo ficou ainda mais profundo.",
                delay: 1800
            },

            {
                text: "Te desejei ainda mais. Meu amor por você só cresce, mor. ❤️",
                delay: 2200
            },

            {
                text: "Eu não sei o que é que há comigo, mas eu só sei que eu te amo e quero você pra sempre.",
                delay: 1800
            },

            {
                text: "Eu estou aqui pra ser tua mulher, pra te amar, pra te fazer feliz e pra te dar tudo o que você merece.",
                delay: 1800
            },

            {
                text: "Esses são os meus desejos mais sinceros e genuínos, mor. Eu te amo demais.",
                delay: 1800
            },

        ]

    },


    "momentos-memoraveis": {

        title: "momentos-memoraveis",

        welcome: "Algumas lembranças que guardo com muito carinho.",

        messages: [

            {
                text: "Eu lembro dos nossos momentos e eles me fazem sorrir.",
                delay: 1200
            },

            {
                text: "A gente conquistou tanta confiança uma da outra. Nós somos tão boas juntas, amor.",
                delay: 2000
            },

            {
                text: "Eu me alegro tanto de ter você na minha vida.",
                delay: 1800
            },

            {
                text: "Quando a gente joga juntas e fica demonstrando carinho...",
                delay: 2000
            },

            {
                text: "Quando a gente vê filme juntas...",
                delay: 1800
            },

            {
                text: "E quando dormimos, acordamos, fazemos amor e conversamos por horas.",
                delay: 2200
            },

            {
                text: "Te amo muito, mor. ❤️",
                delay: 1800
            }

        ]

    },


    "nossas-conversas": {

        title: "nossas-conversas",

        welcome: "Uma conversa que eu nunca quero que termine.",

        messages: [

            {
                text: "Sempre é maravilhoso para mim te conhecer mais.",
                delay: 1200
            },

            {
                text: "Saber do teu coração, das coisas que você gosta e do que não gosta.",
                delay: 2000
            },

            {
                text: "Por favor, sempre me conta de você.",
                delay: 1800
            },

            {
                text: "Eu vou amar saber tudo e vou estar aqui sorrindo com cada palavra. ❤️",
                delay: 2200
            }

        ]

    },


    "coisas-que-eu-gosto": {

        title: "coisas-que-eu-gosto-em-voce",

        welcome: "Cinco coisas que eu amo em você. E ainda faltam tantas...",

        messages: [

            {
                text: "01 — Tua voz. Amo teu jeito de falar, tuas maneiras de dizer as palavras. Me encanta.",
                delay: 1500
            },

            {
                text: "02 — Teus olhos. Amo como tu olha e como eu sinto meu coração quando tu me olha com carinho.",
                delay: 1800
            },

            {
                text: "03 — O jeito que tua voz fica gostosa quando a gente faz amor. Eu conheço mais esse teu lado e quero saber mais e mais e ter só pra mim.",
                delay: 2000
            },

            {
                text: "04 — Teu corpo me deixa louca. Fico com vontade, te querendo sempre, e você não sai da minha mente por nada.",
                delay: 2000
            },

            {
                text: "05 — Eu te admiro e respeito tanto. Você é esforçada, amorosa e incrível com as pessoas que ama e com quem está ao seu redor.",
                delay: 2200
            },

            {
                text: "Você é incrível, meu amor. Nunca se esqueça disso. ❤️",
                delay: 1800
            }

        ]

    },


    "mensagem-final": {

        title: "mensagem-final",

        welcome: "Uma última mensagem. Mas não o fim da nossa história.",

        messages: [

            {
                text: "Amor, isso é muito singelo perto do que você merece.",
                delay: 1500
            },

            {
                text: "E eu espero ainda te dar tudo o que você merece, tudo o que você precisa, tudo o que você quiser.",
                delay: 2200
            },

            {
                text: "Eu quero ser seu porto seguro. Quero ser sua mulher, sua esposa.",
                delay: 2200
            },

            {
                text: "Eu, quando digo que ainda caso contigo, é o que eu quero dizer mesmo. É verdade.",
                delay: 2400
            },

            {
                text: "Eu te amo demais.",
                delay: 2000
            },

            {
                text: "Eu sei que é pouco tempo e que ainda temos muito o que viver, passar e enfrentar.",
                delay: 2200
            },

            {
                text: "E eu quero fazer isso com você. Estar com você. E assim vai ser.",
                delay: 2200
            },

            {
                text: "Porque eu te vejo. Você é a coisa mais linda do mundo.",
                delay: 2200
            },

            {
                text: "Te amo tanto, amor. ❤️",
                delay: 2500
            },

             {
                text: "Não some, tá?",
                delay: 2200
            },

        ]

    }

};


// ELEMENTOS
const channelButtons = document.querySelectorAll(".channel");

const channelTitle = document.getElementById("channelTitle");

const messageList = document.getElementById("messageList");

const typingIndicator = document.getElementById("typingIndicator");

const notification = document.getElementById("notification");

const notificationText = document.getElementById("notificationText");

const messagesArea = document.getElementById("messagesArea");

let currentChannel = null;

let typingTimeout = null;


// MENU MOBILE

const mobileMenuButton = document.getElementById("mobileMenuButton");

mobileMenuButton.addEventListener("click", () => {

    const isOpen = document.body.classList.toggle("mobile-menu-open");

    mobileMenuButton.setAttribute("aria-expanded", isOpen);

});

// Fechar menu ao tocar fora

document.addEventListener("click", (event) => {

    if (!document.body.classList.contains("mobile-menu-open")) {
        return;
    }

    if (
        !event.target.closest(".channels-sidebar") &&
        !event.target.closest(".mobile-menu-button")
    ) {
        document.body.classList.remove("mobile-menu-open");
        mobileMenuButton.setAttribute("aria-expanded", "false");
    }

});

// Fechar com ESC

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        document.body.classList.remove("mobile-menu-open");
        mobileMenuButton.setAttribute("aria-expanded", "false");
    }

});


// TROCAR DE CANAL
channelButtons.forEach(button => {

    button.addEventListener("click", () => {

        const channelName = button.dataset.channel;

        openChannel(channelName);

    });

});


// ABRIR CANAL
function openChannel(channelName) {

    const channel = channels[channelName];

    if (!channel) return;

    // Fechar menu mobile ao selecionar um canal

document.body.classList.remove("mobile-menu-open");

mobileMenuButton.setAttribute("aria-expanded", "false");

    currentChannel = channelName;

    // Atualizar botão ativo
    channelButtons.forEach(button => {

        button.classList.toggle(
            "active-channel",
            button.dataset.channel === channelName
        );

    });

    // Atualizar título
    channelTitle.textContent = channel.title;

    // Limpar mensagens anteriores
    messageList.innerHTML = "";

    // Mostrar apresentação
    const welcome = document.createElement("div");

    welcome.className = "channel-welcome";

    welcome.innerHTML = `
        <div class="channel-welcome-icon">#</div>
        <h2>${channel.title}</h2>
        <p>${channel.welcome}</p>
        <span>Este é o começo deste canal.</span>
    `;

    messageList.appendChild(welcome);

    // Limpar timers anteriores
    clearTimeout(typingTimeout);

    typingIndicator.classList.remove("hidden");

    // Iniciar mensagens
    showMessages(channel.messages, 0);

}


// EXIBIR MENSAGENS GRADUALMENTE
function showMessages(messages, index) {

    if (index >= messages.length) {

        typingIndicator.classList.add("hidden");

        return;

    }

    const message = messages[index];

    typingIndicator.classList.remove("hidden");

    typingTimeout = setTimeout(() => {

        typingIndicator.classList.add("hidden");

        createMessage(message.text);

        showNotification(message.text);

        const nextDelay = message.delay || 1500;

        typingTimeout = setTimeout(() => {

            showMessages(messages, index + 1);

        }, nextDelay);

    }, 1000);

}


// CRIAR MENSAGEM
function createMessage(text) {

    const messageElement = document.createElement("article");

    messageElement.className = "message";

    messageElement.innerHTML = `

        <div class="message-avatar">

            <img
                src="assets/avatars/julia.jpg"
                alt="Julia"
            >

        </div>

        <div class="message-body">

            <div class="message-header">

                <strong>Julia</strong>

                <span class="message-tag">♡</span>

                <time>agora</time>

            </div>

            <p class="message-text"></p>

            <div class="message-reactions">

                <button class="reaction-button">
                    ❤️ <span>1</span>
                </button>

            </div>

        </div>

    `;

    messageElement.querySelector(".message-text").textContent = text;

    messageElement
        .querySelector(".reaction-button")
        .addEventListener("click", event => {

            const button = event.currentTarget;

            const count = button.querySelector("span");

            const active = button.classList.toggle("reacted");

            count.textContent = active ? "2" : "1";

        });

    messageList.appendChild(messageElement);

    messagesArea.scrollTo({

        top: messagesArea.scrollHeight,

        behavior: "smooth"

    });

}


// NOTIFICAÇÃO
function showNotification(text) {

    notificationText.textContent = "Julia: " + text;

    notification.classList.remove("hidden");

    setTimeout(() => {

        notification.classList.add("hidden");

    }, 3500);

}


// ABRIR O PRIMEIRO CANAL
openChannel("primeiro-contato");

