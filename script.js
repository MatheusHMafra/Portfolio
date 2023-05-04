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

const container1 = document.getElementById('projetos-container');

projetos.forEach(projeto => {
    const a = document.createElement('a');
    a.href = projeto.url;
    a.title = projeto.nome;
    a.innerHTML = `<img src="https://github-readme-stats.vercel.app/api/pin/?username=MatheusHMafra&repo=${projeto.nome}&show_owner=true&bg_color=94e4c6&hide_border=true">`;
    container1.appendChild(a);
});

// Mini Projetos

const container2 = document.getElementById('mini-projetos-container');

miniprojetos.forEach(miniprojeto => {
    const a = document.createElement('a');
    a.href = miniprojeto.url;
    a.title = miniprojeto.nome;
    a.innerHTML = `<img src="https://github-readme-stats.vercel.app/api/pin/?username=MatheusHMafra&repo=${miniprojeto.nome}&show_owner=true&bg_color=94e4c6&hide_border=true">`;
    container2.appendChild(a);
});

// Enviar via discord
/*
function enviarMensagem() {
    const request = new XMLHttpRequest();
    const webhookUrl = 'link';
    const form = document.querySelector('form');
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const subject = form.querySelector('#subject').value;
    const message = form.querySelector('#message').value;
    const payload = {
        username: name,
        embeds: [
            {
                title: subject,
                description: message,
                footer: {
                    text: `Sent from ${email}`,
                },
            },
        ],
    };
    request.open("POST", webhookUrl)
    request.setRequestHeader('Content-type', 'application/json');

    request.send(JSON.stringify(payload));
    request.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("Webhook message sent successfully.");
        } else if (this.readyState === XMLHttpRequest.DONE && this.status !== 200) {
            console.error("Error sending webhook message:", this.responseText);
        }
    };
}
*/
