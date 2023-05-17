// function testWebP(callback) {

// 	var webP = new Image();

// 	webP.onload = webP.onerror = function () {
// 		callback(webP.height == 2);
// 	};

// 	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }
	
// testWebP(function (support) {
// 	if (support == true) {
// 		document.querySelector('body').classList.add('webp');
// 	} else {
// 			document.querySelector('body').classList.add('no-webp');
// 		}
// });

// Меню бургер

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu-list');
if (headerBurger) {
	headerBurger.addEventListener("click", function (e) {
		headerBurger.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
		document.body.classList.toggle('_lock');

	});
}

const menuLinks = document.querySelectorAll('.header__menu-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick (e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;

            if (headerBurger.classList.contains('_active')) {
                headerBurger.classList.remove('_active');
                headerMenu.classList.remove('_active');
                document.body.classList.remove('_lock');
            }
            window.scrollTo ({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

new Swiper ('.construction-repair__slider', {
    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
    pagination: {
        el: '.swiper-pagination',
		type: 'bullets',
		// type: 'fraction',
		// type: 'progressbar',
		//Буллеты
		clickable: true,
		//Динамические буллеты
		dynamicBullets: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    slidesPerView: 1,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // }
});
// // alert("Hello gulp!");

new Swiper (".about__slider", {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});

// начало скрипт табов //
$("ul.tabs__caption").on("click", "li:not(.active)", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("div.tabs")
      .find("div.services__features")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });
  // конец скрипт табов //

$("ul.gallery__list").on("click", "li", function () {
    $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.gallery__block-slider")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
  });
  $("div.gallery__block-slider").on("click", function () {
    $("div.gallery__block-slider").removeClass("active")
});
$("ul.tabs__caption").on("click", "li:not(.active)", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("div.tabs")
      .find("div.tabs__content")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });
// new Swiper (".gallery__slider", {
    
//     // effect: 'fade',
//     // fadeEffect: {
//     //     crossFade: true
//     // },
//     // loop: true,
//     // pagination: {
//     //     el: '.swiper-pagination',
//     //     type: 'progressbar',
//     // },
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//         el: '.swiper-pagination',
// 		// type: 'bullets',
// 		// type: 'fraction',
// 		type: 'progressbar',
// 		//Буллеты
// 		clickable: true,
// 		//Динамические буллеты
// 		dynamicBullets: false,
//     },
// });
