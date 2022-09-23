//Recuperando um elemento
const body = document.body

//Criando elementos
const div = document.createElement('div')
const button = document.createElement('button')
const input = document.createElement('input')

//Criando textos
var texto = document.createTextNode('Enviar')

//Inplementando elementos dentro de outros 
div.appendChild(input)
div.appendChild(button)
body.appendChild(div)
button.appendChild(texto)

//Adicionando atributos aos elementos
input.setAttribute('placeholder', 'Digite seu nome aqui...')

//Adicionando estilo aos elementos
div.style.display = 'flex'
div.style.alignItems = 'center'
div.style.flexDirection = 'column'
div.style.justifyContent = 'center'
div.style.height = '100vh'
//button:
button.style.height = '30px'
button.style.width = '50px'
button.style.marginTop = '5px'
button.style.backgroundColor = 'pink'
button.style.border = 'none'
button.style.color = 'grey'
button.style.cursor = 'pointer'

//input
input.style.border = 'none'
input.style.backgroundColor = 'pink'
input.style.height = '30px'
input.style.width = '200px'

//Adicionando eventos aos elementos
button.addEventListener('click',() => {
    alert("Olá, "+ input.value.charAt(0).toUpperCase()+input.value.substring(1))
})