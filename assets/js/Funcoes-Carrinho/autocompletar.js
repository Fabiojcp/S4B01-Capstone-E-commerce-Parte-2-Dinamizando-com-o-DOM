let inputField = document.getElementById('pesquisa_texto');
let autoComplete = document.getElementById('autocomplete');
inputField.addEventListener('input', changeAutoComplete);
autoComplete.addEventListener('click', selectItem);
let itens = []

function addBuscas (arrProdutos) {
    let resultado = [ ]
    
    for (let i = 0; i < arrProdutos.length; i++) {
        for (let j = 0; j < arrProdutos[i].busca.length; j++) {
            resultado.push(arrProdutos[i].busca[j].toLowerCase())
        }
    }
    
    itens = resultado.filter(function(ele , pos){
       return resultado.indexOf(ele) == pos;
    })
}

addBuscas (dataProdutos)

function changeAutoComplete (event) {
    let digitacao = event.target.value
    let arrAutoCmplt = []
    autoComplete.innerHTML= ''

    for (let i = 0; i < itens.length; i++) {
        if (itens[i].toLowerCase().includes(digitacao.toLowerCase()) && digitacao.length > 0 && digitacao[0] == itens[i][0]) {
            const sugestao = document.createElement('p')
            sugestao.classList = 'textos_pesquisa'
            sugestao.innerText = itens[i]
            sugestao.id = itens[i]
            autoComplete.appendChild(sugestao)
        }
    }

}

function selectItem (event) {
    let texto = event.target.id
    console.log(texto)
    document.getElementById('pesquisa_texto').value = texto
    autoComplete.innerHTML = ''
}

