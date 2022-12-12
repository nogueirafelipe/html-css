let input = document.getElementById('eleitor')
let botao = document.getElementById('botao01')
let res = document.getElementById('res')

function buscar() {
    let nome = input.value
    res.innerHTML = `<h2>Nome do eleitor: ${nome}</h2>`
    res.innerHTML += `<p style="font-size: 1.5em; background-color: aquamarine; padding: 5px;">Voto registrado: 13.</p>`
}