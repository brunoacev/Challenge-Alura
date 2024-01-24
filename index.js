// Challenger Alura!

// As "chaves" de criptografia que utilizaremos são:
// A letra "a" é convertida para "ai"
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function Encripted(){  
    // Elementos do html
    let inputText = document.getElementById("input-text").value
    let notFoundContent = document.getElementById('not-found-content')
    let paragraphMessage = document.getElementById('paragraph-message')
    let messageContent = document.getElementById('message-content')

    let newArr = []
    let message = ''

    // Uma alternativa mais longa para encriptação da palavra/frase.
    // Utilizando método split para separar as letras e salvar no formato de array para fazer uma concatenação na frase final. 
    inputText.split('').map((letter) => {
        if(letter === 'a') {
            newArr.push("ai")
            return
        }
        if(letter === 'e') {
            newArr.push("enter")
            return
        }
        if(letter === 'i') {
            newArr.push("imes")
            return
        }
        if(letter === 'o') {
            newArr.push("ober")
            return
        }
        if(letter === 'u') {
            newArr.push("ufat")
            return
        }
        return newArr.push(letter)
    })

    newArr.map((item) => message += item)

    // Ações para manipulação dos elementos no HMTL
    notFoundContent.classList.add('hidden')
    messageContent.classList.remove('hidden')
    messageContent.classList.add('flex')
    paragraphMessage.innerHTML = message

    // Retorno do resultado da encriptação
    return message
}

function Decripted(){
    // Elementos do html
    let inputText = document.getElementById("input-text").value
    let paragraphMessage = document.getElementById('paragraph-message')

    const criptoKeys = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    }
   
    // Uma alternativa curta para decodificação utilizando as chaves e valores do objeto, separados pelo metodo split baseado na chave do objeto e acescentado o valor correspondente a sua chave.
    for(const [key, value] of Object.entries(criptoKeys)){
        inputText = inputText.split(key).join(value)
    }

    // Ação para manipulação dos elementos no HMTL
    paragraphMessage.innerText = inputText
 
    // Retorno do resultado da encriptação
    return inputText
}


function CopyMessageButtom(){
    // Elemento do html
    let paragraphMessage = document.getElementById('paragraph-message').textContent

    // Funções como input.select() e document.execCommand('copy') não funciona muito bem, utilizei a api navigator do browser.
    navigator.clipboard.writeText(paragraphMessage);
    alert("Texto copiado para a área de transferência!", paragraphMessage);
}

function Message(type){
    // Função Message recebe por parametros uma string decripted ou encripted, caso não seja nenhum desses valores retorna null.

    const encriptedMessage = Encripted()

    if(type === "decripted"){
        return Decripted(encriptedMessage)
    }
   
    if(type === "encripted"){
        return encriptedMessage
    }

    return null
}


