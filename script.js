document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let formMessage = document.getElementById('form-message');

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Por favor, preencha todos os campos!';
        formMessage.style.color = 'red';
    } else {
        formMessage.textContent = 'Mensagem enviada com sucesso!';
        formMessage.style.color = 'green';
        document.getElementById('contact-form').reset();

        // Simulação de envio de e-mail
        window.location.href = `mailto:wdyna@hotmail.com?subject=Contato de ${name}&body=${message}`;
    }
});

function openWhatsApp() {
    let numbers = ["27999647264", "27996877074"];
    let message = "Olá, gostaria de mais informações sobre os serviços da Dyna.";

    window.open(`https://wa.me/${numbers[0]}?text=${encodeURIComponent(message)}`, '_blank');
}