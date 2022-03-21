const filtroMenu = document.getElementById('header_botoes')
filtroMenu.addEventListener('click', filtrarProdutos)
vitrine.addEventListener('click', filtrarTags)

function filtrarTags (event) {
    const arrProdutos = [];
    
    if (event.target.classList == 'item_tags') {
        for (let i = 0; i < dataProdutos.length; i++) {
            if (dataProdutos[i].tag == event.target.dataset.tag) {
                arrProdutos.push(dataProdutos[i])
            }
        }
        const vitrine = document.getElementById('vitrine')
        criarProdutos(arrProdutos)
    }
}

function filtrarProdutos (event) {
    const arrProdutos = [];
    const item = event.target;

    if (item.dataset.tag == 'Todos') {
        criarProdutos(dataProdutos)
    } else {
        for (let i = 0; i < dataProdutos.length; i++) {
            if (dataProdutos[i].tag == item.dataset.tag) {
                arrProdutos.push(dataProdutos[i])
            }
        }
        const vitrine = document.getElementById('vitrine')
        criarProdutos(arrProdutos)
    }
}

const btnPesquisar = document.getElementById('pesquisa_botao')
btnPesquisar.addEventListener('click', pesquisarProdutos)

document.getElementById('pesquisa_texto').addEventListener('keypress', function (tecla) {
    if (tecla.key === 'Enter') {
        pesquisarProdutos ()
    }
})

function pesquisarProdutos () {
    const arrayProdutos = [ ];
    const input = document.getElementById('pesquisa_texto')
    for (let i = 0; i < dataProdutos.length; i++) {
        for (let j = 0; j < dataProdutos[i].busca.length; j++) {
            if (input.value.toLowerCase() == dataProdutos[i].busca[j].toLowerCase()) {
            arrayProdutos.push(dataProdutos[i])
            }

        }
        
    }
    console.log(arrayProdutos)
    if (arrayProdutos.length > 0) {
        criarProdutos(arrayProdutos)  
    } else {criarSemProdutos(semProdutos)}
}