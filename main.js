const form = document.getElementById('lista-contatos')

const names = []
const phones = []

let dados = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    dadosTabela()
    atualizaTabela()
    totalContatos()

})

function dadosTabela() {
    const inputNomeContato = document.getElementById('name')
    const inputPhoneContato = document.getElementById('phone')

    if(names.includes(inputNomeContato.value)){
        alert(`O contato ${inputPhoneContato.value} já existe`)
    } else {
        names.push(inputNomeContato.value)
        phones.push(inputPhoneContato.value)

        let linha = `<tr>`;
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputPhoneContato.value}</td>`;
        linha += `</tr>`;

        dados += linha
    }

    inputNomeContato.value = ''
    inputPhoneContato.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = dados
}

function totalContatos(){
    const numeroDeContatos = document.getElementById('total-contatos')
    numeroDeContatos.innerHTML = `<td>${phones.length}</td>`
}