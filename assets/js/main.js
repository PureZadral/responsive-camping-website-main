/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
	  navToggle = document.getElementById('nav-toggle')
	  navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

/*===== MENU HIDDEN =====*/
if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const LinkAction = () =>{
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
	const header = document.getElementById('header')
	// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	this.scrollY >= 50 ? header.classList.add('bg-header')
						: header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== GSAP ANIMATION ===============*/
