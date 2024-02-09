function change(event){
    let Gaming = document.querySelector(event)

    if (event === '.js-button'){
        if (Gaming.classList.contains('is-toggled')){
            Gaming.classList.remove('is-toggled')
            Gaming.classList.add('not-toggled')
            document.querySelector('.js-button2').classList.add('is-toggled')
            document.querySelector('.js-button3').classList.add('is-toggled')
        }else if (Gaming.classList.contains('not-toggled')) {
            Gaming.classList.remove('not-toggled')
            Gaming.classList.add('is-toggled')
        }
    }else if (event === '.js-button2'){
        if (Gaming.classList.contains('is-toggled')){
            Gaming.classList.remove('is-toggled')
            Gaming.classList.add('not-toggled')
            document.querySelector('.js-button').classList.add('is-toggled')
            document.querySelector('.js-button3').classList.add('is-toggled')
        }else if (Gaming.classList.contains('not-toggled')) {
            Gaming.classList.remove('not-toggled')
            Gaming.classList.add('is-toggled')
        }
    }else if ('.js-button3'){
        if (Gaming.classList.contains('is-toggled')){
            Gaming.classList.remove('is-toggled')
            Gaming.classList.add('not-toggled')
            document.querySelector('.js-button').classList.add('is-toggled')
            document.querySelector('.js-button2').classList.add('is-toggled')
        }else if (Gaming.classList.contains('not-toggled')) {
            Gaming.classList.remove('not-toggled')
            Gaming.classList.add('is-toggled')
        }
    }    
    
}