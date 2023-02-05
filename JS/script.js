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

// Jquery
$(document).ready(function () {
  var scrollLink = $('.smooth_links')

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault()
    $('body,html').animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      100,
    )
  })

  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop()

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 10

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active_links')
        $(this).parent().siblings().removeClass('active_links')
      }
    })
  })
})
