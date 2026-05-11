/* --- PARTE 1: VALIDAÇÃO E ENVIO (contato.html) --- */

function processarEnvio(event) { /* Função para processar o envio do formulário */
    event.preventDefault(); /* Impede o recarregamento da página para mostrar o alerta */

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Validação de campos vazios e formato de e-mail (Exigência do trabalho)
    if (nome === '' || mensagem === '') {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!email.includes('@') || !email.includes('.')) { /* Validação do formato do e-mail */
        alert("Por favor, insira um e-mail válido.");
        return;
    }

     /* Simulação de envio com mensagem de confirmação */
    alert("Mensagem enviada com sucesso! Obrigado, " + nome);
    
     /* Limpeza dos campos após o envio */
    document.getElementById('meuFormulario').reset();
}

// Conecta a função ao formulário se ele existir na página atual
const formulario = document.getElementById('meuFormulario');
if (formulario) {
    formulario.addEventListener('submit', processarEnvio);
}


/* --- PARTE 2: TEMA CLARO/ESCURO (Persistente) --- */

const btnTema = document.getElementById('botao-tema');
const corpo = document.body;

// Função para atualizar o texto do botão (ajuda na interação visual)
function atualizarTextoBotao() {
    if (corpo.classList.contains('dark-mode')) {
        btnTema.innerHTML = "☀️ Modo Claro";
    } else {
        btnTema.innerHTML = "🌙 Modo Escuro";
    }
}

// Verifica a preferência salva no LocalStorage ao carregar qualquer uma das 4 páginas
if (localStorage.getItem('tema') === 'escuro') {
    corpo.classList.add('dark-mode');
    atualizarTextoBotao();
}

// Evento para alternar o tema ao clicar no botão do menu
if (btnTema) {
    btnTema.addEventListener('click', () => {
        corpo.classList.toggle('dark-mode');
        atualizarTextoBotao();

        // Salva a escolha para persistir entre as páginas
        if (corpo.classList.contains('dark-mode')) {
            localStorage.setItem('tema', 'escuro');
        } else {
            localStorage.setItem('tema', 'claro');
        }
    });
}