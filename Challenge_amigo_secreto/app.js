// Array para armazenar a lista de amigos.
let amigos = [];

/**
 * Função para adicionar um novo amigo à lista.
 */
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    amigos.push(nomeAmigo);

    const itemLista = document.createElement('li');
    itemLista.textContent = nomeAmigo;
    listaAmigos.appendChild(itemLista);

    inputAmigo.value = '';
    inputAmigo.focus();
}

/**
 * Função que gerencia o estado do botão principal: ou sorteia ou reinicia.
 * Esta função é chamada pelo onclick do botão.
 */
function gerenciarSorteioReset() {
    const botao = document.querySelector('.button-draw');

    // Verifica se o texto do botão indica que um sorteio já foi feito.
    if (botao.textContent.includes('Novo Sorteio')) {
        // Se sim, executa a lógica de reiniciar.
        reiniciarSorteio();
        botao.innerHTML = `
            <img src="assets/play_circle_outline.png" alt="Ícone para sortear"> Sortear amigo
        `;
    } else {
        // Se não, executa a lógica de sortear.
        if (amigos.length < 1) {
            alert('Adicione pelo menos um amigo para realizar o sorteio!');
            return;
        }
        sortearAmigo();
        botao.innerHTML = `
            <img src="assets/play_circle_outline.png" alt="Ícone para sortear"> Novo Sorteio
        `;
    }
}

/**
 * Função que realiza o sorteio aleatório e exibe o resultado.
 */
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}

/**
 * Função para limpar tudo: nomes adicionados e resultado.
 */
function reiniciarSorteio() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}
