let image1 = document.getElementById('theme-image-1');
let image2 = document.getElementById('theme-image-2');
let styles = getComputedStyle(document.documentElement);

window.onload = function() {
    $('.js-lazyYT').lazyYT(); 
};

if(window.localStorage.getItem('isLight') == null) window.localStorage.setItem('isLight', 'true');
else if(window.localStorage.getItem('isLight') == 'true') {                         /* LIGHT */
    document.documentElement.style.setProperty('--main-color', '#00a4ee');
    document.documentElement.style.setProperty('--side-color', 'white');
    document.documentElement.style.setProperty('--shadow-color', '#0083bf');
    document.documentElement.style.setProperty('--text-color', 'black');
    document.documentElement.style.setProperty('--header-color', 'rgba(0, 164, 238, 1)');
    document.documentElement.style.setProperty('--background-color', 'white');
    document.documentElement.style.setProperty('--hr-color', 'black');
    document.documentElement.style.setProperty('--scroll-track', 'rgba(0, 164, 238, 0.65)');
    document.documentElement.style.setProperty('--scroll-thumb', '#0083bf');

    image1.removeAttribute('src');
    image1.setAttribute('src', 'img/Moon.svg');

    image2.removeAttribute('src');
    image2.setAttribute('src', 'img/Moon.svg');
}
else if(window.localStorage.getItem('isLight') == 'false') {                        /* DARK */
    document.documentElement.style.setProperty('--main-color', '#1a1a2f');
    document.documentElement.style.setProperty('--side-color', 'white');
    document.documentElement.style.setProperty('--shadow-color', '#0083bf');
    document.documentElement.style.setProperty('--text-color', 'white');
    document.documentElement.style.setProperty('--header-color', 'rgba(35, 21, 60, 1)');
    document.documentElement.style.setProperty('--background-color', '#23153c');
    document.documentElement.style.setProperty('--hr-color', 'white');
    document.documentElement.style.setProperty('--scroll-track', 'rgba(35, 21, 60, 1)');
    document.documentElement.style.setProperty('--scroll-thumb', 'white');

    image1.removeAttribute('src');
    image1.setAttribute('src', 'img/Sun.svg');

    image2.removeAttribute('src');
    image2.setAttribute('src', 'img/Sun.svg');
}

// БУРГЕР
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle(`_lock`);
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

window.onscroll = changeHeader;

function changeHeader() {
    let scrolled = window.scrollY || document.documentElement.scrollTop; 
    if(scrolled !== 0){
        if (window.localStorage.getItem('isLight') == 'true') {
            document.documentElement.style.setProperty('--header-color', 'rgba(0, 164, 238, 0.65)');
        } 
        else {
            document.documentElement.style.setProperty('--header-color', 'rgba(35, 21, 60, .5)');
        }
    } 
    else {
        if (window.localStorage.getItem('isLight') == 'true') {
            document.documentElement.style.setProperty('--header-color', 'rgba(0, 164, 238, 1)');
        } 
        else {
            document.documentElement.style.setProperty('--header-color', 'rgba(35, 21, 60, 1)');
        }
    };
};

function changeTheme() {
    if (window.localStorage.getItem('isLight') == 'true') {                         /* DARK */
        document.documentElement.style.setProperty('--main-color', '#1a1a2f');
        document.documentElement.style.setProperty('--side-color', 'white');
        document.documentElement.style.setProperty('--shadow-color', '#0083bf');
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--header-color', 'rgba(35, 21, 60, .5)');
        document.documentElement.style.setProperty('--background-color', '#23153c');
        document.documentElement.style.setProperty('--hr-color', 'white');
        document.documentElement.style.setProperty('--scroll-track', 'rgba(35, 21, 60, 1)');
        document.documentElement.style.setProperty('--scroll-thumb', 'white');

        image1.removeAttribute('src');
        image1.setAttribute('src', 'img/Sun.svg');

        image2.removeAttribute('src');
        image2.setAttribute('src', 'img/Sun.svg');

        window.localStorage.setItem('isLight', 'false');
        changeHeader();
    } else {                                                                        /* LIGHT */
        document.documentElement.style.setProperty('--main-color', '#00a4ee');
        document.documentElement.style.setProperty('--side-color', 'white');
        document.documentElement.style.setProperty('--shadow-color', '#0083bf');
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--header-color', 'rgba(0, 164, 238, .65)');
        document.documentElement.style.setProperty('--background-color', 'white');
        document.documentElement.style.setProperty('--hr-color', 'black');
        document.documentElement.style.setProperty('--scroll-track', 'rgba(0, 164, 238, 0.65)');
        document.documentElement.style.setProperty('--scroll-thumb', '#0083bf');

        image1.removeAttribute('src');
        image1.setAttribute('src', 'img/Moon.svg');

        image2.removeAttribute('src');
        image2.setAttribute('src', 'img/Moon.svg');

        window.localStorage.setItem('isLight', 'true');
        changeHeader();
    }
}

// ПЛАВНЫЙ СКРОЛЛ       
const menuLinks = document.querySelectorAll('a[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove(`_lock`);
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })
            e.preventDefault();
        }
    }
}

// ПЕРЕВОД
function changeLanguage() {
    if(window.localStorage.getItem('currentLanguage') == null) window.localStorage.setItem('currentLanguage', 'ua');

    let language = window.localStorage.getItem('currentLanguage');

    if(language == 'ua') {
        for(let key in langArray) {
            let elem = document.querySelector('.lng-'+key);
            if(elem) {
                elem.innerHTML = langArray[key]['en'];
            }
        }
        window.localStorage.setItem('currentLanguage', 'en');
    }
    else {
        for(let key in langArray) {
            let elem = document.querySelector('.lng-'+key);
            if(elem) {
                elem.innerHTML = langArray[key]['ua'];
            }
            
        }
        window.localStorage.setItem('currentLanguage', 'ua');
    }
}





