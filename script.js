function enviarMensagem() {
    const request = new XMLHttpRequest();
    const webhookUrl = 'https://discord.com/api/webhooks/1103511180401704980/ObqpLGe2TKUfQKlG6KTr482o7ggjOinGIGfyGLtJ_1_CmheRLLL3MhHvgR9gHBeTtKdb';
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
