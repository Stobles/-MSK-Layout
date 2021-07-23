var myMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (myMobile.Android() || 
                myMobile.BlackBerry() || 
                myMobile.iOS() || 
                myMobile.Opera() || 
                myMobile.Windows());
    }
};


function removeClass(array, classToRemove) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        element.classList.remove(classToRemove)
        
    }
}

function openSpoller() {
    spollers.forEach(spoller => {
        spoller.addEventListener('click',(e)=>{
            const answer = spoller.children[1]
            spoller.classList.toggle('_active__spoller')
            if (spoller.classList.contains('_active__spoller')) {
                spoller.style.paddingBottom = answer.clientHeight + 25 + 'px'
                answer.style.opacity = '1'
            }
            if (!spoller.classList.contains('_active__spoller')) {
                spoller.style.paddingBottom = '18px'
                answer.style.opacity = '0'
                
            }


        })
    });
}


function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    }) 
}


window.onload = function () {
    burger = document.querySelector('.burger')
    menuBody = document.querySelector('.nav')


    burger.addEventListener('click', ()=>{
        menuBody.classList.toggle('_active')
        burger.classList.toggle('_active')
        document.body.classList.toggle('lock')
    })


    spollersParent = document.querySelector('#spoller-parent')
    spollers = document.querySelectorAll('#spoller')

    if(spollersParent.dataset.type != 'one'){
        openSpoller()
    }

    let buttons = document.querySelectorAll('.nav__item')

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', (e)=>{
            id = button.dataset.idtoscroll
            element = document.getElementById(id)
            scrollTo(element)
            menuBody.classList.remove('_active')
            burger.classList.remove('_active')
            document.body.classList.remove('lock')
        })
        
    }

    const modals = document.querySelectorAll('.modal')
    const lockPadding = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    
    document.addEventListener('click', (e)=>{
        if(e.target.classList.contains('_modal__btn')){
            let modalToActive = e.target.dataset.modal
            for (let i = 0; i < modals.length; i++) {
                const modal = modals[i];
                if (modal.id == modalToActive){
                    modal.style.transform = "translateX(0) skew(0deg, 0deg)"
                    modal.classList.add('_active');
                    document.body.classList.add('lock')
                    console.log(lockPadding)
                    document.body.style.paddingRight = lockPadding;
                    document.querySelector('.header').style.paddingRight = lockPadding;
                }
                
            }

        }

        if(e.target.classList.contains('modal__close')){
            for (let i = 0; i < modals.length; i++) {
                const modal = modals[i];
                if(modal.classList.contains('_active')){
                    modal.classList.remove('_active')
                    modal.style.transform = "translateX(-200%) skew(-10deg, -40deg)"
                    document.body.classList.remove('lock')
                    document.body.style.paddingRight = '0';
                    document.querySelector('.header').style.paddingRight = '0';
                    
                }
                
            }
        }

        if(e.target.classList.contains('map__button')){
            document.querySelector('.map__inner').style.display = 'block'
        }
    })

}