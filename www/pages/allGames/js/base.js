// Carrega as informações do localstorage e preenche na tela base

function carregaData () {
    const headerTrailer = document.querySelector('.headerTrailer');
    const logoPokemon = document.querySelector('.logoPokemon');
    const descricao = document.querySelector('.mainBaseGame p');
    const capa = document.querySelector('.buyGame img');

    const nintendo = document.getElementById('nintendo');
    const google = document.getElementById('google');

    // Pega os dados do localstorage
    let dados = localStorage.getItem('dados')
    let jsonDados = JSON.parse(dados)
    console.log(jsonDados);
    
    // Adiciona a logo, capa, descrição e o trailer a tela
    headerTrailer.src = jsonDados.trailer;
    logoPokemon.src = jsonDados.logoPokemon;
    descricao.innerHTML = jsonDados.descricao
    capa.src = jsonDados.capasPokemon

    // Adiciona o link para compra do jogo pela nintendo
    nintendo.addEventListener('click', () => {
        let link = jsonDados.linkNintendo
        window.location.href = link;
    })

    // Adiciona o link de pesquisa no shopping do google
    google.addEventListener('click', () => {
        let link = jsonDados.linkGoogle
        window.location.href = link;
    })

    // Adiciona as images referente ao jogo 

    const slidePhotos = document.querySelector('.slidePhotos');
    slidePhotos.innerHTML += `
        <img class="width animate-on-scroll opacity" data-animation="fadeInUp" src="${jsonDados.galeryPhotos[0]}" alt="image pokemon game">
        <img class="width animate-on-scroll opacity" data-animation="fadeInUp" src="${jsonDados.galeryPhotos[1]}" alt="image pokemon game">
        <img class="width animate-on-scroll opacity" data-animation="fadeInUp" src="${jsonDados.galeryPhotos[2]}" alt="image pokemon game">
        <img class="width animate-on-scroll opacity" data-animation="fadeInUp" src="${jsonDados.galeryPhotos[3]}" alt="image pokemon game">
        <img class="width animate-on-scroll opacity" data-animation="fadeInUp" src="${jsonDados.galeryPhotos[4]}" alt="image pokemon game">
    `
}

carregaData()

// Função para voltar a tela anterior

const backDados = document.querySelector('.backDados');

backDados.addEventListener('click', () => {
    window.location.href = './index.html'
})


