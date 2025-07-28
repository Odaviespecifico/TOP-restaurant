let mainDiv = document.getElementById('content');

export let renderContent = function renderContent() {
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('images');
    let images = [
        "https://s2.glbimg.com/IaEnP49buSdSUDftlMxVrq3-ZDo=/940x523/e.glbimg.com/og/ed/f/original/2019/04/26/loucosporti1.jpg",
        "https://conteudo.imguol.com.br/c/noticias/f6/2022/07/21/hellmanns-escolhe-sao-paulo-para-lancar-sua-primeira-hamburgueria-1658432069335_v2_4x3.jpg",
        "https://cdn.abrahao.com.br/base/7cd/ace/91c/ideias-de-cardapio-para-hamburgueria.jpg"
    ];
    images.forEach(src => {
        let img = document.createElement('img');
        img.src = src;
        img.alt = "Hamburger";
        imageDiv.appendChild(img);
    });
    mainDiv.appendChild(imageDiv);
    const h1 = document.createElement('h1')
    h1.textContent = "Temos os melhores hamburgeres do mundo!"
    const h2 = document.createElement('h2')
    h2.textContent = "São os melhores mesmo"
    mainDiv.appendChild(h1)
    mainDiv.appendChild(h2)
}

export let renderAbout = function renderAbout() {
    let h1 = document.createElement('h1')
    h1.textContent = "Unfortunately, you can't contact me"
    mainDiv.appendChild(h1)
}

export let clearContent = function clearContent() {
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
    }
}
// <div class="images">
//             <img src="https://s2.glbimg.com/IaEnP49buSdSUDftlMxVrq3-ZDo=/940x523/e.glbimg.com/og/ed/f/original/2019/04/26/loucosporti1.jpg" alt="Hamburger">
//             <img src="https://conteudo.imguol.com.br/c/noticias/f6/2022/07/21/hellmanns-escolhe-sao-paulo-para-lancar-sua-primeira-hamburgueria-1658432069335_v2_4x3.jpg" alt="Hamburger">
//             <img src="https://cdn.abrahao.com.br/base/7cd/ace/91c/ideias-de-cardapio-para-hamburgueria.jpg" alt="Hamburger">
//         </div>
//         <h1>Temos os melhores hamburgeres do mundo</h1>
//         <h2>São bons mesmo</h2>