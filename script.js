
const elementoLista = document.querySelector ('ul')
const elementoInput = document.querySelector ('input')
const elementoBotao = document.querySelector ('button')

const tarefas = []

function mostraTarefas () {

    elementoLista.innerHTML = ''

    for(tarefa of tarefas) {
        const elementoTarefa = document.createElement ('li')
        const textoTarefa = document.createTextNode (tarefa)

        const elementoLink = document.createElement ('a')
        const pos = tarefas.indexOf(tarefa)

        const linkText = document.createTextNode ('x')
        elementoLink.appendChild(linkText)

        elementoLink.setAttribute ('onclick', `deletaTarefa(${pos})`)

        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
        elementoTarefa.appendChild(elementoLink)

    }

}

mostraTarefas()

function addTarefa (){
    const textoTarefa = elementoInput.value
    tarefas.push(textoTarefa)
    elementoInput.value = ''

    mostraTarefas()
}

elementoBotao.setAttribute('onclick','addTarefa()')

function deletaTarefa (pos){
    tarefas.splice(pos, 1)
    mostraTarefas()
}

document.addEventListener ("keypress", function(e){

    if(e.key === "Enter"){

    const btn = document.querySelector ("button");

    btn.click ();

    }
});

document.addEventListener ("alerta", function(elementoLista){
    if(elementoTarefa.value =''){
        alert ("Digite uma tarefa");
    }
});
