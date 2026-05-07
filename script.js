// Função para validar o formulário
function processarEnvio(event) {
    event.preventDefault(); // Impede a página de recarregar

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    /* Validação de campos vazios */
    if (nome === '' || email === '' || mensagem === '') {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Simulação de envio
    alert("Mensagem enviada com sucesso! Obrigado, " + nome);
    
    /* Limpeza dos campos */ 
    document.getElementById('meuFormulario').reset();
}

// Seleciona o botão e o corpo da página
const btnTema = document.getElementById('botao-tema');
const corpo = document.body;

// 1. Ao carregar a página, verifica se o usuário já tinha escolhido o tema escuro
if (localStorage.getItem('tema') === 'escuro') {
    corpo.classList.add('dark-mode');
}

// Adiciona o evento de clique ao botão
btnTema.addEventListener('click', () => {
    // Alterna a classe dark-mode
    corpo.classList.toggle('dark-mode');

    // Salva a preferência no LocalStorage para não perder ao recarregar
    if (corpo.classList.contains('dark-mode')) {
        localStorage.setItem('tema', 'escuro');
    } else {
        localStorage.setItem('tema', 'claro');
    }
});