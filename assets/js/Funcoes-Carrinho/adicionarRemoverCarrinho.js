let arrQuantidades = []

function qntArrQuantidades () {
    for (let i = 0; i < dataProdutos.length; i++) {
        arrQuantidades.push(0)
    }
}

qntArrQuantidades ()

const vitrine = document.getElementById('vitrine')
vitrine.addEventListener('click', adicionarCarrinho)


// função para adicionar ao carrinho quando botão é acionado
function adicionarCarrinho (event) {
    const item = event.target.id.split('-');
    let arrProdutos = [ ];


    
    // if para verificar apenas os botões adicionar ao carrinho
    if (event.target.classList == 'item_descrição_botao_adicionar_carrinho') {        
        document.getElementById('carrinho_box_vazio').classList = 'carrinho_box_vazio_hide'
        document.getElementById('carrinho_box').classList = 'carrinho_box_show'
        
        // função para criar elementos (apenas novos, sem repetição)
        for (let i = 0; i < dataProdutos.length; i++) {
            if (item[1] == dataProdutos[i].id && !document.getElementById('remover-'+ dataProdutos[i].id)) {
                arrProdutos.push(dataProdutos[i])
                arrQuantidades[i] = 1
            }
        }
        criarCarrinho(arrProdutos)
        somarQuantidadeTotal ()
    }
    console.log('adicionarCarrinho')
    console.log(arrQuantidades)
   
}

const carrinho = document.getElementById('carrinho_items')
carrinho.addEventListener('click', removerCarrinho)

// Função para remover do carrinho
function removerCarrinho (event) {
    const item = event.target.id.split('-')

    // Função para remover do carrinho
    if (event.target.classList == 'carrinho_items_descricao_descricao_textos_botao') {
        document.getElementById('div-'+ item[1]).remove()

        // Função para trazer a quantidade de volta a 1, caso seja atualmente > 1
        for (let i = 0; i < dataProdutos.length; i++) {
            if (item[1] == dataProdutos[i].id) {
                arrQuantidades[i] = 0
            }
            somarQuantidadeTotal ()
        }
    }


    console.log('removerCarrinho')
    console.log(arrQuantidades)
}

//função para somar o quantidade de itens e valores totais, e escrever na tela
function somarQuantidadeTotal () {
    let total = 0;
    let custo = 0;

    // for para somar o total de produtos ativos
    for (let i = 0; i < dataProdutos.length; i++) {
        if (document.getElementById('div-'+ dataProdutos[i].id)) {
            total = arrQuantidades.reduce(function(soma, i) {
                return soma + i;
            });
            custo += arrQuantidades[i]*dataProdutos[i].custo
        }
    }
    document.getElementById('carrinho_propriedades_quantidade_valor').innerText = total
    document.getElementById('carrinho_propriedades_total_valor').innerText = 'R$ ' + custo +',00'

    // if para limpar o carrinho caso esteja vazio
    if (total < 1) {
        document.getElementById('carrinho_box_vazio').classList = 'carrinho_box_vazio_show'
        document.getElementById('carrinho_box').classList = 'carrinho_box_hide'
    }
    console.log('somarQuantidadeTotal')
    console.log(arrQuantidades)
}

// Função para alterar os valores individuais

carrinho.addEventListener('click', somarQuantidadeIndividual)

function somarQuantidadeIndividual (event) {
    const item = event.target.id.split('-')

    // if verificar clicks apenas nos botões + e -
    if (event.target.classList == 'carrinho_items_descricao_descricao_botao_quantidade_menos') {
        for (let i = 0; i < dataProdutos.length; i ++) {
            // if para soma
            if (item[0] == 'mais' && item[1] == dataProdutos[i].id) {
                arrQuantidades[i]++
                console.log('+')
                document.getElementById('quantidade-' + item[1]).innerText = arrQuantidades[i]
                document.getElementById('custo-' + item[1]).innerText = 'R$ ' + arrQuantidades[i]*dataProdutos[i].custo + ',00'
            } else if ((item[0] == 'menos' && item[1] == dataProdutos[i].id && dataProdutos[i].quantidade > 0)) {
                arrQuantidades[i]--
                console.log('-')
                document.getElementById('quantidade-' + item[1]).innerText = arrQuantidades[i]
                document.getElementById('custo-' + item[1]).innerText = 'R$ ' + arrQuantidades[i]*dataProdutos[i].custo + ',00'
            }
        }
        console.log('somarQuantidadeIndividual')
        console.log(arrQuantidades)
        somarQuantidadeTotal ()
    }
} 