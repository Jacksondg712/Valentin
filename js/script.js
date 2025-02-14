const buttonNo = document.querySelector('#No')
const buttonYes = document.querySelector('#yes')
const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

let fontSize = 2

let messages = [
  'Estas segurx?',
  'Piensalo bien',
  'Piensalo muy bien',
  'Piensalo',
  'Mira el otro botón'
]

buttonNo.addEventListener('click', () => {
  // fontSize = fontSize + .5
  // buttonYes.style.fontSize = `${fontSize}rem`
  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})

btnCloseElement.disabled = true

btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    //
    coverElement.style.zIndex = -1

    const paperElement = document.querySelector('.paper1')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart1')
    heartElement.style.display = 'block'

  }, 500)

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper1')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')

  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart1')
    heartElement.style.display = 'none'
  },500)
})


