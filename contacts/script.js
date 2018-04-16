const iconContainer = document.querySelector('.icon-container')
const icon = document.querySelector('.icon')
const menuItems = document.querySelectorAll('.slider-menu__item')

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

ymaps.ready(init);
let map, moscow, spb

function init(){ 
    map = new ymaps.Map("map", {
        center: [57.76, 32.64],
        zoom: 5
    });
    
    moscow = new ymaps.Placemark([55.76, 37.64], {
        hintContent: 'Москва!',
        balloonContentHeader: 'Офис InDFox в Москве',
        balloonContentBody: '+7 (495) 150-19-35'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: '../img/logo-marker.png',
        iconImageSize: [24, 24],
        iconImageOffset: [-12, -12]
	})

    spb = new ymaps.Placemark([59.94, 30.32], {
        hintContent: 'Санкт-Петербург!',
        balloonContentHeader: 'Офис InDFox в Санкт-Петербурге',
        balloonContentBody: '+7 (495) 150-19-35'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: '../img/logo-marker.png',
        iconImageSize: [24, 24],
        iconImageOffset: [-12, -12]
	})
    
    map.geoObjects.add(moscow).add(spb)
}

const inputOnFocus = el => { 
    el.parentNode.className = el.parentNode.className + ' focus' 
    console.log(el.parentNode)
}
const inputOnBlur = el => { el.parentNode.className = el.parentNode.className.replace(' focus', '') }