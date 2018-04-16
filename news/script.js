const header = document.querySelector('.header')
const iconContainer = document.querySelector('.icon-container')
const icon = document.querySelector('.icon')
const menuItems = document.querySelectorAll('.slider-menu__item')

window.addEventListener('scroll', e => {
	if(window.scrollY > header.offsetHeight) {
		header.style.background = 'rgba(255,255,255,1)'
	} else if(window.scrollY <= header.offsetHeight) {
		header.style.background = 'rgba(255,255,255,0)'
	}
})

iconContainer.addEventListener('click', e => {
	if(icon.classList.contains('menu')){
		icon.className = 'icon close'
		menuItems.forEach(item => {
			item.style.transform = 'translateX(0%)'
		})
	} else {
		icon.className = 'icon menu'
		menuItems.forEach(item => {
			item.style.transform = 'translateX(100%)'
		})
	}
})