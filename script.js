// Função para validar o formulário
function processarEnvio(event) {
    event.preventDefault(); // Impede a página de recarregar

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação de campos vazios
    if (nome === '' || email === '' || mensagem === '') {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Simulação de envio (Sugestão da imagem)
    alert("Mensagem enviada com sucesso! Obrigado, " + nome);
    
    // Limpeza dos campos (Sugestão da imagem)
    document.getElementById('meuFormulario').reset();
}

function trocarTema() {
    // Adiciona ou remove a classe 'dark-theme' do body
    document.body.classList.toggle('dark-theme');
}