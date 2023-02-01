let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')
const stickyNavbar = document.querySelector('#sticky_navbar')
const stickyLinks = document.querySelector('.sticky_links')
const stickyLogo = document.querySelector('#sticky_logo')

menu.onclick = () => {
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}

window.onscroll = () => {
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')

  if (window.scrollY > 50) {
    document.querySelector('#scroll-top').classList.add('active')
    stickyNavbar.classList.remove('active')
    stickyNavbar.classList.add('sticky_navbar')
    stickyLogo.classList.remove('logo-img')
    stickyLogo.classList.add('sticky_logo')
    stickyLinks.forEach((link) => {
      stickyLinks.classList.remove('sticky_links')
      stickyLinks.classList.add('sticky_links_new')
    })
  } else {
    document.querySelector('#scroll-top').classList.remove('active')
    stickyNavbar.classList.add('active')
    stickyNavbar.classList.remove('sticky_navbar')
    stickyLogo.classList.add('logo-img')
    stickyLogo.classList.remove('sticky_logo')
    stickyLinks.forEach((link) => {
      stickyLinks.classList.add('sticky_links')
      stickyLinks.classList.remove('sticky_links_new')
    })
  }
}

function scroll_top() {
  window.scrollTo(0, 0)
}

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out')
}

function fadeOut() {
  setInterval(loader, 3000)
}

window.onload = fadeOut()
