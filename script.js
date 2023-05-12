const projetos = [
    {
        nome: "Mastermind",
        url: "https://github.com/MatheusHMafra/Mastermind",
    },
];

const miniprojetos = [
    {        
        nome: "Mastermind",        
        url: "https://github.com/MatheusHMafra/Mastermind",    
    },    
    {        
        nome: "Portfolio",        
        url: "https://github.com/MatheusHMafra/Portfolio",    
    }
];

// Projetos

function updateProjetos() {
    const color = getComputedStyle(document.body).getPropertyValue('--primary-color').replace(/[^a-z0-9]/gi, '');
    const container1 = document.getElementById('projetos-container');
    const links1 = container1.getElementsByTagName('a');

    for (let i = 0; i < links1.length; i++) {
        const link = links1[i];
        link.innerHTML = `<img src="https://github-readme-stats.vercel.app/api/pin/?username=MatheusHMafra&repo=${projetos[i].nome}&show_owner=true&bg_color=${color}&hide_border=true">`;
    }
}

function createProjetos() {
    const container1 = document.getElementById('projetos-container');

    projetos.forEach(projeto => {
        const a = document.createElement('a');
        a.href = projeto.url;
        a.title = projeto.nome;
        container1.appendChild(a);
    });

    updateProjetos();
}

createProjetos();

// Mini Projetos

function updateMiniProjetos() {
    const color = getComputedStyle(document.body).getPropertyValue('--primary-color').replace(/[^a-z0-9]/gi, '');
    const container2 = document.getElementById('mini-projetos-container');
    const links2 = container2.getElementsByTagName('a');

    for (let i = 0; i < links2.length; i++) {
        const link = links2[i];
        link.innerHTML = `<img src="https://github-readme-stats.vercel.app/api/pin/?username=MatheusHMafra&repo=${miniprojetos[i].nome}&show_owner=true&bg_color=${color}&hide_border=true">`;
    }
}

function createMiniProjetos() {
    const container2 = document.getElementById('mini-projetos-container');

    miniprojetos.forEach(miniprojeto => {
        const a = document.createElement('a');
        a.href = miniprojeto.url;
        a.title = miniprojeto.nome;
        container2.appendChild(a);
    });

    updateMiniProjetos();
}

createMiniProjetos();

// Dark Mode on the site
function toggleMode() {
    //document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    updateProjetos();
    updateMiniProjetos();
}

// Contate-me parte
// why can i do .env files buaa
// const webhookUrl = process.env.WEBHOOK_LINK;

// function enviarMensagem() {
//   const nome = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const assunto = document.getElementById("subject").value;
//   const mensagem = document.getElementById("message").value;
  
//   const mensagemJson = {
//     username: '$(nome)',
//     embeds: [
//       {
//         title: $(assunto),
//         description: $(mensagem),
//         footer: {
//           text: `Email: ${email}`
//         }
//       }
//     ]
//   };

//   fetch(webhookUrl, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(mensagemJson),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Erro ao enviar a mensagem.");
//       }
//       console.log("Mensagem enviada com sucesso!");
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("subject").value = "";
//       document.getElementById("message").value = "";
//     })
//     .catch((error) => {
//       console.error("Erro ao enviar a mensagem:", error);
//     });
// }