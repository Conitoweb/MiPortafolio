window.addEventListener('scroll' , () =>{
    const HEADER = document.querySelector('.header')
    HEADER.classList.toggle('sticky' , window.scrollY > 5)
    })

const ABRIR_MENU = document.querySelector('.menu-hamburguesa')
const MENU_CONTENEDOR = document.querySelector('.navbar')
const CERRAR_MENU = document.querySelector('.cerrar__menu')
ABRIR_MENU.addEventListener('click' , () =>{
    MENU_CONTENEDOR.style.display = 'flex'
})
CERRAR_MENU.addEventListener('click' , (e) =>{
    e.preventDefault()
    MENU_CONTENEDOR.style.display = 'none'
})

