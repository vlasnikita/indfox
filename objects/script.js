const iconContainer = document.querySelector('.icon-container')
const icon = document.querySelector('.icon')
const menuItems = document.querySelectorAll('.slider-menu__item')
const backgroundImage = document.querySelector('.background-image')
const categories = document.querySelectorAll('.category')
const itemContainers = document.querySelectorAll('.item-container')
const items = document.querySelector('.items')

window.onload = function(e) {
	setInitialAnchor();
}

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

const setInitialAnchor = () => {
	const hash = window.location.hash.substr(1)

	if(hash == 'chiller' || !hash){
		items.style.transform = `translateY(-${itemContainers[0].offsetTop}px)`
		categories[0].className = `${categories[0].className} active`
	} else if(hash == 'conditioning'){
		items.style.transform = `translateY(-${itemContainers[1].offsetTop}px)`
		categories[1].className = `${categories[1].className} active`
	} else if(hash == 'precision_conditioning'){
		items.style.transform = `translateY(-${itemContainers[2].offsetTop}px)`
		categories[2].className = `${categories[2].className} active`
	} else if(hash == 'fankoil'){
		items.style.transform = `translateY(-${itemContainers[3].offsetTop}px)`
		categories[3].className = `${categories[3].className} active`
	} 
}

const setAnchor = e => {
	
	items.style.transform = `translateY(-${itemContainers[e.dataset.number].offsetTop}px)`

	categories.forEach(category => {
		category.className = 'category'
	})
	e.parentNode.className = `${e.parentNode.className} active`
}