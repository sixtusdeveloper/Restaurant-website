let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')
const stickyNavbar = document.querySelector('#sticky_navbar')
const Links = document.querySelectorAll('header .navbar a')
const stickyLogo = document.querySelector('#sticky_logo')
const stickyLogoTwo = document.querySelector('#sticky_logo-2')

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
    // Logo change
    stickyLogo.style.display = 'block'
    stickyLogoTwo.style.display = 'none'
    // Loop through each link and change the color
    for (let Link of Links) {
      Link.style.color = '#fff'
    }
  } else {
    document.querySelector('#scroll-top').classList.remove('active')
    stickyNavbar.classList.add('active')
    stickyNavbar.classList.remove('sticky_navbar')
    // Logo change
    stickyLogo.style.display = 'none'
    stickyLogoTwo.style.display = 'block'
    // Loop through each link and change the color
    for (let Link of Links) {
      Link.style.color = '#333'
    }
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

document.getElementById('redirect_url_store').onclick = function () {
  window.open(
    (window.location.href = 'https://play.google.com/store/apps'),
    '_blank',
  )
}

// Auto indicate active section from the section link script
const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.navbar a')

const options = {
  rootMargin: '-50% 0% -50% 0%',
  threshold: 0,
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id')
      navLinks.forEach((link) => {
        link.classList.remove('active_links')
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active_links')
        }
      })
    }
  })
}, options)

sections.forEach((section) => {
  observer.observe(section)
})
