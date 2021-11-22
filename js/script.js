let resNav = document.querySelector('.responsive-nav')
let menuButton = document.querySelector('.menu-button')

// Show hide
menuButton.addEventListener('click', () => {
  if (resNav.style.opacity == '0') {
    resNav.style.opacity = '1'
  } else {
    resNav.style.opacity = '0'
  }
})

// Close navbar on resize
window.onresize = () => {
  resNav.style.opacity = 0;
}

// Projects content data
let projectsData = [
  {
    title: 'Gmail',
    description: 'Gmail (abreviación de Google Mail) es un servicio de correo electrónico proporcionado por la empresa estadounidense Google desde el 1 de abril de 2004. Tras más de cinco años en fase "beta" (de pruebas), el 7 de julio de 2009 Gmail pasó a ser considerado un producto terminado. Las cuentas básicas de Gmail son gratuitas pero Google se remunera mostrando anuncios al usuario mientras que la versión para empresas, de pago, está libre de publicidad',
    icon: 'fas fa-envelope',
    imgPath: 'img/gmail.png'
  },
  {
    title: 'Outlook',
    description: 'Durante un período de transición entre el 31 de julio de 2012 y el 18 de febrero de 2013, las direcciones @outlook.com se ofrecieron a todos los usuarios, y quienes ya tenían cuenta en Hotmail pudieron optar por actualizarse voluntariamente a la interfaz de Outlook Hotmail que ofrecía un espacio de almacenamiento con medidas de seguridad patentadas,2​ tecnología Ajax.',
    icon: 'fas fa-at',
    imgPath: 'img/outlook.jpg'
  },
  {
    title: 'Rhythmbox',
    description: 'Rhythmbox es un reproductor de audio que reproduce y ayuda a organizar la música digital. Fue originalmente inspirado por el reproductor de Apple, iTunes. Es software libre, diseñado para trabajar bien bajo el escritorio GNOME, y usa el motor GStreamer o Xine Media. Actualmente está bajo desarrollo activo',
    icon: 'fas fa-podcast',
    imgPath: 'img/Rhythmbox.jpg'
  }
]

const fillSkillMenu = () => {
  let menu = document.querySelector('.projects-menu ul')

  projectsData.forEach(el => {
    let liItem = document.createElement('li')
    let aItem = document.createElement('a')
    let pItem = document.createElement('p')
    let iItem = document.createElement('i')
    iItem.className = `${el.icon} fa-3x`

    aItem.setAttribute('href', '#')
    pItem.innerHTML = el.title
    aItem.appendChild(pItem)
    aItem.appendChild(iItem)

    liItem.appendChild(aItem)

    menu.appendChild(liItem)
  })
}

fillSkillMenu()

// Reveal Project's menu names
let projectsMenuItems = document.querySelectorAll('#projects .projects-menu ul li a')

projectsMenuItems.forEach(el => {

  el.addEventListener('mouseover', (e) => {
    e.target.firstChild.style.opacity = '1'
  })

  el.addEventListener('mouseleave', e => {
    e.target.firstChild.style.opacity = 0
  })

  el.addEventListener('click', (e) => {
    let title = e.target
    alert(title)
  })
})