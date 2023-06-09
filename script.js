const projetos = [   
    {        
        nome: "Portfolio",        
        url: "https://github.com/MatheusHMafra/Portfolio",    
    },
    {
        nome: "trabalho3",
        url: "https://github.com/MatheusHMafra/trabalho3",
    },
];

const miniprojetos = [
    {
        nome: "Mastermind",
        url: "https://github.com/MatheusHMafra/Mastermind",
    },
    {
        nome: "sudoku-game",
        url: "https://github.com/MatheusHMafra/sudoku-game",
    },
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
    document.body.classList.toggle('dark-mode');
    updateImagens();
    updateProjetos();
    updateMiniProjetos();
}

// Contate-me parte
function enviarMensagem() {
    const txtcolor = getComputedStyle(document.body).getPropertyValue('--accent-color').replace(/[^a-z0-9]/gi, '');

    const request = new XMLHttpRequest();
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("subject").value;
    const mensagem = document.getElementById("message").value;

    request.open("POST", "https://discord.com/api/webhooks/1106429683492462653/R9a8JMS9TRBtN-uI62StGXzF_rQ-R28SHPDt4VJGor2NW5vRNSIP26QRoffd24TR1whV");
    request.setRequestHeader('Content-type', 'application/json');
    
    var myEmbed = {
      author: {
        name: nome,
      },
      title: assunto,
      description: "Email: " + email + "\nMensagem: " + mensagem,
      color: hexToDecimal(txtcolor)
    }
    
    var params = {
      username: "Portfolio",
      embeds: [ myEmbed ]
    }
    request.send(JSON.stringify(params));
    
    // Converter cor
    function hexToDecimal(hex) {
      return parseInt(hex.replace("#",""), 16)
    }
}
