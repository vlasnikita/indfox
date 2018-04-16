const iconContainer = document.querySelector('.icon-container')
const icon = document.querySelector('.icon')
const menuItems = document.querySelectorAll('.slider-menu__item')
const backgroundImage = document.querySelector('.background-image')
const categories = document.querySelectorAll('.category')
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
	if(hash == 'industrial_cooling' || !hash){
		items.style.transform = 'translateY(0%)'
		categories[0].className = `${categories[0].className} active`
		backgroundImage.style.backgroundImage = 'url(../img/item-chilling.png)'
	} else if(hash == 'conditioning'){
		items.style.transform = 'translateY(-100%)'
		categories[1].className = `${categories[1].className} active`
		backgroundImage.style.backgroundImage = 'url(../img/item-conditioning.png)'
	} else if(hash == 'cleaning'){
		items.style.transform = 'translateY(-200%)'
		categories[2].className = `${categories[2].className} active`
		backgroundImage.style.backgroundImage = 'url(../img/item-cleaning.jpg)'
	} else if(hash == 'precision_systems'){
		items.style.transform = 'translateY(-300%)'
		categories[3].className = `${categories[3].className} active`
		backgroundImage.style.backgroundImage = 'url(../img/item-precision.jpg)'
	}
}

const setAnchor = e => {
	items.style.transform = `translateY(${e.dataset.translate})`

	categories.forEach(category => {
		category.className = 'category'
	})
	e.parentNode.className = `${e.parentNode.className} active`

	const hash = e.href.split('#')[1]
	if(hash == 'industrial_cooling'){
		backgroundImage.style.backgroundImage = 'url(../img/item-chilling.png)'
	} else if(hash == 'conditioning'){
		backgroundImage.style.backgroundImage = 'url(../img/item-conditioning.png)'
	} else if(hash == 'cleaning'){
		backgroundImage.style.backgroundImage = 'url(../img/item-cleaning.jpg)'
	} else if(hash == 'precision_systems'){
		backgroundImage.style.backgroundImage = 'url(../img/item-precision.jpg)'
	}
}