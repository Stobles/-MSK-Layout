var ua=navigator.userAgent
var isMobile = {
    Android: function () {
        return ua.match(/Android/i);
    },
    BlackBerry: function () {
        return ua.match(/BlackBerry/i);
    },
    iOS: function () {
        return ua.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return ua.match(/Opera Mini/i);
    },
    Windows: function () {
        return ua.match(/IEMobile/i);
    },
    Mobile: function () {
        return ua.search(/mobile/i);
    },
    any: function () {
        return ((isMobile.Android() || isMobile.BlackBerry()) || (isMobile.iOS() || isMobile.Opera()) || (isMobile.Windows() || isMobile.Mobile() > 0));
    }
}

function removeClass(array, classToRemove) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        element.classList.remove(classToRemove)
        
    }
}


window.onload = function () {
    burger = document.querySelector('.burger')
    menuBody = document.querySelector('.nav')

    burger.addEventListener('click', ()=>{
        menuBody.classList.toggle('_active')
        burger.classList.toggle('_active')
    })
}